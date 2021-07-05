import React from 'react';
import styled from 'styled-components';

const SpeciesDiv = styled.div`
    font-size: 1.25rem;
    background-color: lightgrey;
    opacity: .75;
    width: 20%;
    margin: 1rem;
`;

// const ButtonStyle = styled.button`
//     font-size: 2rem;
// `;

function Species (props) {
    return (
    <>    
        <SpeciesDiv >
            <p>
                Name: {props.name}
            </p>
            <p>
                Language: {props.language}
            </p>
            <p>
                Designation: {props.designation}
            </p>
            
        </SpeciesDiv>
    </>
    )
}

export default Species;