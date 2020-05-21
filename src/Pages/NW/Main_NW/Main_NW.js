import React from 'react';
import Logo from '../../../Images/Images_NW/logo_text.png';
import profile from '../../../Images/Images_NW/profile.png';
import './Main_NW.scss';

export class Main extends React.Component {
    render() {
        return (
<>         
<div className="upside">
    <div className="upside_left">
        <span>
          <img className="camera" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"/>
        </span>
        <span>
          <img className="logo" src={Logo}/>
        </span>
    </div>
    <div className="upside_center">
        <input type="text" class="search" placeholder="검색"/>
    </div>
    <div className="upside_right">
        <img className="explore" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
        <img className="heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
        <img className="mypage" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
    </div>
</div>

<div className="main">
    <div className="leftside_total">
            <div className="leftside_0">
            </div>
        <div className="leftside">
            <div className="leftside_1">
              <div>
                 <img className="profile" src={profile}/>
              </div>
              <div>
                 <img className="dot3" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"/>
              </div>
            </div>  
            <div className="leftside_2">
                 <img className="maserati" src="https://www.maseratiusa.com/content/dam/maserati/international/Models/MY19/GranTurismo-MY18-19/169-1920/Maserati-MY18-MY19-GranTurismo-170950M.jpg/jcr:content/renditions/cq5dam.web.1400.10000.jpeg"/>
            </div>  
            <div className="leftside_3">
              <div className="hwsb">
                 <img className="heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                 <img className="word" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
                 <img className="share" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/>
              </div>
              <div>
                 <img className="bookmark" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/>
              </div>
            </div>  
            <div className="leftside_4">
               &nbsp; haerim님 외 10명이 좋아합니다
            </div>  
     {/* 여기서부터 댓글 기능 */}
        <section class="commentsBox">
            <div class="commentsContainer">
               <a href="" class="commentID">Kenneth_Kim</a>
               <span class="comment">난 산책하는게 좋아</span>
            </div>
            <div class="commentsContainer">
                <a href="" class="commentId">Dokyun_Kim</a>
                <span class="comment">나돟ㅎ</span>          
            </div>  
        </section>
        <section class="timeBox">
            <time class="time">11시간 전</time>
        </section>
        <section class="writingComment">
            <div class="writingBoxAndButton">
                <textarea
                    name="댓글달기"
                    class="writingBox"
                    cols="40" 
                    rows="5"  
                    placeholder="댓글 달기..."
                ></textarea>
                <button class="writingBoxButton" type="text">게시</button>
            </div> {/* 1행에 가로로 40자 */}{/* 열이 5열 */}
        </section>
        </div> {/* leftside의 닫음 div */}
    </div> 
    
    {/* 여기서부터 오른쪽 */}
    <div className="rightside_Total">
            <div className="rightside_0">
            </div>
        <div className="rightside">
        


        </div>
    </div>
    
</div>
</>



        )
    }
}

export default Main;