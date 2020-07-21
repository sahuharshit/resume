import React from 'react'
import { TextBlock } from '../../../constantValues/constants'
import {LinearProgress, Grid} from '@material-ui/core';
import styled from 'styled-components';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const EducationDetails = [
    {id:1, duration:'2014 - 2016', nameOfInstitution: 'Cambridge School', someAchievements: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'},
    {id:2, duration:'2018 - 2020', nameOfInstitution: 'Engineering College Name', someAchievements: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'},
]

export default function Education() {
    return (
        <>
            <i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>
            <TextBlock fontSize="30px" fontWeight="800" padding="0 0 0 1.2rem">
               Education
            </TextBlock>
            <hr/>
            {EducationDetails.map((data,index)=>{
                return(
                    <span>
              <TimelineStyled style={{display:'flex', flex:'0'}}>
                <TimelineItem style={{}}>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{width:'100%'}}>
                        <TextBlock fontSize="16px" fontWeight="600">
                            {data.duration}
                        </TextBlock>
                        <br/>
                        <TextBlock fontSize="20px" fontWeight="600">
                            {data.nameOfInstitution}
                        </TextBlock>
                        <br/>
                        <TextBlock>
                            {data.someAchievements}
                        </TextBlock>
                    </TimelineContent>
                </TimelineItem>
            </TimelineStyled>           
                    </span>
                )
            }
            )}
        </>
    )
}

const TimelineStyled = styled(Timeline)`
  .MuiTimelineItem-missingOppositeContent:before {
    flex: 0;
    content: "";
    padding: 0;
}
`
