import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminComponent() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]); // Ensure initial state is an empty array
    const [loading, setLoading] = useState(true); // Loading state
    const [admin, setAdmin] = useState();
    const [error, setError] = useState(null); // Error state
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false); // Off-canvas state

    const addPage = () => {
        let params = new URLSearchParams(window.location.search);
        let token_key = params.get('login');
        navigate(`/AddUser?login=${token_key}`);
    };

    const toggleOffCanvas = () => {
        setIsOffCanvasOpen(!isOffCanvasOpen);
    };

    const signout = () => {
        // Clear the token and redirect to login
        let params = new URLSearchParams(window.location.search);
        let token_key = params.get('login');
        localStorage.removeItem(token_key); // Assuming token is saved under 'token_key'
        navigate('/'); // Redirect to login page
    };

    const getToken = () => {
        let params = new URLSearchParams(window.location.search);
        let token_key = params.get('login');
        return localStorage.getItem(token_key);
    };

    const getAllUsers = async () => {
        const token = getToken();

        try {
            const response = await axios.get(`http://localhost:3000/getAllData`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('response', response);
            setUsers(response.data.data || []); // Adjust according to API structure
        } catch (error) {
            setError('Failed to fetch users. Please try again later.');
        } finally {
            setLoading(false); // Stop loading when data is fetched or error occurs
        }
    };

    const handleViewClick = (id) => {
        console.log('id', id);
        const token_key = new URLSearchParams(window.location.search).get('login');
        navigate(`/ViewUser?login=${token_key}&id=${id}`);
    };

    const adminData = async () => {
        const token = getToken();
        const id = new URLSearchParams(window.location.search).get('id');

        try {
            const response = await axios.get(`http://localhost:3000/user/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                validateStatus: (status) => status >= 200 && status < 300 || status === 401,
            });
            console.log("adminresponse", response);
            setAdmin(response.data.data);
        } catch (error) {
            console.error("Error fetching admin data", error);
        }
    };

    const handleUpdateClick = (id) => {
        const token_key = new URLSearchParams(window.location.search).get('login');
        navigate(`/UpdateUSer?login=${token_key}&id=${id}`);
    };

    const handleDeleteClick = async (id) => {
        const token = getToken();

        try {
            // Making the DELETE request to the server
            const response = await axios.delete(`http://localhost:3000/user/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('response from delete', response);

            // Check if deletion was successful before refreshing users list
            if (response.status === 200) {
                // Refresh users list after deletion
                getAllUsers();
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    // Load users data on component mount
    useEffect(() => {
        getAllUsers();
        adminData();
    }, []);

    return (
        <>
            <div>
                <nav className="p-5 bg-dark">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="text-danger fs-3">Admin view</div>
                            <div className="d-flex align-items-center gap-5">
                                <div>
                                    <a href="./index.html">Home</a>
                                </div>
                                <div>
                                    <button onClick={addPage} className="adduser text-light">Add User</button>
                                </div>
                                <div>
                                    <header>
                                        <div
                                            className="user-icon text-light "
                                            onClick={toggleOffCanvas}
                                        >
                                            <img
                                                src="https://img.icons8.com/?size=100&id=492ILERveW8G&format=png&color=000000"
                                                alt="User Icon"
                                                style={{ width: 30 }}
                                            />
                                        </div>
                                    </header>
                                    {isOffCanvasOpen && (
                                        <div className="off-canvas active">
                                            <div className="off-canvas-content">
                                                <div id="AdminProfileContainer" />
                                                <span className="d-flex justify-content-center">Admin</span>
                                                <div className='pt-5 text-center'>Name : {admin?.name}</div>
                                                <div className='text-center'>Email : {admin?.email}</div>
                                                <span onClick={toggleOffCanvas} className="position-absolute top-0 end-0">
                                                    <i className="fa fa-close" style={{ fontSize: 26, color: "red", backgroundColor: "rgb(255, 255, 255)", padding: 20 }} />
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="overlay" id="overlay" />
                                </div>
                                <div>
                                    <button onClick={signout} className="adduser text-light">SignOut</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="user pt-5">
                    {loading ? (
                        <div>Loading...</div> // Show loading state
                    ) : error ? (
                        <div className="text-danger">{error}</div> // Show error if any
                    ) : (
                        <table className="bg-white">
                            <thead>
                                <tr className="table-head">
                                    <th>User</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Age</th>
                                    <th>View</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users && users.length > 0 ? (
                                    users
                                        .filter(user => user._id !== '672c76de5e0c73ad44a7501f') // Dynamic admin check if needed
                                        .map((user) => (
                                            <tr key={user._id}>
                                                <td><img src={user.image} alt="user image" style={{ width: 50, height: 50, borderRadius: '50%' }} /></td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.age}</td>
                                                <td><i className="fa fa-eye" style={{ fontSize: "24px" }} onClick={() => handleViewClick(user._id)} ></i></td>
                                                <td><i className="fa fa-edit" style={{ fontSize: "24px" }} onClick={() => handleUpdateClick(user._id)}></i></td>
                                                <td><i className="fa fa-trash text-danger" style={{ fontSize: "24px" }} onClick={() => handleDeleteClick(user._id)}></i></td>
                                            </tr>
                                        ))
                                ) : (
                                    <tr>
                                        <td colSpan="8">No users found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
}
