import React from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #fff;
        font-size: 1.3rem;
    }
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 24px;
    height: 24px;
    border-radius: 50%;
`
const LoadingSpinner = () => {
    return (
        <Wrapper>
            <Spinner></Spinner>
            <p>Fetching your question from the AI overlord</p>
        </Wrapper>
    )
}

export default LoadingSpinner
