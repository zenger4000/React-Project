import React, { Component } from 'react'
import UserContext from './UserContext'

class Testclasscomp2 extends Component {
  render() {
    return (
        <UserContext.Consumer>
            {(value)=>{
                return (<div>{value} from last child</div>)
            }}
        </UserContext.Consumer>
    )
  }
}

export default Testclasscomp2