import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextBlock } from '../../constantValues/constants'
import {TextField} from '@material-ui/core';

class EditHeaderDetails extends Component {
    state={
        nameOfResumeHolder: this.props.nameOfResumeHolder,
        aboutMeTitle :  this.props.aboutMeTitle,
        aboutMeSummary : this.props.aboutMeSummary,
        phoneNumber : this.props.phoneNumber,
        emailAddress : this.props.emailAddress,
        address: this.props.address
    }
    changeFieldsValue =(e, type)=>{
        const name = e.target.name
        console.log(e.target.value)
        this.props.dispatch({
            type,
            payload: e.target.value
        })
        this.setState({
            [name]: e.target.value
        })
       
    }
    render() {
        return (
            <>
                <center style={{padding: '30px'}}>
                    <TextBlock fontSize="20px" fontWeight="600" padding="10px 40px">
                        START EDITING 
                    </TextBlock>
                    <br/>
                    <br/>
                    <TextField 
                        id="standard-basic" 
                        label="Name of Resume Holder"
                        name= "nameOfResumeHolder"
                        defaultValue={this.state.nameOfResumeHolder}
                        onChange={(e)=>this.changeFieldsValue(e,'NAME_OF_RESUME_HOLDER')}
                    />
                    <TextField 
                        id="standard-basic" 
                        label="Profile Title"
                        name= "aboutMeTitle"
                        defaultValue={this.state.aboutMeTitle}
                        onChange={(e)=>this.changeFieldsValue(e,'ABOUT_ME_TITLE')}
                    />
                    <br/>
                    <br/>
                    <TextField 
                        id="standard-basic" 
                        label="About Summary"
                        name= "aboutMeSummary"
                        fullWidth
                        multiline
                        defaultValue={this.state.aboutMeSummary}
                        onChange={(e)=>this.changeFieldsValue(e,'ABOUT_ME_SUMMARY')}
                    />
                    <br/>
                    <br/>
                    <TextField 
                        id="standard-basic" 
                        label="Your Phone Number"
                        name= "phoneNumber"
                        defaultValue={this.state.phoneNumber}
                        onChange={(e)=>this.changeFieldsValue(e,'PHONE_NUMBER')}
                    />
                    <TextField 
                        id="standard-basic" 
                        label="Your Email Address"
                        name= "emailAddress"
                        defaultValue={this.state.emailAddress}
                        onChange={(e)=>this.changeFieldsValue(e,'EMAIL_ADDRESS')}
                    />
                    <br/>
                    <br/>
                    <TextField 
                        id="standard-basic" 
                        label="Your Home Address"
                        name= "address"
                        fullWidth
                        multiline
                        defaultValue={this.state.address}
                        onChange={(e)=>this.changeFieldsValue(e,'ADDRESS')}
                    />
                </center>
            </>
        )
    }
}

const mapStateToProps = state =>{
    const {contentReducer} = state
    return contentReducer
}
export default connect(mapStateToProps)(EditHeaderDetails)