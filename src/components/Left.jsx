import React from 'react';
import styled from 'styled-components';


const ArrowDiv = styled.div`
  width: 24px;
  height: 24px;
  &:hover {
    transform: scale(1.2, 1.2);
    cursor: pointer;
  }
`;

const Left = ({leftClick}) => {
  return (
      <ArrowDiv onClick={leftClick}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path></svg> </ArrowDiv>
  );
}

export default Left;