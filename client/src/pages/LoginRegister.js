import React, { Fragment,useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import LayoutTwo from "../layouts/LayoutTwo";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";

const LoginRegister = () => {
  const [pseudo, setPseudo] = useState("");
  const [name, setName] = useState("");
  const [ville, setVille] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()

    


    fetch("http://localhost:4000/api/users/signup", {
      method: 'post', headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pseudo: pseudo,
        Name: name,
        ville: ville,
        email: email,
        password: password,
        tel: tel,
        role: role,
        
        
      }
      )
    }
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        //setName("")
        //setEmail("")
        //setPassword("")
        //setPasswordConfirmation("")
        window.location = "/login-register"
      });



  }

  
  return (
    <Fragment>
      <MetaTags>
        <title>Coinaro | Login</title>
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
                <Tab.Container defaultActiveKey="register">
                  <Nav
                    variant="pills"
                    className="acount__nav justify-content-center"
                  >
                    <Nav.Item>
                      <Link to="/login">Login</Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link to="/register">Register</Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <form >
                    <Tab.Pane eventKey="login">
                      
                    </Tab.Pane>
                    </form> 
                    <Tab.Pane eventKey="register">
                    <form onSubmit={handleSubmit}>
                      <div className="single__account">
                        <div className="input__box">
                          <span>Pseudo</span>
                          <input type="text"
                          value={pseudo} onChange={(e) => setPseudo(e.target.value)} 
                          />
                        </div>
                        <div className="input__box">
                          <span> Name</span>
                          <input type="text" 
                          value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="input__box">
                          <span>Email address</span>
                          <input type="email" 
                          value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input__box">
                          <span>ville</span>
                          <input type="text"
                          value={ville} onChange={(e) => setVille(e.target.value)} />
                        </div>
                        <div className="input__box">
                          <span>telephone</span>
                          <input type="text" 
                          value={tel} onChange={(e) => setTel(e.target.value)}/>
                        </div>
                        <div className="input__box">
                          <span>Password</span>
                          <input type="password" 
                          value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className="account__btn" type='submit'>Register</button>
                      </div>
                      </form>
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

export default LoginRegister;
