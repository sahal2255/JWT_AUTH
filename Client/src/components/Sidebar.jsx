import React from 'react'

const Sidebar = ({productData}) => {
    console.log('product data in the sidebar component',productData)
    const uniqueCategories = Array.from(new Set(productData.map(doc => doc.category)));
    // console.log('unique categories in the sidebar component',uniqueCategories)
  return (
    <div className="">
  <h2 className="text-lg font-bold mb-4">Categories</h2>
  <ul>
    <li className="mb-2 cursor-pointer hover:underline flex items-center">
      <input type="checkbox" id="electronics" className="mr-2" />
      <label htmlFor="electronics">Electronics</label>
    </li>
    <li className="mb-2 cursor-pointer hover:underline flex items-center">
      <input type="checkbox" id="fashion" className="mr-2" />
      <label htmlFor="fashion">Fashion</label>
    </li>
    <li className="mb-2 cursor-pointer hover:underline flex items-center">
      <input type="checkbox" id="home-appliances" className="mr-2" />
      <label htmlFor="home-appliances">Home Appliances</label>
    </li>
    <li className="mb-2 cursor-pointer hover:underline flex items-center">
      <input type="checkbox" id="sports" className="mr-2" />
      <label htmlFor="sports">Sports</label>
    </li>
  </ul>
</div>

  )
}

export default Sidebar
