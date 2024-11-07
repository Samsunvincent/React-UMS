import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };
    
    console.log('data', data);

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Failed to login. Check your credentials.");
      }

      const parsedResponse = await response.json();
      console.log("parsedResponse", parsedResponse);

      // Destructure and validate parsed response data
      const { token, id, user_type, isFirstLogin } = parsedResponse.data || {};
      if (!token || !id || !user_type) {
        throw new Error("Unexpected response structure.");
      }

      // Save the token in local storage
      localStorage.setItem(id, token);

      // Display the message and navigate based on user type and login status
      if (!isFirstLogin) {
        
        if (user_type === "Employee") {
          alert(parsedResponse.message)
          navigate(`/EmployeeComponent?login=${id}&id=${id}`);
        } else if (user_type === "Admin") {
          alert(parsedResponse.message)
          navigate(`/adminComponent?login=${id}&id=${id}`);
        }
      } else {
        console.log("First login. Handle as needed.");
      }
      
    } catch (error) {
      console.error("Error:", error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row position-absolute top-50 start-50 translate-middle">
          <div className="col-lg-3 col-md-2" />
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true" />
            </div>
            <div className="col-lg-12 login-title">LOGIN PANEL</div>
            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form onSubmit={login}>
                  <div className="form-group">
                    <label className="form-control-label">EMAIL</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                      {/* Display error message if login fails */}
                      {error && <div className="alert alert-danger">{error}</div>}
                    </div>
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">
                        LOGIN
                      </button>
                    </div>
                    <a href="./email-verify.html">Forget password?</a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;