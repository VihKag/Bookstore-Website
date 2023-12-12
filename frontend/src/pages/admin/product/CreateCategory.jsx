import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { ToastContainer } from 'react-toastify';
import { get, post } from '../../../utils/ApiUtils';
import { API_CATEGORY } from '../../../api/Api';
import { showErrorToast, showSuccessToast } from '../../../utils/ToastUtils';

const CreateCategory = () => {
  const [cateOptions, setCateOptions]=useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    parent: '',
    description: '',
  });
  useEffect(() => {
    get(API_CATEGORY.crudCategory+'/list')
    .then((data)=> {
        const formattedData = data.map(item => ({
            value: item.id, 
            label: item.name,  
          }));
        setCateOptions(formattedData);
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })

  },[])
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post(API_CATEGORY.crudCategory, formData);
      if (response) {
        showSuccessToast('Category created successfully');
      }
    } catch (error) {
      showErrorToast('Error creating category:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        {/* Add your form fields similar to the BookForm */}
        <div className="mb-4">
          <label htmlFor="Name" className="block text-gray-700">
            Category Name
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="parent" className="block text-gray-700">
            Parent category
          </label>
          <Select
            id="parent"
            name="parent"
            options={cateOptions}
            onChange={(selectedOptions)=>handleChange('parent', selectedOptions.map((option)=>option.label))}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
