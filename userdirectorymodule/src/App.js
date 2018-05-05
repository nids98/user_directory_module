import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import './App.css';
import Header from './components/header';

export async function addusers() {
    return fetch('http://localhost:3000')
    .then(resp => { 
        return resp.json();
    })
}
// componentDidMount()
// {
// 	fetch('http://localhost:3000').then(response => response.json()).then(console.log);
// }
class App extends Component {

  // componentWillMount(){
  //   this.props.userList();
  // }

  // renderList = (users)=>{
  //   if(user){
  //   return users.map((user)=>{
  //       return(
  //           <div>{user.username}</div>
  //         )
  //   })
  // }
  // }
// {this.renderList(this.props.users)}
  render() {
    return (
      <div>
        <Header/>
          
      </div>
    )
  }
}
/*
// function mapStateToProps(state){
//   return{
//     users: state.users
//   }
// }

export default connect(mapStateToProps, actions )(App);*/
export default App;
