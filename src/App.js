import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Profile from './Components/Profile'
import axios from 'axios'
import Newbutt from './Components/Newbutt'

class App extends Component{
  constructor(){
    super()
    this.state = {
      
      drillSave: [],
      arrayDis: [],
      inputScore: '',
      newName: '',
      newScore: '',
      newDescript: ''
      


    }

    
    this.removeDrill=this.removeDrill.bind(this)
    
    this.handleAdd=this.handleAdd.bind(this)

    this.editScore=this.editScore.bind(this)

    // this.handleName=this.handleName.bind(this)

    // this.handleScore=this.handleScore.bind(this)

    // this.handleDescription=this.handleDescriptio.bind(this)

    
    
    
  }

  




  componentDidMount(){
    axios.get('http://localhost:7218/api/drills').then(res => {
      this.setState({drillSave: res.data})
    });
  }

  editScore(id){
    let body= {score: this.state.inputScore}
    console.log(body)
    console.log(this.state.inputScore)
    axios.put(`http://localhost:7218/api/drills/${id}`, body).then(res => {
      this.setState({arrayDis: res.data})
    })
  }

  handleInput=({name, value}) => {
    console.log(value)
    this.setState({[name]: value
    })
  }

  handleName=({name, value}) => {
    this.setState({[name]: value
    })
  }
  
  handleScore=({score, value}) => {
    this.setState({[score]:value
    })
  }

  handleDescription=({description, value}) => {
    this.setState({[description]: value
    })
  }

 removeDrill(id){
   console.log(id)
   axios.delete(`http://localhost:7218/api/drills/${id}`).then(res => {
     this.setState({arrayDis: res.data})
   })
 }
 

handleAdd(index){
  axios.post(`http://localhost:7218/api/drills/`, this.state.drillSave[index]).then(res => {
    this.setState({arrayDis: res.data})
  })
  
}


handleNew=({name, score, description}) => {
  this.setState({ arrayDis : {
    name,
    score,
    description
  }
  })
}
  
  render(){

    console.log(this.state.arrayDis)

  return (
    <div>
      <header>
        <Header handleAdd= {this.handleAdd}/>
      </header>
      <div>
          <Newbutt
          handleNamefn= {this.handleName}
          handleScorefn= {this.handleScore}
          handleDescriptionfn= {this.handleDescription}
          handleNewfn= {this.handleNew}

          />

      </div>
      <div className= 'body'>
      
        <Profile 
        inputScore= {this.state.inputScore}
        handleInputfn= {this.handleInput}
        removeDrillfn= {this.removeDrill}
        display1= {this.state.arrayDis}
        editScorefn={this.editScore}
        />
      </div>
      <footer className= 'foot'>STAY FROSTY</footer>

    </div>
  );
  }
}

export default App;
