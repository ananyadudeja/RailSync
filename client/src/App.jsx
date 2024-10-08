import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Error} from "./pages/Error";
import {Logout} from "./pages/Logout";
import { Navbar } from "./components/Navbar";
import { Salary } from "./pages/Salary";
import { TrainEmpForm } from "./pages/TrainEmpForm";
import { Feedback } from "./pages/Feedback";
import { RegForm } from "./pages/RegForm";
import { StaffDetailsForm } from "./pages/StaffDetailsForm";
import { CashInFlow } from "./pages/CashInFlow";
import { LoginPage } from "./pages/LoginPage";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/logout" element={<Logout/>}/>
        <Route path = "/*" element={<Error/>}/>        
        <Route path = "/salary" element={<Salary/>}/>
        <Route path = "/train" element={<TrainEmpForm/>}/>
        <Route path = "/feedback" element={<Feedback/>}/>
        <Route path = "/regform" element={<RegForm/>}/>
        <Route path = "/viewstaffdetails" element={<StaffDetailsForm/>}/>
        <Route path = "/cash" element={<CashInFlow/>}/>
        <Route path = "/loginpage" element={<LoginPage/>}/>
        
        <Route path = "/admin" element={<AdminLayout/>}>
        <Route path = "users" element={<AdminUsers/>} />
        <Route path = "contacts" element={<AdminContacts/>} /> 
        
        </Route>

      </Routes>
    </Router>
  );
};

export default App;