import React from "react";
import styled from "styled-components";

const ContributeBar = () => {
    return (
        <>
            <Wrapper>
                <Bar></Bar>
            </Wrapper>
        </>
    );
}

export default ContributeBar;


// style component

const Wrapper = styled.div`
    margin-bottom: 3.7vw;
`;

const Bar = styled.div`
    width: 100%;
    height: 0.4vw;
    background-color: #2B2B2B;
`;


