
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import login_image from '../../assets/login-image.png'


export default function Login() {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login successful. ',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })

    }
    return (

        <div>

            <div className="flex h-screen">
                {/* Image Section */}
                <div className="w-[500px] items-center my-auto ml-auto h-[600px]">
                    <img
                        src={login_image}
                        alt="Login Image"
                        className="object-cover h-full w-full"
                    />
                </div>

                {/* Login Form Section */}
                <div className="w-1/2 flex  items-center justify-center ">
                    <div className="p-8 w-[400px] h-[400px] bg-white rounded-lg shadow-lg border-2 border-sky-100">
                        <h2 className="text-3xl text-center font-semibold text-[#35A29F] mb-6">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-6">

                                <input
                                    type="email"
                                    id="username"
                                    name="email"
                                    className="bg-gray-100 border-2 border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-sky-500 transition duration-300 hover:border-sky-400"
                                    placeholder="Your username"
                                    required
                                />
                            </div>
                            <div className="mb-6">

                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="bg-gray-100 border-2 border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-sky-500 transition duration-300 hover:border-sky-400"
                                    placeholder="Your password"
                                    required
                                />
                            </div>

                            <input type="submit" value="login" className="bg-[#35A29F] hover:bg-[#3aa09c] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:bg-[#3aa09c] mb-4 w-full" />
                        </form>

                        <button onClick={handleGoogleSignIn} className="block font-bold text-5xl bg-[#35A29F] text-white my-2 mx-auto w-[55px] rounded-full text-center pb-1 pr-1">G</button>
                        <span className="text-[#35A29F] font-semibold">Already have a account? <Link to={"/register"} className="ml-2 underline">Register here</Link> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
