import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const SideBarMenu = (prop) => {
    return (
        <div className="w-64 bg-gray-800 text-white p-6">
            <h1 className="text-2xl font-bold mb-6">Expense Tracker</h1>
            <nav>
                <ul>
                    <li className="mb-4">
                        <a href="/" className="block p-2 rounded hover:bg-gray-700">Dashboard</a>
                    </li>
                    <li className="mb-4">
                        <Button className="" onClick={prop.handleShow}>Add Expense</Button>
                    </li>
                    <li className="mb-4">
                        <a href="/reports" className="block p-2 rounded hover:bg-gray-700">Reports</a>
                    </li>
                    <li className="mb-4">
                        <NavLink to="/logout" className="block p-2 rounded hover:bg-gray-700">Logout</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBarMenu