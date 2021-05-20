import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Section = ({title,description,leftBtnTxt,rightBtnTxt,bgImg}) => {
    return (
        <Wrap bgImage={bgImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnTxt}
                        </LeftButton>
                        {rightBtnTxt && <RightButton> {rightBtnTxt}</RightButton>}
                    </ButtonGroup>
                </Fade>
                <DownArrow src="images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: url(/images/model-s.jpg);
    background-image: ${props=>`url(/images/${props.bgImage})`}
`
const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    font-weight:bold;
    font-size:20px;
    p{
        font-weight:normal;
        font-size:14px;
    }
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    font-size:12px;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    cursor:pointer;
    margin:8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color:black;
    opacity:0.65;

`
const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``