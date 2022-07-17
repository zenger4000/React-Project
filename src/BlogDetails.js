import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data , isPending , error} = useFetch(`http://localhost:8000/Blogs/${id}`);
    const history = useHistory()
    const handleClick = ()=>{
        fetch(`http://localhost:8000/Blogs/${data.id}`,{
            method:"DELETE"
        })
        .then(()=>{
            history.push("/")
        })
    }

    return (

    <div className="blog-details">

        {isPending && <div> Loading ... </div>}
        {error && <h2>{error}</h2>}
        {data && <h2>{data.title}</h2>}
        {data && <h6> by {data.author}</h6>}
        {data && <p>{data.body}</p>}
        {data && <button onClick={handleClick} style={{backgroundColor:"rgb(250,100,100)"}}>Delete</button>}
    </div>
    
      );
}
 
export default BlogDetails;