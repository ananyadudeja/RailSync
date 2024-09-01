import { useState } from 'react';
import './TrainEmpForm.css';

export const TrainEmpForm = () => {
    const [formData, setFormData] = useState({
        supervisorName: '',
        trainNo: '',
        date: '',
        timeStarted: '',
        timeEnded: '',
        numCoachesRake: '',
        numCoachesAttended: '',
        department: '',
        numCoachesAllotted: '',
        trainCardObhsDivision: '',
        trainCardObhsRailway: ''
    });

    const [tableData, setTableData] = useState(Array(2).fill({ name: '', designation: '', travellingAuthority: '', uniform: '', presenceOfStaff: '' }));
    const [footerData, setFooterData] = useState(Array(2).fill({ brush: '', mop: '', toiletBrush: '', bucket: '', mask: '', shoes: '', other: '' }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleTableChange = (index, e) => {
        const { name, value } = e.target;
        const newTableData = [...tableData];
        newTableData[index] = { ...newTableData[index], [name]: value };
        setTableData(newTableData);
    };

    const handleFooterChange = (index, e) => {
        const { name, value } = e.target;
        const newFooterData = [...footerData];
        newFooterData[index] = { ...newFooterData[index], [name]: value };
        setFooterData(newFooterData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate and handle form submission
        if (Object.values(formData).some(field => !field) || tableData.some(row => Object.values(row).some(value => !value)) || footerData.some(row => Object.values(row).some(value => !value))) {
            alert('Please fill in all fields.');
            return;
        }
            //alert('Form submitted successfully!');
            //console.log({ formData, tableData, footerData });
            try {
                const response = await fetch('http://localhost:8000/api/auth/trainemp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ...formData, tableData, footerData })
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    alert('Error: ' + errorData.message);
                } else {
                    const result = await response.json();
                    alert(result.message);
                    console.log({ formData, tableData, footerData });
                }
            } catch (error) {
                alert('Error: Failed to submit form');
                console.error('Error:', error);
            
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="header">
                <div className="header-left">
                    <label>Name of Supervisor:</label>
                    <input type="text" name="supervisorName" value={formData.supervisorName} onChange={handleChange} />
                    <label>Train No.:</label>
                    <input type="text" name="trainNo" value={formData.trainNo} onChange={handleChange} />
                    <label>Date:</label>
                    <input type="text" name="date" value={formData.date} onChange={handleChange} />
                    <label>Time Work Started:</label>
                    <input type="text" name="timeStarted" value={formData.timeStarted} onChange={handleChange} />
                </div>
                <div className="header-middle">
                    <label>Time Work Ended:</label>
                    <input type="text" name="timeEnded" value={formData.timeEnded} onChange={handleChange} />
                    <label>No. of coaches in the Rake:</label>
                    <input type="text" name="numCoachesRake" value={formData.numCoachesRake} onChange={handleChange} />
                    <label>No. of coaches attended:</label>
                    <input type="text" name="numCoachesAttended" value={formData.numCoachesAttended} onChange={handleChange} />
                    <label>Dept:</label>
                    <input type="text" name="department" value={formData.department} onChange={handleChange} />
                </div>
                <div className="header-right">
                    <label>No. of coaches to be alloted:</label>
                    <input type="text" name="numCoachesAllotted" value={formData.numCoachesAllotted} onChange={handleChange} />
                    <label>Train Card for OBHS Division FROM:</label>
                    <input type="text" name="trainCardObhsDivision" value={formData.trainCardObhsDivision} onChange={handleChange} />
                    <label>Train Card for OBHS Railway to:</label>
                    <input type="text" name="trainCardObhsRailway" value={formData.trainCardObhsRailway} onChange={handleChange} />
                </div>
            </div>
            <div className="body">
                <table>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Travelling Authority</th>
                            <th>Uniform</th>
                            <th>Presence of Staff at other end</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><input type="text" name="name" value={row.name} onChange={(e) => handleTableChange(index, e)} /></td>
                                <td><input type="text" name="designation" value={row.designation} onChange={(e) => handleTableChange(index, e)} /></td>
                                <td><input type="text" name="travellingAuthority" value={row.travellingAuthority} onChange={(e) => handleTableChange(index, e)} /></td>
                                <td><input type="text" name="uniform" value={row.uniform} onChange={(e) => handleTableChange(index, e)} /></td>
                                <td><input type="text" name="presenceOfStaff" value={row.presenceOfStaff} onChange={(e) => handleTableChange(index, e)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="footer">
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Brush for cleaning of compartments</th>
                            <th>Squeeze mop with handle</th>
                            <th>Commode toilet brush with bristol</th>
                            <th>Bucket / Absaned basket</th>
                            <th>Face mask / Nose mask</th>
                            <th>Shoes</th>
                            <th>Other items if any</th>
                        </tr>
                    </thead>
                    <tbody>
                        {footerData.map((row, index) => (
                            <tr key={index}>
                                <td>{index === 0 ? 'QD' : 'QA'}</td>
                                <td><input type="text" name="brush" value={row.brush} onChange={(e) => handleFooterChange(index, e)} /></td>
                                <td><input type="text" name="mop" value={row.mop} onChange={(e) => handleFooterChange(index, e)} /></td>
                                <td><input type="text" name="toiletBrush" value={row.toiletBrush} onChange={(e) => handleFooterChange(index, e)} /></td>
                                <td><input type="text" name="bucket" value={row.bucket} onChange={(e) => handleFooterChange(index, e)} /></td>
                                <td><input type="text" name="mask" value={row.mask} onChange={(e) => handleFooterChange(index, e)} /></td>
                                <td><input type="text" name="shoes" value={row.shoes} onChange={(e) => handleFooterChange(index, e)} /></td>
                                <td><input type="text" name="other" value={row.other} onChange={(e) => handleFooterChange(index, e)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

// export default TrainEmpForm;