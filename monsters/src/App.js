import React, { Component } from 'react';
import './App.css';
// import CardList from './components/cardlist/cardlist.component';
// import SearchBox from './components/searchbox/searchbox.component';
import LifeCycleComponent from './lifecyclys'



class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      life: 20,
      showchild: true,
      text: "HELLO"
    }
  }
  componentDidMount() { console.log("component DidMount") }
  UNSAFE_componentWillMount() { console.log("component WillMount") }
  componentDidUpdate() { console.log("component DidUpdate") }
  UNSAFE_componentWillUpdate() { console.log("component WillUpdate") }
  shouldComponentUpdate(nextState, nextProps) {
    console.log("should Component Update", nextState)
    return true
  }
componentWillUnmount(){
  console.log("component Will UnMount") 
}



  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json()
  //       .then(results => this.setState({ monsters: results })))
  // }
  // filterSearch = (e) => {
  //   this.setState({ searchField: e.target.value })
  // }
  // updateStates = () => {

  //   this.setState((prevState) => ({
  //     life: prevState.life + 5
  //   })
  //     , () => console.log(this.state.life))

  // }
  render() {
    console.log("RENDER")
    const { showchild, text } = this.state;
    //const filterSearch = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <button onClick={() => {
          this.setState(state => ({ showchild: !state.showchild }))
        }}>CLICK ME</button>
        {showchild ? <LifeCycleComponent text={text} /> : null}

        {/* <h1>{life}</h1>
        <button onClick={()=>{
          this.setState(state=>({showchild: !state.showchild}))
        }}>CLICK ME</button>
         <button onClick={()=>{
          this.setState(state=>({text: state.text+"_Hello"}))
        }}>Add text</button>
        <h1>{text}</h1>
        <h1>Monsters Rolodex</h1>
        {showchild?<SearchBox placeholder="Search" handleChange={this.filterSearch} /> :null}
        
        <CardList monsters={monsters}> </CardList> */}
      </div>)
  }
}

export default App;
