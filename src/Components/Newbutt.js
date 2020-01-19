import React, {Component} from 'react';

class Newbutt extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        const {newName, newScore, newDescript, handleNamefn, handleScorefn, handleDescriptionfn, handleNewfn} = this.props
        console.log(this.props)
        return(
            <div>
                <button onClick= {() => this.props.handleNewfn(this.props.drill.id)}>+ New Drill</button>
                <input className= 'drill-name' type= 'text' onChange= {(e)=> this.props.handleNamefn(e.target)} name= 'name' value= {newName}></input>
                <input className= 'score' type= 'number' onChange= {(e)=> this.props.handleScorefn(e.target)} score= 'score' value= {newScore}></input>
                <input className= 'description' type= 'text' onChange= {(e)=> this.props.handleDescriptionfn(e.target)} description= 'description' value= {newDescript}></input>
            </div>
        )
    }



}

export default Newbutt