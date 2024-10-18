import React, { useState, useEffect } from 'react';
import axiosInstance from '../context/axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import DraggableTable from './DraggableTable';
import Dashboard from './Dashboard';

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/signin');
      return;
    }

    const getUsers = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/get-users');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        if (error?.response?.status === 410) {
          toast.error(error?.response?.data?.message);
          navigate('/signin');
        }
      }
    };

    getUsers();
  }, [token, navigate]);

  if (users.length === 0) {
    return <p>Loading users...</p>;    
  }

  return (
    <div>
    <Dashboard/>
      {/* <DraggableTable users={users} /> */}
    </div>
  );
};

export default Home;
