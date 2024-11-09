import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import axiosInstance from '../../context/axios';
import { toast } from 'react-toastify';

const MainContent = ({ props }) => {
    console.log(props);

    const recentPayments = props.recentPayments;
    const todayTotal = props.todayTotal;
    const monthTotal = props.monthTotal;

    async function getPaymentDetails(paymentId) {
        try {
            const { data } = await axiosInstance.get(`/api/v1/payments/get-payment-details/${paymentId}`);
            console.log(data)
        }
        catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="flex-1 bg-gray-100 p-8">
            <h2 className="text-3xl font-semibold mb-8">Dashboard</h2>

            {/* Expense Summary */}
            <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Today's Expenses</h3>
                    <p className="mt-4 text-2xl font-bold">{todayTotal} INR</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">This Month</h3>
                    <p className="mt-4 text-2xl font-bold">{monthTotal} INR</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Balance</h3>
                    <p className="mt-4 text-2xl font-bold">{23000 - monthTotal}</p>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Date</th>
                            <th className="py-2">Remarks</th>
                            <th className="py-2">Amount</th>
                            <th className="py-2">To</th>
                            <th className="py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentPayments && recentPayments.map((payment) => (
                            <tr key={payment.id}>
                                <td className="border px-4 py-2">{payment.payment_date}</td>
                                <td className="border px-4 py-2">{payment.remarks}</td>
                                <td className="border px-4 py-2">
                                    {payment.amount}
                                    <span className="ml-1 text-xs">{payment.currency}</span>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="ml-2"
                                        onClick={() => getPaymentDetails(payment.id)}
                                    >
                                        Details
                                    </Button>
                                </td>
                                <td className="border px-4 py-2">{payment.payment_to}</td>
                                <td className="border px-4 py-2">{payment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainContent