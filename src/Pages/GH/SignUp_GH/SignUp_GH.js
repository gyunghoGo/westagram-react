import React from "react";
import "./SignUp_GH.scss";
import logo from "../../../Images/Images_GH/logo_text.png";

class SignUp_GH extends React.Component{
//     constructor() {
//         super();
//     this.state ={
//         SignUPNum : "",
//         SignUpName : "",
//         SignUpNick : "",
//         SignUpPw : "",
//         btnColor : true
//     }
// }

//     inputValueId = (event) => {
//         this.setState({
//             loginId:event.target.value
//         })
//     }

//     inputValuePw = (event) => {
//         this.setState({
//             loginPw:event.target.value
//         })
//     }


//     buttonColorChange = () => {
//         if (this.state.loginId.includes('@') && this.state.loginPw.length >= 5 ){
//             this.setState({btnColor : false});
//         }else {
//             this.setState({ btnColor : true});
//         }
//     }
       
    render(){
        return(
            <div className = "SignUp">
                <div className = "logo_img"><img alt ="Logo_img" src = {logo}/></div>
                <div className = 'text-type'>친구들의 사진과 동영상을 보려면 가입을 하세요.</div>
                <button className = "btn-facebook-login">Facebook으로 로그인</button>
                <div className = 'mid'>
                    <div className = 'mid-line-01'></div>
                    <div className ='or'><strong>또는</strong></div>
                    <div className = 'mid-line-02'></div>
                </div>
                <div className = "input_wrap">
                    <input type="text" className= "input-text-num" placeholder="휴대폰 번호 또는 이메일 주소"/>
                    <input type="text" className="input-text-name" placeholder="성명"/>
                    <input type="text" className="input-text-nick" placeholder="사용자 이름"/>
                    <input type="password" className="input-text-pw" placeholder="비밀번호"/>
                </div>
                <button className ='btn-signup'>가입</button>
                {/* <button className ={`buttonColor ${this.state.btnColor ? ' ' : 'buttonChangeColor'}`}>로그인</button> */}

                <div className = "addText">가입하면 instagram의 <strong>약관, 데이터 정책</strong> 및 <strong>쿠키 정책</strong>에 동의하게 됩니다. </div>
            </div>
        )
    }
}
export default SignUp_GH;