import React, {Component} from 'react'

class Drill extends Component{
    constructor(){
        super()
        this.state= {
            

        }
    }



    render(){

        const {handleInputfn, inputScore} = this.props
        return(

             <div className= 'drill-data'>
                 <div className= 'button-box'>
                
                    <button 
                    onClick= {() => this.props.editScorefn(this.props.drill.id)}
                    >ADD SCORE</button>
                    <input type='text'
                     onChange= {(e)=> handleInputfn(e.target)} name= 'inputScore' value= {inputScore}
                     ></input>
                    
                 
                    <button onClick={() => this.props.removeDrillfn(this.props.drill.id)}>Delete</button>
                </div>
                 



                    <div className= 'drill-box'>
                        <div>DRILL=
                            { this.props.drill.name}
                        </div>
                        <div> SCORE/SECONDS=
                          {this.props.drill.score} 
                        </div>
                        <div>DESCRIPTION=
                          {this.props.drill.description}
                        </div>
                    </div>



                    
        </div>

            



            
        )
    }
}

export default Drill;