import React, { useState } from 'react';


  
const Product = () => {
    const [formData, setFormData] = useState({
        title: '',
        sku: '',
        description: '',
        price: '',
        status: 'active',
        mainImage: null,
        subImages: [],
        category: '',
        tags: []
      });
    
      const tags = ['Electronics', 'Clothing', 'Books', 'Furniture', 'Toys'];
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handlePriceChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
          setFormData({
            ...formData,
            price: parseFloat(value).toFixed(2)
          });
        }
      };
    
      const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (e.target.name === 'mainImage') {
          setFormData({
            ...formData,
            mainImage: files[0]
          });
        } else {
          setFormData({
            ...formData,
            subImages: [...formData.subImages, ...files]
          });
        }
      };
    
      const handleTagChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => {
          const newTags = checked
            ? [...prevState.tags, value]
            : prevState.tags.filter((tag) => tag !== value);
          return { ...prevState, tags: newTags };
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    
    
  return (
    <div className='bg-slate-100'>
         <div className=" py-10">
 <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded">
    <p className='text-3xl font-bold text-gray-900'>Product Details</p>
      <div className="mb-4 mt-3">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">SKU</label>
        <input
          type="text"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          maxLength="500"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handlePriceChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Status</label>
        <div>
          <label>
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.status === 'active'}
              onChange={handleChange}
              className="mr-2"
            />
            Active
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="status"
              value="deactive"
              checked={formData.status === 'deactive'}
              onChange={handleChange}
              className="mr-2"
            />
            De-active
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Main Image</label>
        <input
          type="file"
          name="mainImage"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Sub Images</label>
        <input
          type="file"
          name="subImages"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="furniture">Furniture</option>
          <option value="toys">Toys</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Tags</label>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <label key={tag} className="mr-4">
              <input
                type="checkbox"
                name="tags"
                value={tag}
                checked={formData.tags.includes(tag)}
                onChange={handleTagChange}
                className="mr-2"
              />
              {tag}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Product
