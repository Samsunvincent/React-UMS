import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {  useNavigate } from "react-router-dom";


export default function AddUser() {
  const navigate = useNavigate();
  const [addData, setAddData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    userType: 'Employee', // default value
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
  
    if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAddData((prevData) => ({
            ...prevData,
            [name]: reader.result, // Set the base64 string as the image value
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setAddData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let params = new URLSearchParams(window.location.search);
      let token_key = params.get('login');
      let token = localStorage.getItem(token_key);

      const formData = new FormData();
      for (let key in addData) {
        formData.append(key, addData[key]);
      }

      const response = await axios.post('http://localhost:3000/signin', addData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('User added successfully:', response.data);
      alert("user create successfully")
      navigate('/adminComponent')
      // Add additional logic for success, like redirecting or showing a message


    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="bg-dark">
      <div className="main-box">
        <div className="slider-cont">
          <div>
            <div style={{ padding: "90px 200px 0px 0px" }}>
              <img src="./images/login_cover.webp" style={{ width: 555 }} alt="Login Cover" />
            </div>
          </div>
        </div>
        <div className="form-cont">
          <div className="form form-signup">
            <form onSubmit={handleFormSubmit}>
              <label>FULL NAME</label>
              <input
                type="text"
                placeholder="Your full name"
                id="name"
                name="name"
                value={addData.name}
                onChange={handleInputChange}
              />

              <label>E-MAIL</label>
              <input
                type="email"
                placeholder="Your e-mail"
                id="email"
                name="email"
                value={addData.email}
                onChange={handleInputChange}
                required
              />

              <label>Phone No</label>
              <input
                type="text"
                placeholder="Phone"
                id="phone"
                name="phone"
                value={addData.phone}
                onChange={handleInputChange}
              />

              <label>Image</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleInputChange}
              />

              <label>Age</label>
              <input
                type="number"
                placeholder="Age"
                id="age"
                name="age"
                value={addData.age}
                onChange={handleInputChange}
              />
{/* 
              <label htmlFor="usertype" className="text-white">
                User Type:
              </label>
              <select
                id="usertype"
                name="usertype"
                className="pt-3"
                value={addData.usertype}
                onChange={handleInputChange}
                required
              >
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </select> */}

              <div>
                <input type="submit" className="form-btna" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
