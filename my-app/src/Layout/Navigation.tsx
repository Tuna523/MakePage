import React, {Component, useState} from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'
// let menuBool = false;

function Navigation(props:any) {
    const [menuBool, setMenuBool] = useState<any>(false);
    return (
        <Nav>
            <NavList>
            <button style={{display: 'flex', backgroundColor: 'transparent', border: 'none', margin: '2px'}} onClick={(e)=>{e.preventDefault(); setMenuBool(!menuBool); console.log(menuBool);}}>
                <img
                width='24px'
                height='24px'
                src="https://www.nicepng.com/png/detail/14-147111_menu-button-png-menu-button-icon-png.png"></img>
            </button>
            { menuBool ?
            <>
                <NavItem><a href="About">소개</a></NavItem>
                <NavItem><a href="Board">게시판</a></NavItem>
                <NavItem><a href="MyBoard">내 글 보기</a></NavItem>
                <NavItem><a href="MyPage">마이페이지</a></NavItem>
                {/* <NavItem><Link to='/About'> 소개 </Link></NavItem>
                <NavItem><Link to='/Board'> 게시판 </Link></NavItem>
                <NavItem><Link to='/MyBoard'> 내 글 보기 </Link></NavItem>
                <NavItem><Link to='/MyPage'> 마이페이지 </Link></NavItem> */}
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