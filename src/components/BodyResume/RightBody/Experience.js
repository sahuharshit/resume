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

const ExperienceDetails = [
    {id:1, duration:'2016 - 2018', nameOfInstitution: 'LoFoods India Pvt Ltd.', someAchievements: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'},
    {id:2, duration:'2018 - 2020', nameOfInstitution: 'Brainpower Solutions', someAchievements: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'},
    {id:3, duration:'2019 - 2020', nameOfInstitution: 'Oracle Financial Services', someAchievements: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'},
]

export default function Experience() {
    return (
        <>
            <i class="fa fa-desktop fa-2x" aria-hidden="true"></i>
            <TextBlock fontSize="30px" fontWeight="800" padding="0 0 0 1.2rem">
               Experience
            </TextBlock>
            <hr/>
            {ExperienceDetails.map((data,index)=>{
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
