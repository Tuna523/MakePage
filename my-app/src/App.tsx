import React, { Component } from 'react';
// import './App.css';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Router from './Routes/Router';

function App() {
  return (
    <Layout>
      <Header />
      <Navigation />
      <Content>
        <Router />
      </Content>
    </Layout>
  );
}

const Layout = styled.div`
margin: 0 auto;
display: flex;
width: 100%;
flex-flow: row wrap;
`
const Content = styled.div`

`

export default App;