import React, { Component } from "react";
import styled from 'styled-components';

function Header(props:any) {
    return(
        <Container>
            <Element>
                <Shortcut>로그인 / 회원가입 </Shortcut>
                <Logo>
                    <img
                    width="100%"
                    height="100%"
                    src="https://library.gabia.com/wp-content/uploads/2016/03/blog-793047_640-1.jpg"
                    alt="logo"/>
                </Logo>
                <Search><h1>Blog with React</h1></Search>
            </Element>
        </Container>
    );
}

export default Header;

const Container = styled.div`
width: 100%;
border-bottom: 1px solid #888888`

const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const Shortcut = styled.div`
    order: 1;
    width: 100%;
    height: 20px;
    text-align: right;
    background-color: #a8ff78;
`

const Logo = styled.div`
    order: 2;
    width: 200px;
    height: 80px;
`

const Search = styled.div`
    order: 3;
    width: 880px;
    height: 80px;
    // background-color: #78ffd6;
    text-align: center;
    background-color: #ffaaaa;
    animation: backShine 3.5s ease-in-out infinite;

    @keyframes backShine {
        10% {backgruond-color: #fff5f5;}
        25% {backgruond-color: #fff0f0;}
        40% {backgruond-color: #ffe8e8;}
        55% {backgruond-color: #ffe0e0;}
        70% {background-color: #ffd9d9;}
        85% {background-color: #ffcccc;}
    }
`