import { useState } from 'react';
import './Salary.css'
// import './TableStyles.css'; // Assuming you have CSS for styling

export const Salary = () => {
const [tableData, setTableData] = useState({
uan: "",
ecr: "",
uanRepository: "",
gross: "",
epf: "",
eps: "",
edli: "",
ee: "",
epsContribution: "",
er: "",
ncpDays: "",
refunds: ""
});

const handleInputChange = (event) => {
const { name, value } = event.target;
setTableData({
    ...tableData,
    [name]: value
});
};

const handleSubmit = async (e) => {
e.preventDefault();
console.log(tableData);

// try {
//     const response = await fetch('http://localhost:3000/api/employee', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(tableData),
//     });
//     if (response.ok) {
//     alert('Successfully submitted!');
//     const result = await response.json();
//     console.log(result);
//     } else {
//     const errorData = await response.json();
//     console.log('Error:', errorData);
//     alert('Submission failed. Please try again.');
//     }
// } catch (error) {
//     console.log('Error:', error);
//     alert('An error occurred. Please try again.');
// }
};

return (
<section>
    <main>
    <div className="container">
        <div className="table-form">
        <h1 className="main-heading">Employee Contributions</h1>
        <form onSubmit={handleSubmit}>
            <table>
            <thead>
                <tr>
                <th colSpan="3">Name as per</th>
                <th colSpan="4">Wages</th>
                <th colSpan="5">Contribution Remitted</th>
                </tr>
                <tr>
                <th>UAN</th>
                <th>ECR</th>
                <th>UAN Repository</th>
                <th>Gross</th>
                <th>EPF</th>
                <th>EPS</th>
                <th>EDLI</th>
                <th>EE</th>
                <th>EPS</th>
                <th>ER</th>
                <th>NCP Days</th>
                <th>Refunds</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <input
                    type="text"
                    name="uan"
                    placeholder="UAN"
                    required
                    value={tableData.uan}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="ecr"
                    placeholder="ECR"
                    required
                    value={tableData.ecr}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="uanRepository"
                    placeholder="UAN Repository"
                    required
                    value={tableData.uanRepository}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="gross"
                    placeholder="Gross"
                    required
                    value={tableData.gross}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="epf"
                    placeholder="EPF"
                    required
                    value={tableData.epf}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="eps"
                    placeholder="EPS"
                    required
                    value={tableData.eps}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="edli"
                    placeholder="EDLI"
                    required
                    value={tableData.edli}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="ee"
                    placeholder="EE"
                    required
                    value={tableData.ee}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="epsContribution"
                    placeholder="EPS Contribution"
                    required
                    value={tableData.epsContribution}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="er"
                    placeholder="ER"
                    required
                    value={tableData.er}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="ncpDays"
                    placeholder="NCP Days"
                    required
                    value={tableData.ncpDays}
                    onChange={handleInputChange}
                    />
                </td>
                <td>
                    <input
                    type="text"
                    name="refunds"
                    placeholder="Refunds"
                    required
                    value={tableData.refunds}
                    onChange={handleInputChange}
                    />
                </td>
                </tr>
            </tbody>
            </table>
            <button type="submit" className="btn btn-submit">
            Submit
            </button>
        </form>
        </div>
    </div>
    </main>
</section>
);
};