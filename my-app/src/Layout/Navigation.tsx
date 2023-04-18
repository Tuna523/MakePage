import React, {Component} from "react";
import styled from 'styled-components';

function Navigation(props:any) {
    return (
        <Nav>
            <NavList>
                <NavItem>NavItem1</NavItem>
                <NavItem>NavItem2</NavItem>
                <NavItem>NavItem3</NavItem>
                <NavItem>NavItem4</NavItem>
                <NavItem>NavItem5</NavItem>
                <NavItem>NavItem5</NavItem>
                <NavItem>NavItem5</NavItem>
            </NavList>
        </Nav>
    );
}

export default Navigation;

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #888888;
    z-index: 1;
    
    // display: block;
    // &:hover{
    //     display: none;
    //     background-color: black;
    // }
`

const NavList = styled.div`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.div`
    width: 100%;
    margin-top: 5px;
    display: flex;
`