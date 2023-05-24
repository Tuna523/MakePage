import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Home, About, Board, Login, MyBoard, MyPage } from './index';
import styled from 'styled-components';

const Router: React.FC<{onLoginFunc: () => void}> = ({onLoginFunc}) => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/About' element={<About/>} />
            <Route path='/Login' element={<Login onLoginFunc={onLoginFunc}/>} />
            <Route path='/Board' element={<Board/>} />
            <Route path='/MyBoard' element={<MyBoard/>} />
            <Route path='/Mypage' element={<MyPage/>} />
        </Routes>
    </BrowserRouter>
    )
};

export default Router;
