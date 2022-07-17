import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/");


        } catch (error) {
            setError(error.message);

        }

    };
    return (
        <div className="backdrop-blur">
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>Create new account</h1>
                <h2 className="text-center">{error}</h2>

                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
                            id='email'
                            placeholder='Your Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
                            id='password'
                            placeholder='Your Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        Already have an account? <Link to={'/login'} className='text-blue-600 hover:underline'> Login</Link>.
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button className='bg-blue-600 py-2 px-4 w-full text-sm text-white font-semibold rounded-md border focus:outline-none focus:border-blue-900 hover:bg-blue-800 hover:border-blue-300'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


//k

export default SignUp;
