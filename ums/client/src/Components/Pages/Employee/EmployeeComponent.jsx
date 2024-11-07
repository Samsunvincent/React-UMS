import 'bootstrap/dist/css/bootstrap.min.css';

export default function EmployeeComponent() {
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
