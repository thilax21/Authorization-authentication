import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
export default function Signup() {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!form.name) newErrors.name = "Name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.password) newErrors.password = "Password is required";
        if (!form.confirm) newErrors.confirm = " Please confirm your password ";
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }
        setError({});
        navigate(`/details/${form.name}/${form.email}`);
    };
    return (
        <>
            <div className="head">
                <h1 className="app">AuthApp</h1>
                <p>Secure authentication with React Context </p>
            </div>
            <form className="signup">
                <div className="head">
                    <h2 className="account" >Create Account</h2>
                    <p>Sign up to get started with your account </p>
                </div>
                <label>Full Name</label>
                <br /><br />
                <input className="input" type="text" name="name" placeholder="Enter your full name" value={form.name} onChange={handleChange}></input>
                {error.name && <p className="error">{error.name}</p>}
                <br /><br />
                <label>Email</label>
                <br /><br />
                <input className="input" type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange}></input>
                {error.email && <p className="error">{error.email}</p>}
                <br /><br />
                <label>password</label>
                <br /><br />
                <input className="input" type="password" name="password" placeholder="Enter your password" value={form.password} onChange={handleChange}></input>
                {error.password && <p className="error">{error.password}</p>}
                <br /><br />
                <label>Confirm password</label>
                <br /><br />
                <input className="input" type="password" name="confirm" placeholder="Confirm your password" value={form.confirm} onChange={handleChange}></input>
                {error.confirm && <p className="error">{error.confirm}</p>}
                <br /><br />
                <div>
                    <p>Password must contain:</p>
                    <ul>
                        <li>At least 6 charactors</li>
                        <li>One LowerCase Letter</li>
                        <li>One Number</li>
                    </ul>
                </div>
                <button className="btn" onClick={handleSignUp}>Create Account</button>
                <p>Don't have an account? <Link to="/signin">Sign in</Link></p>

               
            </form>
        </>
    )
}