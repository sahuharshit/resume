import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import styled from 'styled-components'
import { connect } from 'react-redux';
class LayoutContainer extends React.Component {
    render(){        
        return (
            <>
            <CssBaseline />
            <ThemedContainer maxWidth="md">
                    {this.props.children}
            </ThemedContainer>
            </>
        )
}
}

const ThemedContainer = styled(Container)`
    background: ${props=>props.theme.BACKGROUND_COLOR.color};
`

const mapStateToProps = state=>{
    const {themeReducer} = state
    return themeReducer
}

export default connect(mapStateToProps)(LayoutContainer);