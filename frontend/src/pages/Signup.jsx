import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '', // Add an email field
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/signup', formData);
      console.log('Signup successful:', response.data);
      localStorage.setItem('user',response.data);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="bg-blue-600 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="p-2">
                  <label htmlFor="username">Username</label>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="border rounded w-full py-2 px-3"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label htmlFor="email">Email</label>
                </td>
                <td className="p-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded w-full py-2 px-3"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <label htmlFor="password">Password</label>
                </td>
                <td className="p-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border rounded w-full py-2 px-3"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
