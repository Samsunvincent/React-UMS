import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './OffCanvas.css'; // Add this import for styling

export default function OffCanvas({ profile, loading, fetchProfile }) {
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

    const toggleOffCanvas = () => {
        setIsOffCanvasOpen(!isOffCanvasOpen);
        if (!isOffCanvasOpen) {
            fetchProfile(); // Fetch profile when opening the canvas
        }
    };

    return (
        <>
            <div>
                <header>
                    <div
                        className="user-icon "
                        onClick={toggleOffCanvas}
                    >
                        <img
                            src="https://img.icons8.com/?size=100&id=492ILERveW8G&format=png&color=000000"
                            alt="User Icon"
                            style={{ width: 30 }}
                        />
                    </div>
                </header>

                {/* Apply blur effect to background when off-canvas is open */}
                {isOffCanvasOpen && (
                    <div className="backdrop blur-effect">
                        <div className="off-canvas active">
                            <div className="off-canvas-content">
                                {loading ? (
                                    <div className="text-center">Loading...</div>
                                ) : (
                                    <>
                                        <div id="AdminProfileContainer" />
                                        <span className="d-flex justify-content-center">Admin</span>
                                        {profile ? (
                                            <>
                                                <div className="pt-5 text-center  text-dark">Name: {profile.name}</div>
                                                <div className="text-center text-dark">Email: {profile.email}</div>
                                                {/* You can add more details as needed */}
                                                <div className="text-center text-dark">Role: {profile.role}</div>
                                                <div className="text-center text-dark">Phone: {profile.phone}</div>
                                            </>
                                        ) : (
                                            <div className="text-center">No profile data available</div>
                                        )}
                                    </>
                                )}

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
                    </div>
                )}

                <div className="overlay" id="overlay" />
            </div>
        </>
    );
}
