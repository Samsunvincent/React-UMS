import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


export default function EmployeeComponent() {
    const navigate = useNavigate();

    const signout = () => {
        // Get the token_key from URL parameters (if needed)
        let params = new URLSearchParams(window.location.search);
        let token_key = params.get('login');
        
        // Remove token from localStorage
        localStorage.removeItem(token_key);
    
        // Optionally, redirect to the login page after signout
        navigate('/'); // Redirecting to login page (you may want to change the path based on your routing setup)
    };
    
    return (
        <>
            <div className='bg-dark'>
                <nav>
                    <div className="d-flex justify-content-between p-5 fs-6">
                        <div>
                            <p className="text-white">Employee view</p>
                        </div>
                        <div className="d-flex align-items-center gap-5 px-3 text-white">
                            <div>Home</div>
                            <div>About</div>
                            <div>Contact</div>
                            <div>
                                <button onClick={() => Profile()} className="button-style">
                                    Profile
                                </button>
                            </div>
                            <div>
                                <button onClick={() => signout()}>Sign Out</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div id="welcome-container" />
            </div>
        </>
    );
}
