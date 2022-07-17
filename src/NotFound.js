import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2> Oops !</h2>
            <p>
                the page your'e looking for doen't exist 
            </p>
            <Link to="/"> Go to the home page instead </Link>
        </div>
    );
}
 
export default NotFound;
