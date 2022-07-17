import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // we could use (props) above and then
  // let blogs = props.blogs;

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id} style={{ color: "black" }}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 style={{ color: "pink" }}> {blog.title} </h2>
            <p>
              Author is {blog.author} <br />
              <br />
              {/* <button onClick={()=>{deleteHandler(blog.ID)}} >Delete Blog</button> */}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
