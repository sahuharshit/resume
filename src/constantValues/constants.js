import styled from 'styled-components'
import React from 'react';
import {Grid} from '@material-ui/core';

export const Background = styled.div`
    background-color: ${props=>props.theme.persianGreen};
`
export const TextBlock = styled.span`
    font-size : ${props=>props.fontSize};
    font-weight: ${props=>props.fontWeight};
    font-family: ${props=>props.fontFamily};
    background: ${props=>props.background};
    display: ${props=>props.breakLine};
    text-align: ${props=>props.center};
    color: ${props=>props.color};
    padding: ${props=> props.padding};
    margin: ${ props=> props.margin};
    margin: ${props=>props.margin};
    line-height:  ${ props=> props.lineHeight}; 
`
export const ImageBlock = styled.img`
    height: ${props=>props.height};
    width:  ${props=>props.width};
    max-width:  ${props=>props.maxWidth};
`

export const GridContainer = styled(Grid)`
    border: ${props=> props.border};
    padding: ${props=>props.padding};
    margin: ${props=>props.margin};   
`