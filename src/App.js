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

import Drawer from '@material-ui/core/Drawer';

import EditHeaderDetails from './components/Editor/EditHeaderDetails';
import { TextBlock } from './constantValues/constants';
const ref = React.createRef();

class App extends React.Component {

  state={
    right:false
  }
  toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ right: open});
  };

  changeColorFun =(color)=>{
    this.props.dispatch({
      type: 'CHANGE_COLOR',
      payload: color
    })
  }
  render(){
    return (
      <ThemeProvider theme={this.props.themeReducer}>
          <center>Create your Resume for Free
            <br/>
          <Button color="secondary" variant="outlined" onClick={this.toggleDrawer("left", true)}>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            <TextBlock padding="0 0 0 10px">
              Click here to Edit the Resume
            </TextBlock>
            </Button>
          </center>
          <Drawer anchor="left" open={this.state.right} onClose={this.toggleDrawer("left", false)}>
            <EditHeaderDetails />
          </Drawer>
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
            {/* <Button variant='contained' color="secondary" onClick={()=>this.changeColorFun("yellow")}>Yellow</Button>
            <Button variant='contained' color="secondary" onClick={()=>this.changeColorFun("Green")}>Green</Button>
            <Button variant='contained' color="secondary" onClick={()=>this.changeColorFun("Orange")}>Orange</Button>
            <Button variant='contained' color="secondary" onClick={()=>this.changeColorFun("Pink")}>Pink</Button> */}

      </ThemeProvider>
    );
  }
}

const mapStateToProps= state =>{
  const {themeReducer} = state
  return state
}
export default connect(mapStateToProps)(App);
