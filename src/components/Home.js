import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section 
                title = "Model S"
                description = "Order Online for Touchless Delivery"
                leftBtnTxt = "custom Order"
                rightBtnTxt = "existing inventory"
                bgImg ="model-s.jpg"
            />
            <Section 
                title = "Model Y"
                description = "Order Online for Touchless Delivery"
                leftBtnTxt = "custom Order"
                rightBtnTxt = "existing inventory"
                bgImg ="model-y.jpg"
            />
            <Section
                title = "Model 3"
                description = "Order Online for Touchless Delivery"
                leftBtnTxt = "custom Order"
                rightBtnTxt = "existing inventory"
                bgImg ="model-3.jpg"
            />
            <Section 
                 title = "Model X"
                 description = "Order Online for Touchless Delivery"
                 leftBtnTxt = "custom Order"
                 rightBtnTxt = "existing inventory"
                 bgImg ="model-x.jpg"
            />
            <Section 
                 title = "Lowest Cost Solar Panels in America"
                 description = "Money-back guarantee"
                 leftBtnTxt = "Order Now"
                 rightBtnTxt = "Learn more"
                 bgImg ="solar-panel.jpg"
            />
            <Section 
                 title = "Solar for New Roofs"
                 description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                 leftBtnTxt = "Order Now"
                 rightBtnTxt = "Learn more"
                 bgImg ="solar-roof.jpg"
            />
            <Section 
                 title = "Accessories"
                 description = ""
                 leftBtnTxt = "Shop Now"
                 rightBtnTxt = ""
                 bgImg ="accessories.jpg"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`