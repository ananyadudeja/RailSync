import { NavLink, Outlet } from "react-router-dom";
import { ImUsers } from "react-icons/im";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";
import { MdOutlineMiscellaneousServices } from "react-icons/md";



export const AdminLayout =() => {
    return <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin/users" >
                            <ImUsers />Employee Data</NavLink>

                        </li>
                        <li>
                            <NavLink to="/contacts">
                            <RiContactsBook3Line />Contact</NavLink>

                        </li>
                        <li>
                            <NavLink to="/service">
                            <MdOutlineMiscellaneousServices />Services</NavLink>

                        </li>
                        <li>
                            <NavLink to="/regform">
                            <IoIosHome />RegForm</NavLink>

                        </li>
                        <li>
                            <NavLink to="/">
                            <IoIosHome />Home</NavLink>

                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>
        </>
};