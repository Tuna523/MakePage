import React, { Component, useState } from 'react';
// import './App.css';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Router from './Routes/Router';

function App() {

  const [logged, setLogged] = useState(false);
  const [onLogin, setonLogin] = useState(Boolean);
  const [onLogout, setonLogout] = useState(Boolean);
  // console.log(onLogout);
  // console.log(onLogin);

  const onLoginFunc = () => {
    setLogged(true);
  }
  const onLogoutFunc = () => {
    setLogged(false);
  }

  return (
    <Layout>
      <Header logged={logged} onLogout={onLogout} />
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