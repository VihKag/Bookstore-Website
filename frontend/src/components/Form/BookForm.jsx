import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import {get} from '../../utils/ApiUtils';
import { API_CATEGORY } from '../../api/Api';
const BookForm = () => {
  const [cateOptions, setCateOptions]= useState([]);
  useEffect(()=>{
    get(API_CATEGORY.crudCategory+`/list`)
        .then((data)=>{
          const formattedData = data.map(item => ({
            value: item.id, 
            label: item.name,  
          }));
            setCateOptions(formattedData);
            console.log(formattedData);
        })
        .catch((error) => {
            console.error('Error getting data:', error);
        });
}, []);
  const authOptions = [
    { value: 'auth_1', label: 'categoryList 1' },
    { value: 'auth_2', label: 'categoryList 2' },
    { value: 'auth_3', label: 'categoryList 3' },
  ];
  const pubOptions = [
    { value: 'cate_1', label: 'categoryList 1' },
    { value: 'cate_2', label: 'categoryList 2' },
    { value: 'cate_3', label: 'categoryList 3' },
  ];
    const [formData, setFormData] = useState({
        ibsn: '',
        name: '', 
        description:'',
        price: 0,
        quantity: 0,
        pageCount:'',
        language: '',
        imagePath: '',
        publisherList:[],
        categoryList: [],
        authorList: [],     
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
          <label htmlFor="name" className="block text-gray-700">Sách</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="authorList" className="block text-gray-700">
            Tác giả
          </label>
          <Select
            isMulti
            name="authorList"
            options={authOptions}
            handleChange={(selectedOptions)=>handleChange('authorList', selectedOptions.map((option)=>option.value))}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700">Số lượng</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
 
        <div className="mb-4">
          <label htmlFor="language" className="block text-gray-700">Ngôn ngữ</label>
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
          <label htmlFor="pageCount" className="block text-gray-700">Số trang</label>
          <input
            type="number"
            id="pageCount"
            name="pageCount"
            value={formData.pageCount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="categoryList" className="block text-gray-700">
            Thể loại
          </label>
          <Select
            isMulti
            name="categoryList"
            options={cateOptions}
            handleChange={(selectedOptions)=>handleChange('categoryList', selectedOptions.map((option)=>option.value))}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="publisherList" className="block text-gray-700">
            Nhà xuất bản
          </label>
          <Select
            isMulti
            name="publisherList"
            options={pubOptions}
            handleChange={(selectedOptions)=>handleChange('publisherList', selectedOptions.map((option)=>option.value))}
            className="basic-multi-select"
            classNamePrefix="select"
          />
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
          <label htmlFor="description" className="block text-gray-700">Mô tả</label>
          {/* <input
            type="text"
            id="description"
            name="description"
            onChange={(e)=>handleChange('description', e.target.value)}
            multiple 
          /> */}
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="imagePath" className="block text-gray-700">Ảnh</label>
          <input
            type="file"
            id="imagePath"
            name="imagePath"
            onChange={(e)=>handleChange('imagePath', e.target.value)}
            multiple 
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Thêm sách</button>
      </form>
    </div>
  );
};

export default BookForm;
