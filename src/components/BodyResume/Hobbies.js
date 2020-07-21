import React from 'react'
import { TextBlock } from '../../constantValues/constants'
import {LinearProgress, Grid} from '@material-ui/core';
import styled from 'styled-components';


const HobbyData = [
    {id:1, HobbyName:'Cricket'},
    {id:2, HobbyName:'Badminton'},
    {id:3, HobbyName:'Reading'},
    {id:4, HobbyName:'Party'},
    {id:5, HobbyName:'Reading'},

]

export default function Hobbies() {
    return (
        <>
            <i class="fa fa-language fa-2x" aria-hidden="true"></i>
            <TextBlock fontSize="30px" fontWeight="800" padding="0 0 0 1.2rem">
               Hobbies
            </TextBlock>
            <hr/>
             {HobbyData.map((data,index)=>{
                 return (
                      <TextBlock fontSize="16px" padding="0 20px 0 0">
                        {data.HobbyName}
                      </TextBlock>
                 )
             })}
        </>
    )
}

const ProgressBarStyled = styled(LinearProgress)`
    background-color: '#1a90ff';
    height: 10px;
    margin: 10px;
    width: 10rem;
   
`
