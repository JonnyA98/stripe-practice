"use client"
import axios from "axios";
import { useEffect, useCallback, useState } from "react";
import Notification from "../../components/Notification/Notification";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


interface User {
    name: string;
    email: string;
}

const TablePage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [notification, setNotification] = useState({ show: false, type: "", message: "" });

    const getUsers = useCallback(async () => {
        try {
            const response = await axios.get(process.env.DB_URL || 'http://127.0.0.1:8000/users/');
            setUsers(response.data); 
        } catch (error) { 
            setNotification({ show: true, type: "error", message: "Error getting users" });
        }
    }, []); 

    useEffect(() => {
        getUsers(); 
    }, [getUsers]); 

    return (
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
            <h1>List of all Users</h1>
            {notification.show && (notification.type === "error" || notification.type === "success") && (
                <Notification type={notification.type} message={notification.message} />
            )}
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((user) => (
                            <TableRow
                                key={user.email}
                            >
                                <TableCell component="th" scope="row">
                                    {user.name}
                                </TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TablePage;
