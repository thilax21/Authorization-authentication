import { useState } from "react"
import { Link } from "react-router-dom"
export default function Signin() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState({});
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!form.email) newErrors.email = "Email is required";
        if (!form.password) newErrors.password = "Password is required";
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            return;
        }
        setError({});
        alert(`Signed in as ${form.email}`);
        setForm({ email: "", password: "" });
    };
    return (
        <>
            <div className="head">
                <h1 className="app">AuthApp</h1>
                <p>Secure authentication with React Context </p>
            </div>
            <div className="signin">
                <form>
                    <div className="welcome">
                        <h2 className="back">Wecome Back</h2>
                        <p>Sign in to your account to continue</p>
                    </div>
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
                    <button className="btn" onClick={handleSignIn}  >sign in </button>
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </form>
            </div>
        </>
    )
}