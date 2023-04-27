import React from 'react';
import styled from 'styled-components';
function About() {
    return(
        <Container>
        <h1>Let's Make Blog with React!!!</h1>
        <hr style={{width: '35%'}}></hr>
        <p>리액트로 블로그를 만들기 위한 험난한 여정.</p>
        </Container>
    )
}

const Container = styled.div`
display: block;
text-align: center;
width: 99vw;
margin: 0 auto;
`
export default About;