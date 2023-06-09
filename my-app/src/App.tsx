import React, { Component, useState } from 'react';
// import './App.css';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Router from './Routes/Router';
import Store from './Store/store';

function App() {
  const [logged, setLogged] = useState(false);
  
  // const [onLogin, setonLogin] = useState(Boolean);
  // const [onLogout, setonLogout] = useState(Boolean);

  // console.log(window.location.href);

  // console.log(onLogout);
  // console.log(onLogin);

  const onLoginFunc = () => {
    setLogged(true);
  }
  const onLogoutFunc = () => {
    setLogged(false);
  }

  return (
    <Store.Provider value={logged}>
      <Layout>
        <Header logged={logged} onLogoutFunc={onLogoutFunc} onLoginFunc={onLoginFunc} />
        <Navigation />
        <Content>
          <Router onLoginFunc={onLoginFunc}/>
        </Content>
      </Layout>
    </Store.Provider>
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