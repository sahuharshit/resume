import React from 'react'
import { Grid } from '@material-ui/core'
import {connect} from 'react-redux'
import { TextBlock } from '../../constantValues/constants'
 function PersonalDetails1(props) {
    return (
        <>          
          <Grid container spacing={2}>
          <Grid item lg={4}>
                    <Grid align="center">
                     <i class="fa fa-phone" aria-hidden="true"></i> 
                     <TextBlock padding="0 0 0 10px">
                        {props.phoneNumber}
                     </TextBlock>
                    </Grid>
                </Grid>
                <Grid item lg={4}>
                    <Grid align="center">
                     <i class="fa fa-envelope" aria-hidden="true"></i> 
                     <TextBlock padding="0 0 0 10px">
                        {props.emailAddress}
                     </TextBlock>
                    </Grid>
                </Grid>
                <Grid item lg={4}>
                    <Grid align="center">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <TextBlock padding="0 0 0 10px">
                         {props.address}
                    </TextBlock>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

const mapStateToProps = state =>{
    const {contentReducer} = state
    return contentReducer
}
export default connect(mapStateToProps)(PersonalDetails1);