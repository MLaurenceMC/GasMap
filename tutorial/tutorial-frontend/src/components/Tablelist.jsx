import axios from 'axios';
import { useState, useEffect } from 'react';

export default function TableList({
    handleOpen,
    searchTerm,
    tableData,
    setTableData,
}) {
    const [error, setError] = useState(null);

    const filteredData = tableData.filter(
        (client) =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.job.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete this client?`
        );
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/api/clients/${id}`);
                setTableData((prevData) =>
                    prevData.filter((client) => client.id !== id)
                );
            } catch (err) {
                setError(err.message);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/clients`
                );
                setTableData(response.data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {error && <div className="alert alert-error"> {error}</div>}
            <div className="overflow-x-auto">
                <table className="table-xs table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Rate</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.job}</td>
                                <td>{item.rate}</td>
                                <td>
                                    <button
                                        className={`btn w-20 rounded-full ${
                                            item.isactive
                                                ? `btn-primary`
                                                : `btn-primary btn-outline`
                                        }`}
                                    >
                                        {item.isactive ? 'Active' : 'Inactive'}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleOpen('edit', item)}
                                        className={`btn btn-secondary w-20`}
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={handleOpen}
                                        className={`btn btn-error w-20`}
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
