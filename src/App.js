import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header1 from './components/HeadersofResume/Header1';
import LayoutContainer from './constantValues/container';
import PersonalDetails1 from './components/PersonalDetails/PersonalDetails1';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import MainPortion from './components/BodyResume/MainPortion';

class App extends React.Component {

  changeColorFun =(color)=>{
    this.props.dispatch({
      type: 'CHANGE_COLOR',
      payload: color
    })
  }
  render(){
    return (
      <ThemeProvider theme={this.props}>
          <center>Create your Resume for Free</center>
          <br/>
          <br/>
          <LayoutContainer>
            <Header1 />
            <hr/>
            <PersonalDetails1 />
            <MainPortion />
          </LayoutContainer>
          <br/>
          <br/>
          <br/>
            <Button variant='contained' color="secondary" onClick={()=>this.changeColorFun("yellow")}>Yellow</Button>
            <Button variant='contained' color="secondary" onClick={()=>this.changeColorFun("Green")}>Green</Button>
            <Button variant='contained' color="secondary" onClick={()=>this.changeColorFun("Orange")}>Orange</Button>
            <Button variant='contained' color="secondary" onClick={()=>this.changeColorFun("Pink")}>Pink</Button>

      </ThemeProvider>
    );
  }
}

const mapStateToProps= state =>{
  const {themeReducer} = state
  return themeReducer
}
export default connect(mapStateToProps)(App);
