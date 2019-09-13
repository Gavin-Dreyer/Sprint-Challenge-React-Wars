import React from 'react';
import styled from 'styled-components';

const AttrDiv = styled.div`
    font-size: 1.5rem;
`;

function Attributes (props) {
    return (
        <AttrDiv key={props.index}>
            Height: {props.height} 
            Mass: {props.mass}
            Gender: {props.gender}
        </AttrDiv>
    )
}

export default Attributes;