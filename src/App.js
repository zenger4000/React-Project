import './App.css';
import { useState } from 'react';
// import BlogList from './BlogList';
// import useFetch from './useFetch';
import {BrowserRouter as Router ,Route ,Switch , Link} from 'react-router-dom'
import AboutUs from './AboutUs';
import Home from './Home'
import BlogDetails from './BlogDetails';
import Create from './Create';
import NotFound from './NotFound';
import UserContext from './UserContext';


let counter = 0;

function App() {

  const [Name,setName]=useState("Mario");



  const clicker = ()=>{
    if(counter===0){
    setName("Luigi");
    counter++;
    }
    else {
      if(!(Name==="Waluigi")){
        setName("Waluigi")
      } 
    }
  }

  

  // function deleteHandler(id){
  //   let newBlogs = blogs.filter((blog)=>(blog.ID!==id))
  //   setBlogs(newBlogs);
  // }


  // we could do a setTimeout in the useEffect to simulate loading




  return (
    <Router>
        <div className="App" style={{color:"rgb(0, 255, 255)"}}>
            yo
          <p>{Name}</p>
          <br />
          <button id="zere" onClick={clicker}> zere </button>
          <br /> <br />
          <Link to='/'> Home </Link>
          <Link to='/aboutus'> About Us</Link>
          <Link to='/create'> Create </Link>
          <br /> <br />
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/aboutus'>
                <UserContext.Provider value={"CONTEXTUAL"}>
                  <AboutUs/>
                </UserContext.Provider>
              </Route>
              <Route path='/blogs/:id'>
                <BlogDetails/>
              </Route>
              <Route path={"/create"}>
                <Create/>
              </Route>
              <Route path={"*"}>
                <NotFound/>
              </Route>
            </Switch>
            
          </div>
          
          {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='a')}  title="a's Blogs" deleteHandler={deleteHandler} /> */}
          </div>
    </Router>
    
  );
}

export default App;