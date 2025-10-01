import { useParams, Link } from "react-router-dom";
function DetailPage() {
    const { name, email } = useParams();
    if (!name || !email) {
        return <h2> User is Not Found</h2>
    }
    return (
        <>
            <div className="detail">
                <Link to="/signup">Sign out </Link>
                <h1 className="wel">Welcome back, {name}</h1>
                <p> Manage your account and profile settings</p>
                <div className="user">
                    <h2>Profile information</h2>
                    <p>Your acconut details and information</p>
                    <h3 className="users">Full Name: <br></br> {name}</h3>
                    <h3 className="users"> Email:  EmailAddress: <br></br>{email}</h3>
                   
                </div>
            </div>
        </>
    )
}
export default DetailPage;