import React, { useState } from 'react'
import { assets } from '../assets/admin_assets/assets.js'
import axios from 'axios'
import { backendUrl } from '../App.jsx';
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestSeller", bestSeller);

      console.log("Backend URL:", backendUrl);
      const response = await axios.post(backendUrl + '/api/product/add', formData, { headers: { token } });
      console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setCategory("");
        setSubCategory("");
        setPrice("");
        setSizes([]);
        setBestSeller(false);
      }
      else {
        toast.error(response.data.message);
      }
    }
    catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full gap-3 items-start'>
      <div >
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Type here' required />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='write content here' required />
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className='px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Prouct price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full max-w-[500px] px-3 py-2 ' type="number" placeholder='25' required />
        </div>
      </div>
      <div>
        <p className='mb-2'>Product size</p>
        <div className='flex gap-3'>
          <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])} >
            <p className={`${sizes.includes("S") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div>
            <p className={`${sizes.includes("M") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`} onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])} >M</p>
          </div>
          <div>
            <p className={`${sizes.includes("L") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`} onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>L</p>
          </div>
          <div>
            <p className={`${sizes.includes("XL") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`} onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "Xl") : [...prev, "XL"])}>XL</p>
          </div>
          <div>
            <p className={`${sizes.includes("XXL") ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`} onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])} >XXL</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestSeller(prev => !prev)} checked={bestSeller} type="checkbox" id="bestSeller" />
        <label htmlFor="bestSeller" className='ml-2 cursor-pointer'>
          Add to best seller
        </label>
      </div>
      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  )
}

export default Add
