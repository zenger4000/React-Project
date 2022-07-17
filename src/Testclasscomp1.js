import React, { Component } from 'react'
import Testclasscomp2 from './Testclasscomp2';
import UserContext from './UserContext';

export class Testclasscomp1 extends Component {
    constructor (props){
        super (props);
        this.inpRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.inpRef);
        this.inpRef.current.focus();
    }

    handleClick = ()=>{
        console.log(this.inpRef.current.value)
    }

  render() {
    return (
        <div className="class-comp-1">
            <h2>Type anything here !</h2>
            <input type="text" ref={this.inpRef}></input>
            <br /><br />
            <button onClick={this.handleClick}>Then log it !</button>
            <br /><br />
            <UserContext.Consumer>{(ve)=>{return(<div>{ve} from middle child</div>)}}</UserContext.Consumer>

            <Testclasscomp2/>

        </div>

    )
  }
}

export default Testclasscomp1