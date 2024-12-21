import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Product = () => {
  const [productData,setProductData]=useState([])

  useEffect(()=>{
    const productFetching=async()=>{
      try {
        const response=await axios.get('https://dummyjson.com/products')
        setProductData(response.data.products)
      } catch (error) {
        console.log('error in the product component',error)
      }
    }
    productFetching()
  },[])

  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-28'>
      {productData.map((item,index)=>(
        <div key={item.id}>
          <Card data={item}/>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Product;
