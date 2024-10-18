import React, { useEffect, useState } from "react";
import axiosInstance from "../context/axios";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { Modal, Button, Table } from 'react-bootstrap'
import CreateModal from "./parts/CreateModal";
import SideBarMenu from "./parts/SideBarMenu";
import MainContent from "./parts/MainContent";

const Dashboard = () => {
  const [recentPayments, setRecentPayments] = useState([]);
  const [todayTotal, setTodayTotal] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getRecentPayments() {
    try {
      let { data } = await axiosInstance.post('/api/v1/payments/get-payments', {
        page: 1,
        limit: 5
      });
      setRecentPayments(data.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  async function getTotalPaymentByDay(day) {
    try {
      const { data } = await axiosInstance.post('/api/v1/payments/get-total-payment', {
        total_type: day
      })
      return data.total;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  async function createExpense(obj) {
    try {
      const { data } = await axiosInstance.post('/api/v1/payments/create', obj);
      console.log(data);
      toast.success(data.message);
      callRecentAndTotalFuncs();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  function callRecentAndTotalFuncs() {
    getRecentPayments();
    getTotalPaymentByDay('today')
      .then((total) => {
        setTodayTotal(total); // Set the state with the resolved value
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    callRecentAndTotalFuncs();
  }, [])
  return (
    <>
      <div className="h-screen flex">
        {/* Sidebar */}
        <SideBarMenu handleShow={handleShow} />

        {/* Main Content */}
        {(recentPayments.length > 0 && todayTotal) ? (
          <MainContent props={{ todayTotal, recentPayments }} />
        ) : (
          <div className="flex-grow">
            <p>Loading...</p>
          </div>
        )}
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <CreateModal handleClose={handleClose} createExpense={createExpense} />
        </Modal>
      </div >
    </>
  );
};

export default Dashboard;
