import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");
    const [author , setAuthor] = useState("mario");
    const [isPending , setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit =(e)=> {
        e.preventDefault();
        const blog = {title , body , author};

        setIsPending(true);
        
        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{console.log("blog added")
        setIsPending(false);
        history.push("/")
    });
        
    }

    return (
    <div className="create">
        <h2>Create New Blog</h2> 
        <div>
            <form onSubmit={handleSubmit}>
                <div><label>Blog Title : </label>
                <br />
                <input
                 type="text"
                 required
                 value={title}
                 onChange={(e)=>{setTitle(e.target.value)}}
                 /></div>

                <div><label>Blog Body : </label>
                <br />
                <textarea
                 type="text"
                 required
                 value={body}
                 onChange={(e)=>{setBody(e.target.value)}}
                 >
                 </textarea></div>
                 
                 <div>
                 <label>Blog Author : </label>
                 <select
                 value={author}
                 onChange={(e)=>{setAuthor(e.target.value)}}>
                     <option value="mario">mario</option>
                     <option value="yoshi">yoshi</option>
                </select>
                 </div>                 
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled style={{backgroundColor:"blue"}} >Adding blog ...</button>}
            </form>
        </div>
    </div>  
    );
}
 
export default Create;