import { useState } from 'react';
import './Cash.css';

import { toast } from "react-toastify";

export const CashInFlow = () => {
const [cashInflowData, setCashInflowData] = useState({
id: "",
empname: "",
cashDeclaration: "",
phoneNo: "",
cashInflow: "",
uniform: "",
idCard: ""
});

const fetchRegistrationData = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/api/auth/register/${id}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('No registration data found for this ID');
        }
    } catch (error) {
        console.log('Error fetching registration data:', error);
        return null;
    }
};
const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setCashInflowData({
        ...cashInflowData,
        [name]: value
    });

    if (name === "id" && value) {
        try {
            console.log(`Fetching registration data for ID: ${value}`); // Debug log
            const registrationData = await fetchRegistrationData(value);

            console.log('Registration Data:', registrationData); // Debug log

            if (registrationData) {
                // Check and log the field names in registrationData
                console.log('Field Names:', Object.keys(registrationData));

                setCashInflowData((prevData) => ({
                    ...prevData,
                    empname: registrationData.empname || "",
                    phoneNo: registrationData.phoneNo || "" // Check field name here
                }));
            } else {
                setCashInflowData((prevData) => ({
                    ...prevData,
                    empname: "",
                    phoneNo: ""
                }));
            }
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate required fields
  if (!cashInflowData.empname) {
      console.log("Name is required");
      return; // Prevent sending data if required fields are missing
  }

  try {
      console.log('Method: POST');
      console.log('Params:', { id: cashInflowData.id }); // Log params if needed
      console.log('Body:', JSON.stringify(cashInflowData, null, 2)); // Log the actual body data in a readable format
      
      const response = await fetch(`http://localhost:8000/api/auth/cash`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(cashInflowData),
      });

      if (response.ok) {
          toast.success("Successfully submitted!");
          const result = await response.json();
          console.log('Response:', JSON.stringify(result, null, 2)); // Log the response for debugging
      } else {
          const errorData = await response.json();
          console.log("Error:", JSON.stringify(errorData, null, 2)); // Log any errors
          alert("Submission failed. Please try again.");
      }
  } catch (error) {
      console.log("Error:", error);
      alert("An error occurred. Please try again.");
  }
};


return (
<section>
    <main>
    <div className="container cash-inflow-container">
        <div className="cash-inflow-form">
        <h1 className="cash-inflow-main-heading">Cash Inflow Data</h1>
        <form onSubmit={handleSubmit}>
            <table className='cash-inflow-table'>
            <thead>
                <tr>
                <th>ID</th>
                <th>EmpName</th>
                <th>Cash Declaration</th>
                <th>Phone No.</th>
                <th>Cash In Flow</th>
                <th>Uniform</th>
                <th>ID Card</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <input
                    type="text"
                    name="id"
                    placeholder="ID"
                    required
                    value={cashInflowData.id}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="empname"
                    placeholder="EmpName"
                    required
                    value={cashInflowData.empname}
                    onChange={handleInputChange}
                    disabled
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="cashDeclaration"
                    placeholder="Cash Declaration"
                    required
                    value={cashInflowData.cashDeclaration}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="phoneNo"
                    placeholder="Phone No."
                    required
                    value={cashInflowData.phoneNo}
                    onChange={handleInputChange}
                    disabled
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="cashInflow"
                    placeholder="Cash In Flow"
                    required
                    value={cashInflowData.cashInflow}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <select
                    name="uniform"
                    required
                    value={cashInflowData.uniform}
                    onChange={handleInputChange}
                    >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </td>
                <td>
                    <select
                    name="idCard"
                    required
                    value={cashInflowData.idCard}
                    onChange={handleInputChange}
                    >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </td>
                </tr>
            </tbody>
            </table>
            <button type="submit" className="cash-inflow-button btn btn-submit">Submit</button>
        </form>
        </div>
    </div>
    </main>
</section>
);
};