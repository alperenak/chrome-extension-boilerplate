import { useState } from 'react';

import styled from 'styled-components';

const StyledButton = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 99999;
  border-radius: 10px;
  background-color: red;
`;

export const ContentScript = () => {
  console.log('content script');
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setIsClicked(true)}>{isClicked ? 'Clicked!' : 'Click me !'}</StyledButton>
    </>
  );
};
