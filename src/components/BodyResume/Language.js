import React from 'react'
import { TextBlock } from '../../constantValues/constants'
import {LinearProgress, Grid} from '@material-ui/core';
import styled from 'styled-components';


const LanguageData = [
    {id:1, LanguageName:'English', languageProficiency: '55'},
    {id:2, LanguageName:'German', languageProficiency: '15'},
    {id:3, LanguageName:'French', languageProficiency: '85'},
]

export default function Language() {
    return (
        <>
            <i class="fa fa-language fa-2x" aria-hidden="true"></i>
            <TextBlock fontSize="30px" fontWeight="800" padding="0 0 0 1.2rem">
               Language
            </TextBlock>
            <hr/>
             {LanguageData.map((data,index)=>{
                 return (
                    <table>
                         <tr>
                             <td style={{width: '8rem'}}>
                             <TextBlock fontSize="16px" padding="0 20px 0 0">
                                {data.LanguageName}
                            </TextBlock>
                             </td>
                             <td>
                                 <ProgressBarStyled variant="determinate" value={data.languageProficiency}/>
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
