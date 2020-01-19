import React, {Component} from 'react'


class Header extends Component{
    constructor(){
        super()
        this.state = {
           

        }
    }

    

    render(){
        const {display} = this.props;
        
        return(
            <div className= 'split-head'>
                <header className= 'head'>
                    <header className= 'title'>TRAINING TRACKER</header>
                </header>
                <header className= 'right-head'>
                   
                        <button onClick= {() => this.props.handleAdd(0)}>DRAW SHOT</button>
                        <button onClick= {()=> this.props.handleAdd(1)}>EL PREZ</button>
                        <button onClick= {()=> this.props.handleAdd(2)}>SHOT, RELOAD, SHOT</button>
                        <button onClick= {()=> this.props.handleAdd(3)}>BILL DRILL</button>
                    
                </header>
            </div>
        )
    }



}

export default Header