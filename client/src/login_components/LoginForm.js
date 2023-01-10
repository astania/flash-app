// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


function LoginForm({ onLogin }) {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleCallbackResponse = (response) => {
        const userObject = jwt_decode(response.credential)
        const googleUser = { email: userObject.email, profile_image: userObject.picture }
    
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ googleUser }),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(userInfo => onLogin(userInfo))
                } else {
                    // res.json().then((errorData) => setErrors(errorData.errors))
                    console.log("error!")
                }
            })
            document.getElementById("signInDiv").hidden = true
            navigate("/")

    }

    useEffect(() => {
        /*global google*/

        google.accounts.id.initialize({
            client_id: "574245248770-osgu5o1inmda8a85edfq4ncp1526frt0.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
    }, [])

    return (
        <div className="center">
            <h2>Log In or Sign Up:</h2>
            <div id="signInDiv"></div>
        </div>
    );
}

export default LoginForm;