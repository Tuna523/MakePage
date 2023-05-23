import React, { Component, useState } from 'react';
// import './App.css';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Router from './Routes/Router';
import Store from './Store/store';

function App() {

  const [logged, setLogged] = useState(false);
  const [onLogin, setonLogin] = useState(Boolean);
  const [onLogout, setonLogout] = useState(Boolean);
  let states = [logged, onLogin, onLogout];
  // console.log(onLogout);
  // console.log(onLogin);

  const onLoginFunc = () => {
    setLogged(true);
  }
  const onLogoutFunc = () => {
    setLogged(false);
  }

  return (
    <Store.Provider value={states}>
      <Layout>
        <Header logged={logged} onLogout={onLogout} />
        <Navigation />
        <Content>
          <Router setonLogin={setonLogin}/>
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