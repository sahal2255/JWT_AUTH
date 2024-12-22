import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import SearchComponent from '../components/SearchComponent';

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [searchInput,setSearchInput]=useState('')
  const SearchProduct=(searchData)=>{
    setSearchInput(searchData)
    console.log('search product in the product listing page',searchInput)
  }
  
  const searchedProduct=productData.filter((item)=>{
    return item.title?.toUpperCase().includes(searchInput?.toUpperCase()||'')
  })

  // console.log(searchedProduct)
  useEffect(() => {
    const productFetching = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProductData(response.data.products);
        // console.log(productData)
      } catch (error) {
        console.log('error in the product component', error);
      }
    };
    productFetching();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 min-h-screen">
      <aside className="bg-gray-200 p-4 h-full md:h-auto">
        <Sidebar productData={productData}/>
      </aside>
      <main className="p-4">
        <div className='mx-20 bg-slate-300 rounded-lg' >
          {/* search option section */}
          <SearchComponent SearchProduct={SearchProduct}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchedProduct.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Product;
