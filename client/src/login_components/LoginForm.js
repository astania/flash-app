import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";


function LoginForm({ isNewUser, setIsNewUser, onLogin, setUser }) {

    const handleCallbackResponse = (response) => {
        // console.log("jtw token", response.credential)
        const userObject = jwt_decode(response.credential)
        const googleUser = {username: userObject.name, email: userObject.email, password: "", profile_image: userObject.picture}
        setUser(googleUser)
      }

    useEffect(() => {
        /*global google*/ 
    
        google.accounts.id.initialize({
          client_id: "574245248770-osgu5o1inmda8a85edfq4ncp1526frt0.apps.googleusercontent.com",
          callback: handleCallbackResponse
        })
    
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"), 
          { theme: "outline", size: "large"}
        )
    
      }, [])
    
    

    const [errors, setErrors] = useState([])

    const blankFormTemplate = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(blankFormTemplate)

    const handleSubmit = (e) => {
        e.preventDefault()

        //to sessions#create
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData }),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(userInfo => onLogin(userInfo))
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }
            })
    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData({
            ...formData, [name]: value
        })
    }

    return (
        <div className="center">
            <h2>Log In Below:</h2>
            <Form className="center" onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <div id="signInDiv"></div>
                {/* {errors.length > 0 ?
                    <div style={{ color: "red" }}>
                        {errors.map((error) => (
                            <em key={error}> {error} </em>
                        ))}
                    </div>
                    : ""} */}
            </Form>

            <h4 className="mb-4">Are you new here? Create an account below:</h4>
            <Button className="btn btn-secondary" onClick={() => setIsNewUser(true)}>Create Account</Button>
        </div>
    );
}

export default LoginForm;