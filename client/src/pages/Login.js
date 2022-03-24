import React, { Fragment,useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import LayoutTwo from "../layouts/LayoutTwo";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast("bad login or password");
  const handleSubmit = (e) => {
    e.preventDefault()

    


    fetch("http://localhost:4000/api/users/login", {
      method: 'post', headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      }
      )
    }
    )
      .then((response) => response.json())
      .then((result) => {
        if(!result.token){
          console.log("login failed");
          notify()
          
        } else if (result.role == "admin"){
          window.location = "/admindash"
          console.log(result);
      }
      else if (result.role == "user"){
        window.location = "/userdash"
        console.log(result);
      }
    });
      
    }
      



  

  
  return (
    <Fragment>
      <MetaTags>
        <title>Coinaro  | Login</title>
        <meta
          name="description"
          content="Login page of React JS Crypto Currency Template."
        />
      </MetaTags>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="LOGIN - REGISTER" />
        {/* login register content */}
        <div className="dg__account section-padding--xl">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tab.Container defaultActiveKey="login">
                  <Nav
                    variant="pills"
                    className="acount__nav justify-content-center">
                    
                    <Nav.Item>
                      <Link eventKey="register">Login</Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link to="/register">Register</Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <form onSubmit={handleSubmit}>
                    <Tab.Pane eventKey="login">
                    <div className="single__account">
                        <div className="input__box">
                          <span>Email Address</span>
                          <input type="text" 
                          onChange={e => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="input__box">
                          <span>Password</span>
                          <input type="password" 
                          onChange={e => setPassword(e.target.value)}
                          />
                        </div>
                        <Link
                          className="forget__pass"
                          href={process.env.PUBLIC_URL + "/"}
                        >
                          Lost your password?
                        </Link>
                        <button className="account__btn" type="submit" >Login</button>
                       
                      </div>
                    </Tab.Pane>
                    <ToastContainer />
                    </form> 
                    <Tab.Pane eventKey="register">
                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </LayoutTwo>
    </Fragment>
  );
};

export default Login;
