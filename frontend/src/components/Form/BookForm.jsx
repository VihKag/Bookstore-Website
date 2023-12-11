import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import {get, post} from '../../utils/ApiUtils';
import { API_AUTHOR, API_BOOK, API_CATEGORY, API_PUBLISHER } from '../../api/Api';
import { showErrorToast, showSuccessToast } from '../../utils/ToastUtils';
import { ToastContainer } from 'react-toastify';
const BookForm = () => {
  const [cateOptions, setCateOptions]= useState([]);
  const [authOptions, setAuthOptions]= useState([]);
  const [pubOptions, setPubOptions] = useState([]);
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
    get(API_AUTHOR.crudAuthor+`/list`)
      .then((data)=>{
        const formattedData = data.map(item => ({
          value: item.authorId, 
          label: item.name,  
        }));
          setAuthOptions(formattedData);
          console.log(formattedData);
      })
      .catch((error) => {
        console.error('Error getting data:', error);
      });
      get(API_PUBLISHER.crudPublisher+`/list`)
      .then((data)=>{
        const formattedData = data.map(item => ({
          value: item.id, 
          label: item.name,  
        }));
          setPubOptions(formattedData);
          console.log(formattedData);
      })
      .catch((error) => {
        console.error('Error getting data:', error);
      });
}, []);
    const [formData, setFormData] = useState({
        Isbn: '',
        Name: '', 
        Description:'',
        Price: 0,
        Quantity: 0,
        Date:'',
        PageCount: '',
        Language: '',
        Image: '',
        CategoryList: [],
        AuthorList: [],   
        PublisherList: [],
    });
    const handleChange = (field, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    };
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        Image: file,
      }));
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formDataSend = new FormData();
  
      // Append data to FormData
      for (const key in formData) {
        if (Array.isArray(formDataSend[key])) {
          formDataSend[key].forEach((value) => {
            formDataSend.append(`${key}[]`, value);
          });
        } else {
          formDataSend.append(key, formData[key]);
        }
      }
      for (var pair of formDataSend.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      try {
        const response = await post(API_BOOK.crudBook, formDataSend);
  
        if (!response.ok) {
          showErrorToast();
          throw new Error('Failed to create book');
        }
  
        const data = await response.json();
        showSuccessToast();
        console.log('Book created successfully:', data);
      } catch (error) {
        console.error('Error creating book:', error);
      }
    };
    
    
  return (
    <div className="container mx-auto">
      <ToastContainer/>
      {/* <ToastContainer /> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="Isbn" className="block text-gray-700">IBSN</label>
          <input
            type="text"
            id="Isbn"
            name="Isbn"
            value={formData.Isbn}
            onChange={(e) => handleChange('Isbn', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div> 

        <div className="mb-4">
          <label htmlFor="Name" className="block text-gray-700">Book</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={(e) => handleChange('Name', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="AuthorList" className="block text-gray-700">
            Authors
          </label>
          <Select
            isMulti
            id="AuthorList"
            name="AuthorList"
            options={authOptions}
            onChange={(selectedOptions)=>handleChange('AuthorList', selectedOptions.map((option)=>option.value))}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="CategoryList" className="block text-gray-700">
            Categories
          </label>
          <Select
            isMulti
            id="CategoryList"
            name="CategoryList"
            options={cateOptions}
            onChange={(selectedOptions)=>handleChange('CategoryList', selectedOptions.map((option)=>option.value))}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="PublisherList" className="block text-gray-700">
            Publisher
          </label>
          <Select
            isMulti
            id="PublisherList"
            name="PublisherList"
            options={pubOptions}
            onChange={(selectedOptions)=>handleChange('PublisherList', selectedOptions.map((option)=>option.value))}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Date" className="block text-gray-700">
            Date
          </label>
          <input
            type='date'
            id="Date"
            name="Date"
            value={formData.Date}
            onChange={(e) => handleChange('Date', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Quantity" className="block text-gray-700">Quantity</label>
          <input
            type="number"
            id="Quantity"
            name="Quantity"
            value={formData.Quantity}
            onChange={(e) => handleChange('Quantity', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
 
        <div className="mb-4">
          <label htmlFor="Language" className="block text-gray-700">Language</label>
          <input
            type="text"
            id="Language"
            name="Language"
            value={formData.Language}
            onChange={(e) => handleChange('Language', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="PageCount" className="block text-gray-700">Page count</label>
          <input
            type="number"
            id="PageCount"
            name="PageCount"
            value={formData.PageCount}
            onChange={(e) => handleChange('PageCount', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="Price" className="block text-gray-700">Price</label>
          <input
            type="number"
            id="Price"
            name="Price"
            value={formData.Price}
            onChange={(e) => handleChange('Price', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Description" className="block text-gray-700">Description</label>
          <textarea onChange={(e) => handleChange('Description', e.target.value)} name='Description' id="Description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="Image" className="block text-gray-700">Image</label>
          <input
            type="file"
            id="Image"
            name="Image"
            onChange={handleFileChange}
            multiple 
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Add book</button>
      </form>
    </div>
  );
};

export default BookForm;
