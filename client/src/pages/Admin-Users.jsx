import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const { authorizationToken} = useAuth();


    // Ftech all Users Data from DB
    const getAllUsersData = async () => {
        try {
            const response = await fetch ("http://localhost:8000/api/admin/users", {
            method : "GET",
            headers : {
                Authorization: authorizationToken,
            },
        });
        const data =await response.json();
        console.log(`users ${data}`);
        setUsers(data);
        } catch (error) {
            console.log(error);
            
        }
    }; 



        // delete  the users data 
        const deleteUser = async (id) => {
            try {
                const response = await fetch (`http://localhost:8000/api/admin/users/delete/${id}`, 
                    {
                        method : "DELETE",
                        headers : {
                            Authorization: authorizationToken,
                        },
                    });
                    const data =await response.json();
                    console.log(`users after delete: ${data}`);

                    if(response.ok){
                        getAllUsersData();
                    }
        
            } catch (error) {
                
            console.log(error);
            }
            
        };



        useEffect (() => {
            getAllUsersData();
        }, [])

        // const handleInput = (e) => {
        //     let name = e.target.name;
        //     let value = e.target.value;

        //     setData({
        //         ...data,
        //         [name]: value,
        //     })
        // };



    return(
        <>
        <section className="admin-users-section">
            <div className="container">
                <h1>Employee Data</h1>
            </div>
            <div className="conatiner admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Emp Name</th>
                            <th>F Name</th>
                            {/* <th>Email</th> */}
                            <th>D.O.B</th>
                            <th>Gender</th>
                            <th>Add</th>
                            {/* <th>Aadhar</th> */}
                            <th>Phone</th>
                            <th>PAN</th>
                            <th>Acc</th>
                            <th>IFSC</th>
                            <th>Post</th>
                            <th>Qual</th>
                            <th>P Ver</th>
                            <th>P VerDate</th>
                            <th>P VerTime</th>
                            <th>P VerVal</th>
                            <th>UAN</th>
                            <th>ESIC</th>
                            <th>Skill</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    {/* <tbody>
                    {users.map((curUser, index) => {
                return <tr key= {index}>
                    <td>{curUser.id}</td>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>{curUser.phone}</td>
                    <td>{curUser.phone}</td>
                    <td>
                        <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                        <button
                        className="btn"
                        onClick={() => deleteUser(curUser._id)}>
                        
                        Delete </button></td>
                </tr>
            })}
                    </tbody> */}
                    <tbody>
                        {users.map((curUser, index) => (
                            <tr key={index}>
                                <td>{curUser.employeeId}</td>
                                <td>{curUser.empname}</td>
                                <td>{curUser.fathersname}</td>
                                <td>{new Date(curUser.dob).toLocaleDateString()}</td>
                                <td>{curUser.gender}</td>
                                <td>{curUser.address}</td>
                                {/* <td>{curUser.aadhar}</td> */}
                                <td>{curUser.phoneNo}</td>
                                <td>{curUser.pan}</td>
                                <td>{curUser.acc}</td>
                                <td>{curUser.ifsc}</td>
                                <td>{curUser.post}</td>
                                <td>{curUser.qual}</td>
                                <td>{curUser.pver}</td>
                                <td>{curUser.pverdate}</td>
                                <td>{curUser.pvertime}</td>
                                <td>{curUser.pverval}</td>
                                <td>{curUser.uanno}</td>
                                <td>{curUser.esicno}</td>
                                <td>{curUser.skill}</td>
                                <td>
                                    <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                                </td>
                                <td>
                                    <button
                                        className="btn"
                                        onClick={() => deleteUser(curUser._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
        </>
    );
};