import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import styles from "../../styles/style";
import { useEffect, useState } from "react";
import { MdOutlineTrackChanges } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  console.log(user);
  useEffect(() => {
    if (user?.name) {
      setName(user.name);
    }
    if (user?.email) {
      setEmail(user.email);
    }
    if (user?.phone) {
      setPhone(user.phone);
    }
    if (user?.zipCode) {
      setZipCode(user.zipCode);
    }
    if (user?.address1) {
      setAddress1(user.address1);
    }
    if (user?.address2) {
      setAddress2(user.address2);
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className="w-full">
      {active === 1 ? (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                alt="profile"
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit}>
              <div className="w-full md:flex block pb-3">
                <div className="w-[100%] md:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="w-[100%] md:w-[50%]">
                  <label className="block pb-2">E-mail</label>
                  <input
                    type="email"
                    className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:flex block pb-3">
                <div className="w-[100%] md:w-[50%]">
                  <label className="block pb-2">Phone</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="w-[100%] md:w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full md:flex block pb-3">
                <div className="w-[100%] md:w-[50%]">
                  <label className="block pb-2">Address 1</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>

                <div className="w-[100%] md:w-[50%]">
                  <label className="block pb-2">Address 2</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 md:mb-0`}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[200px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-lg mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      ) : null}
      {active === 2 ? (
        <>
          <AllOrders />
        </>
      ) : null}
      {active === 3 ? (
        <>
          <AllRefundOrders />
        </>
      ) : null}
      {active === 5 ? (
        <>
          <AllTrackOrders />
        </>
      ) : null}
      {active === 6 ? (
        <>
          <PaymentMethods />
        </>
      ) : null}
      {active === 7 ? (
        <>
          <AddressMethod />
        </>
      ) : null}
    </div>
  );
};
const AllOrders = () => {
  const orders = [
    {
      _id: "746vbn23k4n5j6h7g8f9e0d",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 1200,
      orderStatus: "processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) =>
        params.value === "Delivered" ? "greenColor" : "redColor",
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$" + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};
const AllRefundOrders = () => {
  const orders = [
    {
      _id: "746vbn23k4n5j6h7g8f9e0d",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 1200,
      orderStatus: "processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) =>
        params.value === "Delivered" ? "greenColor" : "redColor",
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$" + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};
const AllTrackOrders = () => {
  const orders = [
    {
      _id: "746vbn23k4n5j6h7g8f9e0d",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 1200,
      orderStatus: "processing",
    },
  ];
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) =>
        params.value === "Delivered" ? "greenColor" : "redColor",
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <MdOutlineTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];
  const row = [];
  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$" + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};
const PaymentMethods = () => {
  return (
    <div className="w-full px-5">
      <div className="w-full flex justify-between items-center ">
        <h1 className="font-semibold pb-2 text-2xl text-gray-800">
          Payment Methods
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-white">Add New</span>
        </div>
      </div>
      <br />
      <div className="bg-white w-full h-[70px] flex items-center justify-between shadow px-3 pr-10">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            alt=""
            height="30px"
            width="30px"
          />
        </div>
        <h5 className="font-semibold pl-5">Sharjeel Memon</h5>
        <div className="pl-8 flex items-center">
          <h6 className="font-normal">123 **** *** ****</h6>
          <div className="font-normal pl-6">08/2024</div>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
const AddressMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="w-full flex justify-between items-center ">
        <h1 className="font-semibold pb-2 text-2xl text-gray-800">
          My Addresses
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-white">Add New</span>
        </div>
      </div>
      <br />
      <div className="bg-white w-full h-[70px] flex items-center justify-between shadow px-3 pr-10">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            alt=""
            height="30px"
            width="30px"
          />
        </div>
        <h5 className="font-semibold pl-5">Default</h5>
        <div className="pl-8 flex items-center">
          <h6 className="font-normal">
            494 Ed Street Block A, Edin road, London
          </h6>
        </div>
        <div className="pl-8 flex items-center">
          <h6 className="font-normal">(+92) 1234567890</h6>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default ProfileContent;
