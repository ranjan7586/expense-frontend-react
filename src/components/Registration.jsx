import React from 'react'
import axios from 'axios'
import AlertComp from './AlertComp';
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const [fname, setFname] = React.useState('')
    const [lname, setLname] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [cpassword, setCpassword] = React.useState('')
    const [show, setShow] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const [data, setData] = React.useState('')
    const navigate = useNavigate();
    const handleSubmit = async () => {
        if (email === '' || password === '') {
            setShow(true);
            setMessage('Email and password are required.');
            return;
        }

        if (password !== cpassword) {
            setShow(true);
            setMessage('Passwords do not match.');
            return;
        }
        let name = fname + ' ' + lname;

        try {
            const response = await axios.post('/api/v1/create-user', {
                name,
                email,
                password
            });

            if (response.status === 201) {
                setData(response.data.data);
                console.log(response.data);
                navigate('/signin')
            } else {
                setShow(true);
                setMessage('Registration failed.');
            }
        } catch (error) {
            console.error(error);
            setShow(true);
            setMessage('An error occurred during registration.');
        }
    };

    return (
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            {show && <AlertComp prop={{ show, message, setShow }} />}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create a New Account
                </h2>
            </div>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form className=''>
                    <div>
                        <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                            Enter Your First Name
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setFname(e.target.value)}
                                id="fname"
                                name="fname"
                                type="text"
                                required
                                autoComplete="FIrst Name"
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">
                            Enter Your Last Name
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setLname(e.target.value)}
                                id="lname"
                                name="lname"
                                type="text"
                                required
                                autoComplete="Last Name"
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Enter Your Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Enter Your Password
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="off"
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirm Your Password
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => setCpassword(e.target.value)}
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                required
                                autoComplete="off"
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </form>
                <div className='text-center pt-5'>
                    <button onClick={handleSubmit} className='w-full bg-black text-gray-100 p-2 rounded-lg border-gray-200 hover:bg-slate-100 hover:text-black hover:border-black hover:border'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Registration