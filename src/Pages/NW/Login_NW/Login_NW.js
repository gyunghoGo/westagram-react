import React from 'react';
import Logo from '../../../Images/Images_NW/logo_text.png';
import { Link } from 'react-router-dom';
import './Login_NW.scss'

export class Login extends React.Component {

    goToMain() {
        this.props.history.push('/Main');
    }

    render(){
        return (
            <div className="outsideBox">
                <div>
                    <img className="logo" src={Logo} />    
                </div>
                <div className = "login_container">
                    <div>
                        <input type="password" id="password" placeholder="비밀번호, 사용자 이름 또는 이메일"/>
                    </div>
                    <div>
                        <input type="password" id="re-password" placeholder="비밀번호" />
                    </div>
                </div>
                <div>
                    <button className="login-btn" onClick={this.goToMain.bind(this)}>로그인</button>
                    
                </div>  
                <div className="forgetPW">
                    <p className="alert"></p>
                    <p className="forgetPW"> 비밀번호를 잊으셨나요?</p>
                </div>
            </div>
        )
    }
}


export default Login;