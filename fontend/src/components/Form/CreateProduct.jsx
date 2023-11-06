import React, { useState } from 'react';

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        productdetail_id: '',
        warehouse_id: '',
        product_id: '',
        stock_quantity: 0,
        import_date: '',
        selectedSize: '',
        selectedColor: '',
        images: [],
        imageTypes: [],
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
    // Gửi formData lên server hoặc thực hiện các tác vụ khác ở đây
    console.log(formData);
  };
  const handleSizeChange = (e) => {
    setFormData({
      ...formData,
      selectedSize: e.target.value,
    });
  };

  const handleColorChange = (e) => {
    setFormData({
      ...formData,
      selectedColor: e.target.value,
    });
  };
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    const imageTypes = selectedImages.map((image) => '');
    setFormData({
      ...formData,
      images: selectedImages,
      imageTypes,
    });
  };
  const handleImageTypeChange = (e, index) => {
    const updatedImageTypes = [...formData.imageTypes];
    updatedImageTypes[index] = e.target.value;
    setFormData({
      ...formData,
      imageTypes: updatedImageTypes,
    });
  };

  const handlePriceChange = (e) => {
    setFormData({
      ...formData,
      price: e.target.value,
    });
  };


  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productdetail_id" className="block text-gray-700">Product Detail ID</label>
          <input
            type="text"
            id="productdetail_id"
            name="productdetail_id"
            value={formData.productdetail_id}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="warehouse_id" className="block text-gray-700">Warehouse ID</label>
          <input
            type="text"
            id="warehouse_id"
            name="warehouse_id"
            value={formData.warehouse_id}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="product_id" className="block text-gray-700">Product ID</label>
          <input
            type="text"
            id="product_id"
            name="product_id"
            value={formData.product_id}
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
          <label htmlFor="import_date" className="block text-gray-700">Import Date</label>
          <input
            type="text"
            id="import_date"
            name="import_date"
            value={formData.import_date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="size_id" className="block text-gray-700">Size</label>
          <select
            id="size_id"
            name="size_id"
            value={formData.selectedSize}
            onChange={handleSizeChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Chọn Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            {/* Thêm các tùy chọn size khác ở đây */}
          </select>
          {formData.selectedSize && (
            <div className="text-gray-500">Size đã chọn: {formData.selectedSize}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="color_id" className="block text-gray-700">Color</label>
          <select
            id="color_id"
            name="color_id"
            value={formData.selectedColor}
            onChange={handleColorChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Chọn Color</option>
            <option value="Đen">Đen</option>
            <option value="Trắng">Trắng</option>
            {/* Thêm các tùy chọn color khác ở đây */}
          </select>
          {formData.selectedColor && (
            <div className="text-gray-500">Color đã chọn: {formData.selectedColor}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Giá tiền</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handlePriceChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="images" className="block text-gray-700">Ảnh</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageChange}
            multiple // Cho phép chọn nhiều ảnh
          />
          {formData.images.length > 0 && (
            <div className="text-gray-500">Số ảnh đã chọn: {formData.images.length}</div>
          )}

          {formData.images.map((image, index) => (
            <div key={index} className="mt-4">
              <label htmlFor={`imageType${index}`} className="block text-gray-700">
                Loại ảnh {index + 1}
              </label>
              <select
                id={`imageType${index}`}
                name={`imageType${index}`}
                value={formData.imageTypes[index]}
                onChange={(e) => handleImageTypeChange(e, index)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Chọn loại ảnh</option>
                <option value="1">Loại 1</option>
                <option value="2">Loại 2</option>
                <option value="3">Loại 3</option>
                {/* Thêm các tùy chọn loại ảnh khác ở đây */}
              </select>
            </div>
          ))}
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Create Product Detail</button>
      </form>
    </div>
  );
};

export default CreateProduct;
