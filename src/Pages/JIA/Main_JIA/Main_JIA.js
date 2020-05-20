import React from "react";
import "./Main.scss";
import logo from "../../img/logo_text.png";
import follower from "../../img/posted_photo.png";
import profile from "../../img/my_profile_photo.jpg";

class Main_JIA extends React.Component {
  state = {
    newComment: "",
  };

  btClickEvent = () => {};

  typeComment = (e) => {
    this.setState({ newComment: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <div class="all">
        <section>
          <nav className="navigation-bar">
            <div className="inside-bar">
              <img src={logo} className="instagram-logo" alt="instagram-logo" />
              <input className="search" type="text" placeholder="검색" />
              <div className="nav-icon-bar">
                <div className="explore">
                  <img
                    className="nav-icon"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                    alt="navi-icon"
                  />
                </div>
                <div className="heart">
                  <img
                    className="nav-icon"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    alt=" navi-icon"
                  />
                </div>
                <div className="my-page">
                  <img
                    className="nav-icon"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png
                    "
                    alt="navi-icon"
                  />
                </div>
              </div>
            </div>
          </nav>
          <main>
            <div className="main-page">
              <div className="feed">
                <article>
                  <div className="feed-nav">
                    <div className="user-photo-wrap">
                      <img
                        className="user-photo"
                        src="https://instagram.ficn6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/28766141_1980688428851043_2903686118761299968_n.jpg?_nc_ht=instagram.ficn6-1.fna.fbcdn.net&_nc_ohc=NPjuNs6U9KwAX-x3_9s&oh=12c5a4d93638d5e286a3c8a1bc6671bc&oe=5EE14E49"
                        alt="user-photo"
                      />
                    </div>
                    <div className="user-id">Wecode</div>
                    <img
                      className="more-info"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt="more-info"
                    />
                  </div>
                  <div>
                    <img
                      className="follower-photo"
                      src={follower}
                      alt="follower-photo"
                    />
                  </div>
                  <div className="comment-section">
                    <div className="reply-bar">
                      <div className="like">
                        <img
                          className="reply-icons"
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                          alt="reply-icon"
                        />
                      </div>
                      <div className="comment">
                        <img
                          className="reply-icons"
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                          alt="reply-icon"
                        />
                      </div>
                      <div className="share">
                        <img
                          className="reply-icons"
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                          alt="reply-icon"
                        />
                      </div>
                      <div>
                        <img
                          className="bookmark"
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                          alt="bookmark"
                        />
                      </div>
                    </div>
                    <div className="how-many-likes">
                      <div className="previous-comment">
                        <div className="comment">
                          <div className="liker-id">
                            <img
                              className="liker-photo"
                              src="https://instagram.ficn6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/92099350_661430491320050_5148309231073492992_n.jpg?_nc_ht=instagram.ficn6-1.fna.fbcdn.net&_nc_ohc=YwR5TnbFmbkAX8e8wgo&oh=46055d232cbcf6daf8361a8df7d40efc&oe=5EE38E6C"
                              alt="liker-photo"
                            />
                            Looper님
                          </div>
                          <span>
                            외 <strong>10명</strong>이 좋아합니다.
                          </span>
                        </div>
                        <div className="comment">
                          <span className="liker-id">Canon_mj</span>
                          <span className="liker-comment">
                            위워크에서 진행한 베이킹 클래스...
                          </span>
                        </div>
                        <div className="comment">
                          <span className="liker-id">neceosecius</span>
                          <span className="liker-comment">
                            거봐 좋았잖아~~~~
                          </span>
                        </div>
                        <div className="comment">42분 전</div>
                      </div>

                      <div className="make-comment">
                        <div className="inside-comment">
                          <textarea
                            className="comment-box"
                            onKeyUp={this.typeComment}
                            placeholder="댓글 달기..."
                            name=""
                            id="got-a-new-comment"
                          ></textarea>
                          <button
                            className="comment-bt"
                            onClick={this.btClickEvent}
                            type="button"
                          >
                            {" "}
                            게시{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="main-right">
                <header>
                  <div className="my-infomation">
                    <img
                      className="my-profile-photo"
                      src={profile}
                      alt="my-profile"
                    />
                    <div className="my-id-information">
                      <div className="my-id">jivy__y</div>
                      <div className="my-id">Wecode | 위코드</div>
                    </div>
                  </div>
                </header>
                <div className="story-feed">
                  <div className="story-header">
                    <span className="story">스토리</span>
                    <span className="view-all">모두 보기</span>
                  </div>
                  <ul className="following-story">
                    <li className="story-list">
                      <img
                        className="new-story"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64652760_1243914569108825_6141912583147356160_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=rTUFFB-pJUsAX9FlurB&oh=619ae9f6e8b484071f83832b120bfcc3&oe=5EE2D0D1"
                        alt="new-story"
                      />
                      <div className="story-details">
                        <div className="story-id">wework</div>
                        <div className="story-time">20분 전</div>
                      </div>
                    </li>
                    <li className="story-list">
                      <img
                        className="new-story"
                        src=" https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/70974912_2364851413623316_8613739598561935360_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=yzKMWBBSe_8AX_0Mnjc&oh=4bc264e3643516af4b3f98e7d76e440a&oe=5EE0B9C4"
                        alt="new-story"
                      />
                      <div className="story-details">
                        <div className="story-id">weio_fieow</div>
                        <div className="story-time">38분 전</div>
                      </div>
                    </li>
                    <li className="story-list">
                      <img
                        className="new-story"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/96391567_675648276546219_6211787586474606592_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=4nyT7aj4kNoAX-NrTl4&oh=acd50e73421723bfe151d4c1c4d22b0f&oe=5EE092B7"
                        alt="new-story"
                      />
                      <div className=" story-details">
                        <div className="story-id">ryujoon__</div>
                        <div className="story-time">13시간 전</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="follower-recommand">
                  <div className="story-header">
                    <span className="story">회원님을 위한 추천</span>
                    <span className="view-all">모두 보기</span>
                  </div>
                  <ul class="maybe-know-list">
                    <li className="maybe-know">
                      <img
                        className="probably-know"
                        src="https://instagram.ficn6-1.fna.fbcdn.net/v/t51.2885-19/13385916_1734710976812164_491350830_a.jpg?_nc_ht=instagram.ficn6-1.fna.fbcdn.net&_nc_ohc=lwfMGwQB0n0AX_i6Ngf&oh=a33facc52a0c0040a2c33845c01923f4&oe=5EE279D0"
                        alt="probably-know"
                      />
                      <div className="recommand-details">
                        <div className="story-wrap">
                          <div className="story-id">huan9288</div>
                          <div className="story-time">
                            sekimotoyusuke님 외 4명이 팔로우
                          </div>
                        </div>
                        <span className="follow">팔로우</span>
                      </div>
                    </li>
                    <li className="maybe-know">
                      <img
                        className="probably-know"
                        src="https://instagram.ficn6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/87854877_3887746677903926_142663957281243136_n.jpg?_nc_ht=instagram.ficn6-1.fna.fbcdn.net&_nc_ohc=eGF0tng-SrsAX99nmWE&oh=e0c19aaac134a3e0b9a7cdace30c343c&oe=5EE19943"
                        alt="probably-know"
                      />
                      <div className="recommand-details">
                        <div className="story-wrap">
                          <div className="story-id">girin_yujumom</div>
                          <div className="story-time">
                            회원님을 팔로우합니다
                          </div>
                        </div>
                        <span className="follow">팔로우</span>
                      </div>
                    </li>
                    <li className="maybe-know">
                      <img
                        className="probably-know"
                        src="https://instagram.ficn6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91807435_343381159954454_5201634613012725760_n.jpg?_nc_ht=instagram.ficn6-1.fna.fbcdn.net&_nc_ohc=22NR0KzYTY0AX87yWn9&oh=d4518e0bce16d400ce1e0b85c6c23672&oe=5EDF381A"
                        alt="maybew-know"
                      />
                      <div className="recommand-details">
                        <div className="story-wrap">
                          <div className="story-id">byby0129</div>
                          <div className="story-time">
                            ko.min.ji님 외 1명이 팔로우합니다
                          </div>
                        </div>
                        <span className="follow">팔로우</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    );
  }
}

export default Main_JIA;
