import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";



export default function AdminComponent() {
    const navigate = useNavigate()

    const addPage = ()=>{

        let params = new URLSearchParams(window.location.search);

        let token_key = params.get('login');

        


        navigate(`/AddUser?login=${token_key}`)
    }
    const toggleOffCanvas = ()=>{
        const offCanvas = document.getElementById('offCanvas');
        const overlay = document.getElementById('overlay');
        
        offCanvas.classList.toggle('active');
        overlay.classList.toggle('active');
    }
    const signout = ()=>{

    }
    return (
        <>
           
           <div>
            <nav className="p-5 bg-dark">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-danger fs-3">Admin view</div>
                        <div className="d-flex align-items-center gap-5 border-style-none">
                            <div>
                                <a href="./index.html">Home</a>
                            </div>
                            <div>
                                <button onClick={addPage} className="adduser text-light">Add User</button>
                            </div>
                            <div>
                                <header>
                                    <div
                                        className="user-icon text-light"
                                        onClick={toggleOffCanvas}
                                    >
                                        <img
                                            src="https://img.icons8.com/?size=100&id=492ILERveW8G&format=png&color=000000"
                                            alt="User Icon"
                                            style={{ width: 30 }}
                                        />
                                    </div>
                                </header>
                                <div className="off-canvas" id="offCanvas">
                                    <div className="off-canvas-content">
                                        <div id="AdminProfileContainer" />
                                        <span className="d-flex ">Admin</span>
                                        <div id="admin_data" />
                                        <span
                                            onClick={toggleOffCanvas}
                                            className="position-absolute top-0 end-0"
                                        >
                                            <i
                                                className="fa fa-close"
                                                style={{
                                                    fontSize: 26,
                                                    color: "red",
                                                    backgroundColor: "rgb(255, 255, 255)",
                                                    padding: 20
                                                }}
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="overlay" id="overlay" />
                            </div>
                            <div>
                                <button onClick={signout} className="adduser text-light">
                                    SignOut
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="user pt-5">
                <table className="bg-white">
                    <thead>
                        <tr className="table-head">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody id="userTable"></tbody>
                </table>
            </div>
            <div id="allUsersContainer" />
        </div>
           

        </>
    )
}