import useFetch from "./useFetch"
import BlogList from "./BlogList";
const Home = () => {

    const {data , isPending , error} = useFetch("http://localhost:8000/Blogs");

    return (
        <div className="home">

                {isPending && <div>Loading ... </div>}
                {error && <h2> {error} </h2>}
                {data && <BlogList blogs={data} title="All Blogs" />}


        </div>
                
      );
}
 
export default Home;