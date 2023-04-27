import React from 'react';
import styled from 'styled-components';
function Board() {
    return(
        <Container>
            <p>
                게시판
            </p>
        </Container>
    )
}

const Container = styled.div`
text-align:center;
width: 99vw;
margin: 0 auto;
`
export default Board;