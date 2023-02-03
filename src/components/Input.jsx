import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    overflow-x: hidden;
    resize: horizontal;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 3rem;
    width: 25%;
    box-sizing: border-box;
    padding: 0.5em;
    margin: 1em;
    @media (max-width: 1024px) {
        width: 50%;
    }
    /* white-space: nowrap; */
    /* font-size: calc(10px + 2vmin); */
`
const Input = ({ type, placeholder, setTopic }) => {
    return (
        <StyledInput
            type={type}
            name={type}
            placeholder={placeholder}
            onChange={(e) => {
                e.preventDefault()
                setTopic(e.target.value)
            }}
        />
    )
}

export default Input
