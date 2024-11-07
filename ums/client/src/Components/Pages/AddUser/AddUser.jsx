import 'bootstrap/dist/css/bootstrap.min.css';


export default function AddUser() {
    return (
        <>
            <div className="bg-dark">
                <div className="main-box">
                    <div className="slider-cont">
                        <div className="">
                            <div className="">
                                {/* <h1>The hardest part of starting up is starting out for you.</h1> */}
                                <div className="" style={{ padding: "90px 200px 0px 0px" }}>
                                    <img src="./images/login_cover.webp" style={{ width: 555 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-cont">
                        <div className="form form-signup">
                            <form onSubmit="(event)">
                                <lable>FULL NAME</lable>
                                <input type="text" placeholder="Your full name" id="name" name="name" />
                                <lable>E-MAIL</lable>
                                <input
                                    type="email"
                                    placeholder="Your e-mail"
                                    id="email"
                                    name="email"
                                    required=""
                                />
                                {/* <lable>PASSWORD</lable> */}
                                {/* <input type="password" placeholder="Your password" id="password" name="password" required> */}
                                <lable>phone no</lable>
                                <input type="text" placeholder=" phone" id="phone" name="phone" />
                                <lable>Image</lable>
                                <input type="file" placeholder="file" id="image" name="image" />
                                <lable>Age</lable>
                                <input type="number" placeholder=" age" id="age" name="age" />
                                {/* <p class="terms">
              <input type="checkbox">
              I agree all statments in 
              <a href="#" class="lined-link">terms of service</a>
            </p> */}
                                <br />
                                <label htmlFor="usertype" className="text-white">
                                    User Type:
                                </label>
                                <br />
                                <select id="usertype" name="usertype" className="pt-3" required="">
                                    <option className="option" value="Admin">
                                        Admin
                                    </option>
                                    <option className="option" value="Employee">
                                        Employee
                                    </option>
                                </select>
                                <br />
                                <br />
                                <div className="">
                                    <input type="submit" className="form-btna " defaultValue="Sign Up" />
                                </div>
                                <br />
                                <br />
                                {/* <a href="#" class="lined-link to-signin-link">I'm already member</a> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

