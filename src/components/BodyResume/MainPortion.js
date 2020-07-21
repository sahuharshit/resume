import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Skills from './Skills'
import Language from './Language'
import Hobbies from './Hobbies'
import PersonalDetails1 from '../PersonalDetails/PersonalDetails1'
import PersonalInformation from './PersonalInformation'
import Education from './RightBody/Education'
import Experience from './RightBody/Experience'
export default class MainPortion extends Component {
    render() {
        return (
            <>
               <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Skills />
                        <br/>
                        <Language />
                        <br/>
                        <PersonalInformation />
                        <br/>
                        <Hobbies />
                    </Grid>
                    <Grid item xs={7}>
                        <Education />
                        <br/>
                        <Experience />
                    </Grid>
                    

                </Grid> 
            </>
        )
    }
}
