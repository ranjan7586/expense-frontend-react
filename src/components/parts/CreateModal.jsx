import React, { useState } from 'react'
import { Modal, Button, Table } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import axiosInstance from '../../context/axios';
import { toast } from 'react-toastify';
const CreateModal = (prop) => {
    const [amount, setAmount] = useState(0);
    const [transactionId, setTransactionId] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [paymentTo, setPaymentTo] = useState("");
    const [paymentFrom, setPaymentFrom] = useState("");
    const [paymentFor, setPaymentFor] = useState("");
    const [expenseType, setExpenseType] = useState("");
    const [remarks, setRemarks] = useState("");
    const [paymentDate, setPaymentDate] = useState("");
    const [status, setStatus] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        prop.createExpense({
            amount,
            transaction_id: transactionId,
            payment_type: paymentType,
            payment_method: paymentMethod,
            payment_to: paymentTo,
            payment_from: paymentFrom,
            payment_for: paymentFor,
            expense_type: expenseType,
            remarks,
            status,
            payment_date: paymentDate
        })
    }
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Transaction ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Transaction ID"
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Payment Type</Form.Label>
                        <Form.Check
                            type="radio"
                            id="online"
                            name="paymentType"
                            value="online"
                            onChange={(e) => setPaymentType(e.target.value)}
                            label="Online"
                        />
                        <Form.Check
                            type="radio"
                            id="offline"
                            value="offline"
                            onChange={(e) => setPaymentType(e.target.value)}
                            name="paymentType"
                            label="Offline"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="paymentMethod">
                        <Form.Label>Payment Method</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ex - Phonepe, Paytm"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="paymentTo">
                        <Form.Label>Payment To</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Payment To"
                            value={paymentTo}
                            onChange={(e) => setPaymentTo(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="paymentTo">
                        <Form.Label>Payment From</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Payment From"
                            value={paymentFrom}
                            onChange={(e) => setPaymentFrom(e.target.value)}
                            
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="paymentFor">
                        <Form.Label>Payment For</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={paymentFor}
                            onChange={(e) => setPaymentFor(e.target.value)}>
                            <option>-- Select --</option>
                            <option value="food">Food</option>
                            <option value="shopping">Shopping</option>
                            <option value="recharge">Recharge</option>
                            <option value="game">Game</option>
                            <option value="other">Other</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="expenseType">
                        <Form.Label>Expense Type</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={expenseType}
                            onChange={(e) => setExpenseType(e.target.value)}
                        >
                            <option>-- Select --</option>
                            <option value="personal">For Personal</option>
                            <option value="others">For Others</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="status">
                        <Form.Label>Payment Status</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option>-- Select --</option>
                            <option value="success">Successful</option>
                            <option value="pending">Pending</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="paymentDate">
                        <Form.Label>Payment Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={paymentDate}
                            onChange={(e) => setPaymentDate(e.target.value)}
                        // placeholder="Amount"
                        // autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="remarks"
                    >
                        <Form.Label>Remarks</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
                            placeholder="Remarks"
                            rows={2}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={prop.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save
                </Button>
            </Modal.Footer>
        </div>
    )
}

export default CreateModal