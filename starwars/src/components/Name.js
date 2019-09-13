import React from 'react';
import styled from 'styled-components';

const NameDiv = styled.div`
    font-size: 2rem;
`;

function Name (props) {
    return (
        <NameDiv key={props.index}>{props.name}</NameDiv>
    )
}

export default Name;