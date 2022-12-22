import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function SignupForm({ isNewUser, setIsNewUser, onLogin }) {

    //EDIT THIS!

    const [errors, setErrors] = useState([])

    const blankFormTemplate = {
        username: "",
        email: "",
        password: "",
        profile_image: ""
    }
    const [formData, setFormData] = useState(blankFormTemplate)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
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
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileImage">
                    <Form.Label>Profile Image URL</Form.Label>
                    <Form.Control type="text" name="profile_image" placeholder="www.google.com/images" value={formData.profile_image} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>

            <h4 className="mb-4">Are you new here? Create an account below:</h4>
            <Button className="btn btn-secondary" onClick={() => setIsNewUser(true)}>Create Account</Button>
        </div>
    );
}

export default SignupForm;