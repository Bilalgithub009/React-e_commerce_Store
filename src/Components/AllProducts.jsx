import {useEffect, useState } from 'react'
import '../App.css'
import Footer from './Footer'
import Cards from './Cards'
import Navbar from './Navbar'
import { Carousel } from "antd";

// slider image style
const sliderImg = {
  height: '60vh',
  width: '100vw'
};

function AllProducts() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchProducts, setSeachProducts] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  
  const fetchProducts = ()=>{
      fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) =>{
        setProducts(data.products)   // set products to array.
        const allCategory = data.products.map((all) => all.category);  //get category
                const filteredCategory = [...new Set(allCategory)];   // filter category
                setCategory(filteredCategory);  // set category to array.
      })
      .catch((err)=> console.log('Error=>', err))
   }   

  //checking data
  // {products.map((value)=>{
  //   console.log(value);
  // })
  // }

  // call api function //
  useEffect(()=>{
    setLoading(false)
    fetchProducts()
  },[])

  
  // Products Filter Functionality ⬇ //
  useEffect(() => {
    let filtered = products;   
    if (selectedCategory) {
      filtered = filtered.filter((productData) =>(
        productData.category === selectedCategory
      ));
    }
    if (searchProducts) {
      filtered = filtered.filter((productData) =>(
        productData.title.toLowerCase().includes(searchProducts.toLowerCase())
      ));
    }
    setFilteredProducts(filtered);
  }, [selectedCategory, searchProducts, products]);
  
  //Summary: Simple hamny (filtered varible) main products leliye phir unko filter() karke products ka data lelia.
  // then if ki conditions main ushi (filtered varible) ko update kia or conditions lagayin.
  // at the last setFilteredProducts(filtered); means (filtered varible) ko useState main push krdia. then ma lagake cards ka data show krdia.
  // Products Filter Functionality ⬆ //
  
  
  // ⬇ Functions For get values of search input & select.⬇ //
  const searchProductsFunc = (e)=>{
     //console.log(e.target.value);  //get search input value.
     setSeachProducts(e.target.value)
  }
  
  const selectedCategoryFunc = (e)=>{
    // console.log(e.target.value);  //get select value.
    setSelectedCategory(e.target.value)
  }
  // ⬆ Functions For get values of search input & select.⬆ //


    return (
      <>

      {loading ? (
          <div className="bg-[#ededed] w-full h-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="loader">&nbsp;</div>
         </div>
      )
      : 
      (
        <>
          {/* Navbar Start */}
          <Navbar
          searchProductsFunc={searchProductsFunc}
          searchProducts={searchProducts}
          selectedCategoryFunc={selectedCategoryFunc}
          selectedCategory={selectedCategory}
          category={category}
          />
          {/* Navbar End */}

          {/* Slider Start */}
          <Carousel autoplay>
            <div>
               <img className='sliderImage'  style={sliderImg} src="https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnVybml0dXJlfGVufDB8fDB8fHww" alt="image" />
            </div>
            <div>
               <img className='sliderImage'  style={sliderImg} src="https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" />
            </div>
            <div>
               <img className='sliderImage'  style={sliderImg} src="https://images.unsplash.com/photo-1718466044521-d38654f3ba0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcmZ1bWVzfGVufDB8fDB8fHww" alt="image" />
            </div>
            <div>
                <img className='sliderImage' style={sliderImg} src="https://t4.ftcdn.net/jpg/03/45/73/61/360_F_345736111_up8XDxSYwaoOfSC88vQTPTpA3QhI3OSn.jpg" alt="image" />
            </div>
          </Carousel>
         {/* Slider End */}

          {/* heading */}
  {/* background: linear-gradient(90deg, #3a47d5 0%,#00d2ff 100%); */}
          <h1 className='heading flex justify-center items-center gap-2'><span className='text-black'> LATEST</span><span className='text-'>ITEMS</span>
          {/* <img className='w-14' src={'https://cdn.dribbble.com/users/656025/screenshots/2782309/tienda.gif'} alt="image" /> */}
          </h1>
          
          {/* Cards Start */}
          <div className='flex flex-wrap justify-evenly mb-32 mt-3'>
           {filteredProducts.map((value)=>(
              <Cards
              category={value.category}
              images={value.thumbnail}
              description={value.description}
              price={value.price}
              title={value.title}
              id={value.id}
              rating={value.rating}
              data={value}
            />
          ))} 
        </div>
         {/* Cards End */}
  
         {/* Footer Start */}
          <Footer/>
         {/* Footer End */}
        </>
      )}

      </>
    )
  }
  
  export default AllProducts;