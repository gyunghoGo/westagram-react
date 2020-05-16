import React from './node_modules/react';
import './Main.scss';

class Main extends React.Component{
    render(){
        return(
            <div id="Main">
                <nav>
                        <div className="nav">
                            <div className="nav-left-logo">
                                <div className="nav-left-logo-left">
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"/>
                                </div>
                                <div className="nav-left-logo-right">
                                    <img src="img/logo_text.png"/>
                                 </div>
                            </div>
                            <div className="nav-mid"><input tpye="text" id= "nav-mid-s" placeholder="검색"/></div>
                            <div className="nav-right-logo">
                                <ul>
                                    <il><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/></il>
                                    <il><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/></il>
                                    <il><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/></il>
                                </ul>
                            </div>
                        </div>
                </nav>
                        <div className = "container">
                            <div className ="feeds">
                                <div className ="feeds-left">
                                        <div className="feeds-top">
                                                <div className ="feeds-top-left">              
                                                    <img src="img/jongsin01 복사본.png"/>
                                                    <div><strong>yoonjongshin</strong></div>
                                                </div>
                                                <div className="feeds-top-right-dots">
                                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"/>
                                                </div>
                                        </div>
                                        <div className="feeds-left-first-img">
                                            <img src="img/jongsin01.jpg"/>
                                        </div>
                                        <div className="feeds-left-bottom-icon">
                                                <div className ="feeds-left-bottom-L-icon">
                                                    <img src="img/heart.png" style="width:32px"/>
                                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
                                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/>
                                                </div>
                                                <div className="feeds-left-bottom-R-icon">
                                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/>
                                                </div>
                                        </div>
                                        <div className = "like-img">
                                                <div><img src = "img/goimg.jpg"/></div>
                                                <p><strong>__goguard</strong>님 <strong>외 3651명</strong>이 좋아합니다.</p>
                                        </div>
                                        <div className="text-container">
                                                <div><strong>yoonjongshin</strong>지난 2월.#1 #이방인프로젝트... 더 보기</div>
                                                <div style="color: #a8a8a8;">댓글 329개 모두 보기</div>
                                                <div><strong>kgg1025</strong>코로나19의 최전선에서 건강하길 바랍니다.</div>
                                                <div ><strong>js2020__</strong>벌써 5월이네요.. </div>
                                        </div>
                                        <div className = "bb">42분 전</div>
                                        <div className = "comment_button">
                                                <div className="comment_event">
                                                <input type="text" id = "comment_value"  placeholder="댓글 달기..."/>
                                                </div>  
                                                <button className = "comment_upload_button">게시</button>
                                        </div>
                                </div>

                                <div className = "feeds-right">
                                        <div className = "feeds-right-top">
                                                <img src="img/goimg.jpg"/>
                                                <div>
                                                    <p className="instaId"><strong>__goguard</strong></p>
                                                    <p className="instaName" style="margin-top:5px">경호</p>
                                                </div>
                                        </div>

                                        <div className = "feeds-right-mid"> 
                                                <div className="feeds-right-mid-topText">
                                                    <div className="story">스토리</div>
                                                    <div className="all">모두 보기</div>
                                                </div>
                                                <div className = "feeds-right-mid-imgs">
                                                <div className="feeds-right-mid-first-img">
                                                    <img src="img/bears.jpg"/>
                                                    <div className="first-img-text">
                                                        <p className="doosanbears"><strong>doosanbears.1982</strong></p>
                                                        <p className="first-time">10분 전</p>
                                                    </div>
                                                </div>
                                                <div className="feeds-right-mid-second-img"/>
                                                    <img src="img/여미.jpg"/>
                                                    <div className="second-img-text">
                                                        <p className="travelholic"><strong>travelholic_insta</strong></p>
                                                        <p className="second-time">1시간 전</p>
                                                    </div>
                                                </div>
                                                <div className="feeds-right-mid-third-img">
                                                    <img src="img/art.jpg"/>
                                                    <div className="third-img-text">
                                                        <p className="arte"><strong>arte_design__</strong></p>
                                                        <p className="third-time">4시간 전</p>
                                                    </div>
                                                </div>
                                                <div className="feeds-right-mid-fourth-img">
                                                    <img src="img/iammin.jpg"/>
                                                    <div className="fourth-img-text">
                                                        <p className="iammingki"><strong>iammingki</strong></p>
                                                        <p className="fourth-time">8시간 전</p>
                                                    </div>
                                                </div>
                                        </div>
                                </div>
                                
                                <div className = "feeds-right-bom">
                                        <div className="feeds-right-bom-topText">
                                                <div className="recommend">회원님을 위한 추천</div>
                                                <div className="all">모두 보기</div>
                                        </div>
                                        <div className="feeds-right-bom-first-img">
                                                <img src="img/yuna.jpg"/>
                                                <div className="feeds-right-bom-first-img-text">
                                                    <p className="yuna"><strong>yunakim</strong></p>
                                                    <p className="text">uni_guni 님 외 8명이... </p>
                                                </div>
                                                <div className="follow">팔로우</div>
                                        </div>
                                        <div className="feeds-right-bom-second-img">
                                                <img src="img/moon.jpg"/>
                                                <div className="feeds-right-bom-second-img-text">
                                                    <p className="moon"><strong>moonjaein</strong></p>
                                                    <p className="text">15.08.90 님 외 16명이... </p>
                                                </div>
                                                <div className="follow">팔로우</div>
                                        </div>
                                        <div className="feeds-right-bom-third-img">
                                                <img src="img/son.jpg"/>
                                                <div className="feeds-right-bom-third-img-text">
                                                    <p className="son"><strong>hm_son7</strong></p>
                                                    <p className="text">nam__kh 님 외 7명이... </p>
                                                </div>
                                                <div className="follow">팔로우</div>
                                        </div>
                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default Main;
