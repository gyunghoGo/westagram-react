import React from 'react';
import './Login.scss';
import Logo from '../../images/logo_text.png';

class Login extends React.Component{
    render(){
           return( 
           <div className = "Login">
                <div className = "logo_img"><img alt ="Logo_img" src = {Logo}/></div>
                <div className = "input_wrap">
                    <input type="text" className= "textId" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                    <input type="password" className="password" placeholder="비밀번호"/>
                </div>
                <button>로그인</button>
                <div className = "addText">비밀번호를 잊으셨나요?</div>
            </div>
        );
    }
}
export default Login;