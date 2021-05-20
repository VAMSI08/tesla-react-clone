import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import {selectCars} from '../features/car/carSlice'

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="title logo" />
            </a>
            <Menu>
               {cars.map((el,index) =><a key={index} href="#">{el}</a>)} 
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=> setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrap>
                    <CustomClose onClick={()=> setBurgerStatus(false)} />
                </CloseWrap>
                <li><a href="#">existing inventory</a></li>
                <li><a href="#">used inventory</a></li>
                <li><a href="#">trade-in</a></li>
                <li><a href="#">cybertruck</a></li>
                <li><a href="#">roadster</a></li>
                <li><a href="#">semi</a></li>
                <li><a href="#">charging</a></li>
                <li><a href="#">powerwall</a></li>
                <li><a href="#">commercial energy</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:15px;
    padding:0 20px;
    top:0;
    right:0;
    left:0;
    z-index:1;
`;
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width:768px) {
        display:none;
    }
`;
const RightMenu = styled.div`
    display:flex;
    align-items:center;

    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:10px;
    }
`;
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;
const BurgerNav = styled.div`
    position:fixed;
    width:300px;
    top:0;
    bottom:0;
    right:0;
    background: rgb(255,255,255);
    z-index:10;
    list-style: none;   
    padding:20px;
    display:flex;
    text-align:start;
    flex-direction:column; 
    text-transform:uppercase; 
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.1s ease-in-out;
    li{
        padding:15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        a {
            font-weight:600;
        }
    }
`;
const CloseWrap = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-bottom:15px;
`;
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;