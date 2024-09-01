import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegForm.css';

export const RegForm = () => {
    useEffect(() => {
        document.body.classList.add('registration-form-body');
        return () => {
            document.body.classList.remove('registration-form-body');
        };
    }, []);

    const navigate = useNavigate(); // Initialize the navigate function

    const [formData, setFormData] = useState({
        empname: '',
        fathersname: '',
        dob: '',
        gender: '',
        address: '',
        aadhar: '',
        phoneNo: '',
        pan: '',
        acc: '',
        ifsc: '',
        post: '',
        qual: '',
        pver: 'No',
        pverdate: '',
        pvertime: '',
        pverval: '',
        uanno: '',
        esicno: '',
        skill: ''
    });

    const [employeeId, setEmployeeId] = useState(null); // State to hold the generated EmployeeId

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        try {
            const response = await fetch('http://localhost:8000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error response from server:", errorData);
                // Display the error message to the user
                alert(`Error: ${errorData.message || 'Internal Server Error'}`);
            } else {
                const data = await response.json();
                console.log("Success response from server:", data);
                setEmployeeId(data.employeeId);

                // Redirect to AdminUsers page after successful registration
                navigate('/admin/users');
            }

        } catch (error) {
            console.error("Error during fetch:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <label htmlFor="empname">Employee Name:</label>
                    <input type="text" id="empname" name="empname" value={formData.empname} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="fathersname">Fathers Name:</label>
                    <input type="text" id="fathersname" name="fathersname" value={formData.fathersname} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="aadhar">Aadhar Number:</label>
                    <input type="text" id="aadhar" name="aadhar" value={formData.aadhar} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="pan">PAN Number:</label>
                    <input type="text" id="pan" name="pan" value={formData.pan} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="acc">Account Number:</label>
                    <input type="text" id="acc" name="acc" value={formData.acc} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="ifsc">IFSC Code:</label>
                    <input type="text" id="ifsc" name="ifsc" value={formData.ifsc} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="post">Post:</label>
                    <select id="post" name="post" value={formData.post} onChange={handleChange} required>
                        <option value="">Select Post</option>
                        <option value="Janitor">Janitor</option>
                        <option value="EHK">EHK</option>
                        <option value="Manager">Manager</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="qual">Qualification:</label>
                    <select id="qual" name="qual" value={formData.qual} onChange={handleChange} required>
                        <option value="">Select Qualification</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="Matrix pass">Matrix pass</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pver">Police Verification:</label>
                    <select id="pver" name="pver" value={formData.pver} onChange={handleChange} required>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                {formData.pver === 'Yes' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="pverdate">Police Verification Date:</label>
                            <input type="date" id="pverdate" name="pverdate" value={formData.pverdate} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pvertime">Police Verification Time:</label>
                            <input type="time" id="pvertime" name="pvertime" value={formData.pvertime} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pverval">Police Verification Validity:</label>
                            <input type="text" id="pverval" name="pverval" value={formData.pverval} onChange={handleChange} />
                        </div>
                    </>
                )}
                <div className="form-group">
                    <label htmlFor="uanno">UAN Number:</label>
                    <input type="text" id="uanno" name="uanno" value={formData.uanno} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="esicno">ESIC Number:</label>
                    <input type="text" id="esicno" name="esicno" value={formData.esicno} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="skill">Skill Level:</label>
                    <select id="skill" name="skill" value={formData.skill} onChange={handleChange} required>
                        <option value="">Select Skill Level</option>
                        <option value="Highly Skilled">Highly Skilled</option>
                        <option value="Semi-skilled">Semi-skilled</option>
                        <option value="Less Skilled">Less Skilled</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>

            {employeeId && (
                <div>
                    <p>Registration successful! Your Employee ID is: {employeeId}</p>
                </div>
            )}
        </div>
    );
};
