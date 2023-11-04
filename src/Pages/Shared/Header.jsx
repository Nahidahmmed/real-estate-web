import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarContent } from "@nextui-org/react";


export default function Header() {
  const { user, logOut } = useContext(AuthContext);

  const userPhotoURL = user && user.photoURL ? user.photoURL : 'path/to/default-photo.jpg';
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err));
  }
  const list = (
    <>
      <li>
        {" "}
        <Link className="hover:bg-transparent hover:text-[#35A29F]" to="/">Home</Link>{" "}
      </li>
     
      <li>
        {" "}
        <Link className="hover:bg-transparent hover:text-[#35A29F]" to="/about">About Us</Link>{" "}
      </li>
    </>
  );
  return (
    <div className="navbar lg:fixed lg:z-10  text-white bg-black bg-opacity-40">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {list}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          REALES</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-light text-base px-1">
          {list}
        </ul>
      </div>
      <div className="ml-auto lg:mr-10">
      <Navbar className="w-[1px] h-[0px] pr-20">
        {
          user ?

            <NavbarContent className="lg:ml-10" as="div" justify="end">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    size="md"
                    src={user?.photoURL}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">{user.displayName}</p>
                    <p className="font-semibold">{user.email}</p>
                  </DropdownItem>

                  <DropdownItem onClick={handleLogOut} key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent> :
            <Link to="/login"><button className="p-2 rounded-md  bg-[#35A29F] w-24 mr-16 border-none text-white font-light">Sign In</button></Link>
        }
      </Navbar>
        
      </div>
      
    </div>
  );
}
