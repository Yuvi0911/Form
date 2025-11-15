import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Contact: "",
    Email: "",
    Gender: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append("Name", formData.Name);
    data.append("Contact", formData.Contact);
    data.append("Email", formData.Email);
    data.append("Gender", formData.Gender);

    if (image) {
      data.append("image", image);
    }

    try {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        body: data, 
      });

      const result = await res.json();
      console.log(result);
      alert("User Created Successfully!");

    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input type="text" name="Name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="Contact" placeholder="Contact" onChange={handleChange} required />
      <input type="email" name="Email" placeholder="Email" onChange={handleChange} required />
      
      <select name="Gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input type="file" name="image" accept="image/*" onChange={handleImageChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
