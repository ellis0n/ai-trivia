import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'

const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    margin: 0.5em;
    font-weight: 800;
    background-color: #433c38;
    border-radius: 8px;
`

const ChoiceWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 8px;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    flex-wrap: wrap;
    margin: 0.5em;
`
const ScoreWrapper = styled.div`
    justify-content: center;
    color: #fffffff4;
    background-color: #433c38;
    border: 2px solid #ededf482;
    border-radius: 8px;
    margin: 0 4em;
`

const Question = ({ question, scoreHandler, score }) => {
    const [answer, setAnswer] = useState(null)
    const [order, setOrder] = useState([])


    let data = JSON.parse(question)

    const array = [data.a, data.w1, data.w2, data.w3]

    useEffect(() => {
        const shuffle = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                ;[array[i], array[j]] = [array[j], array[i]]
            }
            return array
        }
        setOrder(shuffle(array))
    }, [])

    const checkAnswer = (e) => {
        setAnswer(e.target.innerText)
        if (e.target.innerText === data.a) {
            scoreHandler(true)
        } else {
            scoreHandler(false)
        }
    }

    return (
        <>
            <ScoreWrapper>
                <h1>Score:</h1>
                <p>correct: {score[0].correct}</p>
                <p>incorrect: {score[0].incorrect}</p>
            </ScoreWrapper>
            <QuestionWrapper>
                <h1>{data.q}</h1>
            </QuestionWrapper>
            <ChoiceWrapper>
                {order.map((choice, i) => (
                    <Button
                        key={i}
                        text={choice}
                        handleClick={checkAnswer}
                        theme={
                            answer && choice === data.a
                                ? 'correct-btn'
                                : answer && choice !== data.a
                                ? 'wrong-btn'
                                : 'answer-btn'
                        }
                    />
                ))}
            </ChoiceWrapper>
        </>
    )
}

export default Question
