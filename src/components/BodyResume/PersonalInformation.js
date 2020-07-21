import React from 'react'
import { TextBlock } from '../../constantValues/constants'
import {LinearProgress, Grid} from '@material-ui/core';
import styled from 'styled-components';


const PersonalDetails = [
    {id:1, sociaLinks:'LinkedIn', code: '<i class="fa fa-linkedin"></i>', link: 'https://linkedin.com'},
    {id:2, sociaLinks:'Facebook', code: '<i class="fa fa-facebook-f"></i>', link:'https://facebook.com'},
    {id:3, sociaLinks:'Instagram', code: '<i class="fa fa-instagram"></i>', link:'https://instagram.com'},
    {id:4, sociaLinks:'YouTube', code: '<i class="fa fa-youtube"></i>', link:'https://instagram.com'},
]

export default function PersonalInformation() {
    return (
        <>
            <i class="fa fa-cogs fa-2x" aria-hidden="true"></i> 
            <TextBlock fontSize="30px" fontWeight="800" padding="0 0 0 1.2rem">
               Social Links
            </TextBlock>
            <hr/>
             {PersonalDetails.map((data,index)=>{
                 let htmlData = {
                     __html : data.code
                 }
                 return (
                    <table>
                         <tr>
                             <td style={{width: '2rem'}}>
                                <span dangerouslySetInnerHTML={htmlData} />
                               
                              </td>
                             <td style={{width: '7rem'}}> 
                             <TextBlock fontSize="16px" padding="0 0 0 0" fontWeight="500">
                                {data.sociaLinks}
                              </TextBlock>
                             </td>
                             <td>
                             <TextBlock fontSize="16px" >
                                {data.link}
                              </TextBlock>
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
