import React, { useState } from 'react';
import Select from 'react-select';
const BookForm = () => {
  const cateOptions = [
    { value: 'cate_1', label: 'Category 1' },
    { value: 'cate_2', label: 'Category 2' },
    { value: 'cate_3', label: 'Category 3' },
  ];
    const [formData, setFormData] = useState({
        ibsn: '',
        book_name: '',
        page_number:'',
        author: '',
        language: '',
        dcription:'',
        stock_quantity: 0,
        category: [],
        images: [],
        price: 0,
      });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="ibsn" className="block text-gray-700">IBSN</label>
          <input
            type="text"
            id="ibsn"
            name="ibsn"
            value={formData.ibsn}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="book_name" className="block text-gray-700">Book name</label>
          <input
            type="text"
            id="book_name"
            name="book_name"
            value={formData.book_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="stock_quantity" className="block text-gray-700">Stock Quantity</label>
          <input
            type="number"
            id="stock_quantity"
            name="stock_quantity"
            value={formData.stock_quantity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="language" className="block text-gray-700">Language</label>
          <input
            type="text"
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="page_number" className="block text-gray-700">Page numer</label>
          <input
            type="number"
            id="page_number"
            name="page_number"
            value={formData.page_number}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700">
            Category
          </label>
          <Select
            isMulti
            name="category"
            options={cateOptions}
            handleChange={(selectedOptions)=>handleChange('category', selectedOptions.map((option)=>option.value))}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nxb_id" className="block text-gray-700">Nhà xuất bản</label>
          <select
            id="nxb_id"
            name="nxb_id"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Chọn NXB</option>
            <option value="Đen">A</option>
            <option value="Trắng">B</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Giá tiền</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={(e) => handleChange('price', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="images" className="block text-gray-700">Ảnh</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={(e)=>handleChange('images', e.target.value)}
            multiple 
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Create Product Detail</button>
      </form>
    </div>
  );
};

export default BookForm;
