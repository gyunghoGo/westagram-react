import React from 'react';
import './Login.scss';
import Logo from '../../images/logo_text.png';


class Login extends React.Component{
    constructor() {
        super();
    this.state ={
        loginId : "",
        loginPw : "",
        btnColor : true
    }
}

    inputValueId = (event) => {
        this.setState({
            loginId:event.target.value
        })
    }

    inputValuePw = (event) => {
        this.setState({
            loginPw:event.target.value
        })
    }


    buttonColorChange = () => {
        if (this.state.loginId.includes('@') && this.state.loginPw.length >= 5 ){
            this.setState({btnColor : false});
        }else {
            this.setState({ btnColor : true});
        }
    }
       

    render(){

           return( 
           <div className = "Login">
                <div className = "logo_img"><img alt ="Logo_img" src = {Logo}/></div>
                <div className = "input_wrap">
                    <input onChange = {this.inputValueId} onKeyUp ={this.buttonColorChange} type="text" className= "textId" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                    <input onChange = {this.inputValuePw} onKeyUp ={this.buttonColorChange} type="password" className="password" placeholder="비밀번호"/>
                </div>
                <button className ={this.state.btnColor ? 'buttonColor' : 'buttonChangeColor'}>로그인</button>
                {/* <button className ={`buttonColor ${this.state.btnColor ? ' ' : 'buttonChangeColor'}`}>로그인</button> */}

                <div className = "addText">비밀번호를 잊으셨나요?</div>
            </div>
        )
    }
}
export default Login;