import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc"
import { IconContext } from "react-icons";


function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const navigate = useNavigate();

    const { logIn, googleSignIn } = useUserAuth();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        setErrors("");


        try {
            await logIn(email, password);
            navigate('/');

        } catch (err) {
            setErrors(err.message);


        }
    };

    const handleGoogleSignIn = async (event) => {
        event.preventDefault();
        try {
            await googleSignIn();
            navigate('/');

        } catch (error) {
            setErrors(error.message);
        }
    }

    return (
        <div>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>Log in to your account</h1>
                <h2 className="text-md mb-2 text-center text-red-500">{errors}</h2>

                <form>
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
                        New user? <Link to={'/signup'} className='text-blue-600 hover:underline'> Sign Up.</Link>
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button className='bg-green-600 py-2 px-4 rounded-md text-sm hover:text-md text-white w-full font-semibold border focus:border-green-900 focus:outline-none hover:bg-green-500 hover:border-green-300' onClick={handleLoginSubmit}>Login</button>
                    </div>
                </form>
                <div className='mt-4'>
                    <h5 className="text-center">-------------------- Or --------------------</h5>
                    <button className="bg-blue-600 py-2 px-4 rounded-md text-sm hover:text-md mt-2 w-full flex mx-auto text-center font-semibold justify-center text-white hover:bg-blue-500"
                        onClick={handleGoogleSignIn}><IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: 25 }}><FcGoogle /></IconContext.Provider>Login with Google</button>
                </div>
            </div>
        </div>
    );
};

//t
export default LoginPage;
