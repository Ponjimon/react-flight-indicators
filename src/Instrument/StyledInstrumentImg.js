import React, { PropTypes } from 'react';
import styled from 'styled-components';

export default function InstrumentImg({ children }) {
    const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  .svg {
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
`;
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

InstrumentImg.propTypes = {
    children: PropTypes.node.isRequired,
};
