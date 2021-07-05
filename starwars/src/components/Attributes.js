import React from 'react';
import styled from 'styled-components';

const AttrDiv = styled.div`
    font-size: 1.25rem;
    background-color: lightgrey;
    opacity: .75;
    width: 20%;
    margin: 1rem;
`;

function Attributes (props) {
    return (
    <>    
        <AttrDiv key={props.index}>
            <p>
                Name: {props.name}
            </p>
            <p>
                Height: {props.height} 
            </p>
            <p>
                Mass: {props.mass}
            </p>
            <p>
                Gender: {props.gender}
            </p>
        </AttrDiv>
    </>
    )
}

export default Attributes;