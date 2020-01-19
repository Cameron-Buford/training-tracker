import React, {Component} from 'react'
import Drill from './Drill'

class Profile extends Component{
    constructor(){
        super()
        this.state = {
            

        }
    }

    render(){
        let list = this.props.display1.map((element,index) => {
        return <Drill inputScore = {this.props.inputScore} handleInputfn = {this.props.handleInputfn} editScorefn = {this.props.editScorefn} removeDrillfn = {this.props.removeDrillfn} key={index} drill= {element}/>
        })



        return(
            <div>
                
                <div className= 'center'>
                    <div>{list}</div>
                
                
                </div>
            </div>
        )
    }



}

export default Profile