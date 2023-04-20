import React, {Component, useState} from "react";
import styled from 'styled-components';
// let menuBool = false;

function Navigation(props:any) {
    const [menuBool, setMenuBool] = useState<any>(false);
    return (
        <Nav>
            <NavList>
            <button style={{display: 'flex'}} onClick={(e)=>{e.preventDefault(); setMenuBool(!menuBool); console.log(menuBool);}}>
                <img
                width='24px'
                height='24px'
                src="https://www.nicepng.com/png/detail/14-147111_menu-button-png-menu-button-icon-png.png"></img>
            </button>
            { menuBool ?
            <>
                <NavItem>NavItem1</NavItem>
                <NavItem>NavItem2</NavItem>
                <NavItem>NavItem3</NavItem>
                <NavItem>NavItem4</NavItem>
                <NavItem>NavItem5</NavItem>
                <NavItem>NavItem5</NavItem>
                <NavItem>NavItem5</NavItem>
                </>
                : <></>
            }
            </NavList>
        </Nav>
    );
}

export default Navigation;

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #888888;

`

const OpenButton = styled.button`
    display: flex;
`

const NavList = styled.div`
    width: 1080px;
    display: flex;
    margin: 0 auto;
        z-index: 1;
    if(menuBool == false){
        display: none;
    }
    // &:hover{
    //     display: none;
    //     background-color: black;
    // }
`

const NavItem = styled.div`
    width: 100%;
    margin-top: 5px;
    display: flex;
    margin-left: 15px;
`