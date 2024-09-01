import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <header className="navbar-header">
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">
                        <img 
                            src="/images/rrb-north-central-railway-logo.png" 
                            alt="Indian Railways North Central Railway logo" 
                            className="logo-image"
                        />
                    </NavLink>
                    <p>NCR Contractual Staff Management System</p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        {isLoggedIn ? (
                            <li>
                                <NavLink to="/logout">Logout</NavLink>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};