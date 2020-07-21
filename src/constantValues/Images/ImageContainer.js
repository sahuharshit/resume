import styled from 'styled-components';


export const ImageContainer = styled.img`
    height: ${props=>props.height};
    width : ${props=>props.width};
    border : ${props=>props.border};
    border-radius: ${props=> props.borderRadius};
`