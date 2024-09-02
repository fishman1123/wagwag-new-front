import React from "react";
import styled from "styled-components";

const ContributeBar = ({ contribution }) => {
  return (
    <Wrapper>
      <Bar>
        <FilledBar contribution={contribution}></FilledBar>
      </Bar>
      <Indicator contribution={contribution}></Indicator>
      <ChasingBox contribution={contribution}>상위&nbsp;<span style={{color: "#57f98e"}}>{contribution+`%`}</span></ChasingBox>
    </Wrapper>
  );
};

export default ContributeBar;


// style component

const Wrapper = styled.div`
  margin-bottom: 3.7vw;
`;

const Bar = styled.div`
  width: 100%;
  height: 0.4vw;
  background-color: #2b2b2b;
  border-radius: 1vw;
  position: relative;
`;

const FilledBar = styled.div`
  width: ${(props) => props.contribution}%;
  height: 100%;
  background-color: #57f98e;
  border-radius: 1vw;
  position: absolute;
  top: 0;
  left: 0;
`;

const Indicator = styled.div`
    height: 1.8vw;
    border-left: 1px dotted #9e9e9e;
    margin-left: ${(props) => props.contribution}%;
    margin-bottom: 1px;
    margin-top: 1px;
`;

const ChasingBox = styled.div`
    width: 9.8vw;
    height: 3.6vw;
    border: #787878 1px solid;
    border-radius: 1vw;
    color: white;
    font-size: 1.25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: calc(${(props) => props.contribution}% - 4.9vw);
`;

