import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container not-found">
            <h1>404 - Not Found!</h1>
            <Link to="/">{"< Home Page"}</Link>
        </div>
    )
}

export default NotFound;