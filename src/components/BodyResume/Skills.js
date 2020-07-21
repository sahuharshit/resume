import React from 'react'
import { TextBlock } from '../../constantValues/constants'
import {LinearProgress, Grid} from '@material-ui/core';
import styled from 'styled-components';


const SkillData = [
    {id:1, skillName:'Photoshop', knowledge: '55'},
    {id:2, skillName:'NodeJS', knowledge: '15'},
    {id:3, skillName:'ReactJS', knowledge: '85'},
    {id:4, skillName:'Illustrator', knowledge: '77'},
    {id:5, skillName:'Corel Draw', knowledge: '90'},
    {id:6, skillName:'Photoshop', knowledge: '85'},
    
]

export default function Skills() {
    return (
        <>
            <i class="fa fa-cogs fa-2x" aria-hidden="true"></i> 
            <TextBlock fontSize="30px" fontWeight="800" padding="0 0 0 1.2rem">
               Skills
            </TextBlock>
            <hr/>
             {SkillData.map((data,index)=>{
                 return (
                    <table>
                         <tr>
                             <td style={{width: '8rem'}}>
                             <TextBlock fontSize="16px" padding="0 20px 0 0">
                                {data.skillName}
                            </TextBlock>
                             </td>
                             <td>
                                 <ProgressBarStyled variant="determinate" value={data.knowledge}/>
                             </td>
                         </tr>
                    </table>
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
