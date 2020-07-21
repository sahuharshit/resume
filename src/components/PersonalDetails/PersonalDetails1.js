import React from 'react'
import { Grid } from '@material-ui/core'

export default function PersonalDetails1() {
    return (
        <>          
          <Grid container spacing={2}>
          <Grid item lg={4}>
                    <Grid align="center">
                     <i class="fa fa-phone" aria-hidden="true"></i> +91 7977113822
                    </Grid>
                </Grid>
                <Grid item lg={4}>
                    <Grid align="center">
                     <i class="fa fa-envelope" aria-hidden="true"></i> example@example.com
                    </Grid>
                </Grid>
                <Grid item lg={4}>
                    <Grid align="center">
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Mumbai, India

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
