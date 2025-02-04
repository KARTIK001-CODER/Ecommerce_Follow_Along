import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";

const CreateProduct = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [email, setEmail] = useState("");
  const [previewImages, setPreviewImages] = useState([]);

  const categoriesData = [
    { title: "Electronics" },
    { title: "Fashion" },
    { title: "Books" },
    { title: "Home Appliances" },
  ];

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages((prevImages) => prevImages.concat(files));

    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages((prevPreviews) => prevPreviews.concat(imagePreviews));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("tags", tags.trim()); // Ensure tags are a comma-separated string
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("email", email);

    // Ensure images are appended correctly
    images.forEach((image, index) => {
        console.log(`Appending image ${index + 1}:, image.name`);
        formData.append("images", image);
    });

    // Debugging FormData content
    console.log("FormData before sending:");
    formData.forEach((value, key) => {
        console.log(key, value);
    });

    try {
        const response = await axios.post(
            "http://localhost:8000/api/v2/product/create-product",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        if (response.status === 201) {
            alert("Product created successfully!");
            setImages([]);
            setPreviewImages([]);
            setName("");
            setDescription("");
            setCategory("");
            setTags("");
            setPrice("");
            setStock("");
            setEmail("");
        }
    } catch (err) {
        console.error("Error creating product:", err.response?.data || err.message);
        alert(err.message);
    }
};

  return (
    <div className="w-[90%] max-w-[500px] bg-white shadow h-auto rounded-[4px] p-4 mx-auto">
      <h5 className="text-[24px] font-semibold text-center">Create Product</h5>
      <form onSubmit={handleSubmit}>
  
        <div className="mt-4">
          <label className="pb-1 block">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            className="w-full p-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
  
        <div>
          <label className="pb-1 block">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            className="w-full p-2 border rounded"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            required
          />
        </div>
  
        <div className="mt-4">
          <label className="pb-1 block">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={description}
            className="w-full p-2 border rounded"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
            rows="4"
            required
          />
        </div>
  
        <div className="mt-4">
          <label className="pb-1 block">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Choose a category</option>
            {categoriesData.map((i) => (
              <option value={i.title} key={i.title}>
                {i.title}
              </option>
            ))}
          </select>
        </div>
  
        <div className="mt-4">
          <label className="pb-1 block">Tags</label>
          <input
            type="text"
            value={tags}
            className="w-full p-2 border rounded"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter product tags"
          />
        </div>
  
        <div className="mt-4">
          <label className="pb-1 block">
            Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value={price}
            className="w-full p-2 border rounded"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            required
          />
        </div>
  
        <div className="mt-4">
          <label className="pb-1 block">Image</label>
          <input
            type="file"
            className="w-full p-2 border rounded"
            onChange={handleImageChange}
          />
          {previewImages.length > 0 &&
            previewImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Preview"
                className="w-[100px] h-[100px] object-cover mt-2"
              />
            ))}
        </div>
  
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Create
        </button>
        
      </form>
    </div>
  );
};

export default CreateProduct;