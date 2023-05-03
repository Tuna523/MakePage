// https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}
// GET /oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code HTTP/1.1
// Host: kauth.kakao.com

import React, {Component, useState} from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import { REST_API_KEY, REDIRECT_URI } from './KakaoLoginData';
function Login() {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [provider, setProvider] = useState('');

    function responseKakao(res: any) {
        setId(res.profile.id);
        setName(res.profile.properties.nickname);
        setProvider('kakao');
    }

    function responseFail() {
        console.error('error');
        alert('error');
    }

    return(
        <Container>
                <KakaoButton key={'7db384553e7e35924040937ef84910d4'} token='' onSuccess={responseKakao} onFail={responseFail}/>
        </Container>
    )
}

const Container = styled.div`
margin-left: 42.5vw;
`

const KakaoButton = styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`
export default Login;