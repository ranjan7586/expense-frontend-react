import React from 'react'
import { useAuth } from '../context/contextProvider'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../context/axios'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'
import axios from 'axios'
const Login = () => {
    const dispatch = useDispatch();
    // const { auth, login } = useAuth()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate();
    async function handleLogin(e) {
        e.preventDefault();
        if (!email || !password) {
            return toast.error("Please provide all required fields")
        }
        console.log(axiosInstance);

        try {
            const { data } = await axiosInstance.post('/api/v1/login', {
                email,
                password
            })
            if (data?.token) {
                // login(data.token);
                dispatch(login({ token: data.token }));
                toast.success("Login Successful");
                navigate('/');
                return;
            }
        } catch (error) {
            console.log(error)
            if (error?.response?.data) {
                toast.error(error?.response?.data?.message);
            }
        }
    }
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
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
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleLogin}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login