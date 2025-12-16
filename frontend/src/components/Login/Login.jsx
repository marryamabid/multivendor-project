import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/style";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState("");
  const [password, setPaaword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      toast.success("Login Successfull!");
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center sm:px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:mx-w-md sm:w-full ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
        </div>
        <div className="mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow rounded-lg sm:px-10 mt-2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="appearance-none block w-full px-3 
                    py-2 border border-gray-300 rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    className="appearance-none block w-full px-3 
                    py-2 border border-gray-300 rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                    onChange={(e) => {
                      setPaaword(e.target.value);
                    }}
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>
              <div className={`${styles.noramlFlex} justify-between`}>
                <div className={`${styles.noramlFlex}`}>
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-blue-600 
                    focus:ring-ring-500 border-gray-600  rounded "
                  />
                  <label htmlFor="remember" className="block ml-2 text-sm">
                    Remember me
                  </label>
                </div>
                <Link
                  to=".forgot-password"
                  className="text-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
              <div className={`${styles.noramlFlex} w-full`}>
                <h4 className="">Don't have an account? </h4>
                <Link
                  to="/sign-up"
                  className="text-medium text-blue-600 hover:text-blue-500 pl-2"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
