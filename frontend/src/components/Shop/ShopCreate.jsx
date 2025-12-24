import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/style";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { server } from "../../server";
import { RxAvatar } from "react-icons/rx";
const ShopCreate = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState();
  const [avatar, setAvatar] = useState();
  const [visible, setVisible] = useState("");
  const [password, setPassword] = useState(false);
  // const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);
    formData.append("address", address);
    formData.append("phoneNumber", phoneNumber);
    formData.append("zipCode", zipCode);
    try {
      const res = await axios.post(
        `${server}/shop/create-shop`,
        formData,
        config
      );
      console.log(res.data);
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setPassword("");
      setAvatar(null);
      setAddress("");
      setPhoneNumber("");
      setZipCode("");
      // navigate("/shop-login");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center sm:px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:mx-w-md sm:w-full ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register as a shop
          </h2>
        </div>
        <div className="mx-auto sm:w-full sm:max-w-[33rem] mt-2">
          <div className="bg-white px-4 py-8 shadow rounded-lg sm:px-10 mt-2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  shop Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    className="appearance-none block w-full px-3 
                    py-2 border border-gray-300 rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="phoneNumber"
                    type="number"
                    name="phoneNumber"
                    value={phoneNumber}
                    className="appearance-none block w-full px-3 
                    py-2 border border-gray-300 rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
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
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1">
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    className="appearance-none block w-full px-3 
                    py-2 border border-gray-300 rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <div className="mt-1">
                  <input
                    id="zipCode"
                    type="number"
                    name="zipCode"
                    value={zipCode}
                    className="appearance-none block w-full px-3 
                    py-2 border border-gray-300 rounded-md shadow-sm 
                    placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                    onChange={(e) => {
                      setZipCode(e.target.value);
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
                      setPassword(e.target.value);
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
              <div>
                <label htmlFor="avatar" className="block"></label>
                <div className="flex items-center">
                  <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                    {avatar ? (
                      <img
                        src={URL.createObjectURL(avatar)}
                        alt="Avatar"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )}
                  </span>
                  <label
                    htmlFor="file-input"
                    className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="avatar"
                      id="file-input"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileInputChange}
                      className="sr-only"
                    />
                  </label>
                </div>
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
                <h4 className="">Already have an account?</h4>
                <Link
                  to="/login-shop"
                  className="text-medium text-blue-600 hover:text-blue-500 pl-2"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCreate;
