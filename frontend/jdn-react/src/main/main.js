import React from "react";
import Header from "components/Header.js";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="bg">
        <div className="main-screen homeBg">
          <h1 className="main-title">메인 디자인을 여기에 </h1>
        </div>
      </div>
      <div className="forNew">
        <Link to="newVisit">처음 방문하시나요 ?</Link>
      </div>
      <div>
        <div className="gray-background timesection">
          <div className="wrapper">
            <div className="grid-container middle-2col-grid timeSchedule">
              <div className="box1 time">
                <h3 className="title">
                  <img className="home-icon" src="images/time-icon.png" alt="" /> 시간
                </h3>
                <div className="content">
                  <div className="information">
                    <h5>
                      <span className="important">주일예배</span>
                    </h5>
                    <p>1:30 pm 본당</p>
                  </div>
                  <div className="information">
                    <h5>금요성령집회</h5>
                    <p>8:00 pm 미션홀</p>
                  </div>
                </div>
              </div>
              <div className="box1 schedule">
                <h3 className="title">
                  <img className="home-icon" src="images/schedule-icon.png" alt="" /> 모임
                </h3>
                <div className="content">
                  <div className="information">
                    <h5>주일예배 중보기도</h5>
                    <p>1:30 pm 본당</p>
                  </div>
                  <div className="information">
                    <h5 className="important">
                      <span>목장모임</span>
                    </h5>
                    <p>4부예배 이후 배정</p>
                  </div>
                  <div className="information">
                    <h5>기수모임</h5>
                    <p>1,4,7,10월 배정</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="white-background section-shadow" id="home-about-jdn">
          <div className="wrapper section-title-left">
            <h2>2021 JDN</h2>
          </div>
          <div className="banner">
            <img src="images/2021_jdn_banner.png" alt="" />
          </div>
          <button className="button1 button-font">
            <a href="#!">
              꿈의숲교회 청년부
              <br />
              JDN 소개 바로가기
            </a>
          </button>
        </div>

        <div className="gray-background section-shadow">
          <div className="wrapper">
            <div className="section-title-right">
              <h2>공지사항</h2>
            </div>
            <div>
              <div className="grid-container notice-layout">
                <div className="notice-frame">
                  <a href="#!">
                    <div className="notice-list">
                      <div className="notice-img">
                        <img src="images/2021_jdn_banner.png" alt="" />
                      </div>
                      <div className="notice-info">
                        <div className="notice-title">
                          <h4>제목입니다.</h4>
                        </div>
                        <div className="notice-text">
                          <p>
                            한문장 정도의 간단한 소개문구로 해주시면 좋을 것 같아요. 참고해주세요.
                          </p>
                        </div>
                      </div>
                      <button className="inner-button">
                        <p className="button-font">자세히 보기</p>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="notice-frame">
                  <a href="#!">
                    <div className="notice-list">
                      <div className="notice-img">
                        <img src="images/2021_jdn_banner.png" alt="" />
                      </div>
                      <div className="notice-info">
                        <div className="notice-title">
                          <h4>제목입니다.</h4>
                        </div>
                        <div className="notice-text">
                          <p>
                            한문장 정도의 간단한 소개문구로 해주시면 좋을 것 같아요. 참고해주세요.
                          </p>
                        </div>
                      </div>
                      <button className="inner-button">
                        <p className="button-font">자세히 보기</p>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="notice-frame">
                  <a href="#!">
                    <div className="notice-list">
                      <div className="notice-img">
                        <img src="images/2021_jdn_banner.png" alt="" />
                      </div>
                      <div className="notice-info">
                        <div className="notice-title">
                          <h4>제목입니다.</h4>
                        </div>
                        <div className="notice-text">
                          <p>
                            한문장 정도의 간단한 소개문구로 해주시면 좋을 것 같아요. 참고해주세요.
                          </p>
                        </div>
                      </div>
                      <button className="inner-button">
                        <p className="button-font">자세히 보기</p>
                      </button>
                    </div>
                  </a>
                </div>
                <div className="notice-frame">
                  <a href="#!">
                    <div className="notice-list">
                      <div className="notice-img">
                        <img src="images/2021_jdn_banner.png" alt="" />
                      </div>
                      <div className="notice-info">
                        <div className="notice-title">
                          <h4>제목입니다.</h4>
                        </div>
                        <div className="notice-text">
                          <p>
                            한문장 정도의 간단한 소개문구로 해주시면 좋을 것 같아요. 참고해주세요.
                          </p>
                        </div>
                      </div>
                      <button className="inner-button">
                        <p className="button-font">자세히 보기</p>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="white-background section-shadow" id="map">
          <div className="wrapper">
            <div className="section-title-left">
              <h2>오시는 길</h2>
            </div>
            <div className="grid-container middle-2col-grid map">
              <div className="col-1">
                <div className="map-info">
                  <div className="map-title">
                    <h4>대중교통</h4>
                  </div>
                  <div className="map-text">
                    <div className="transportation">
                      <p>
                        <span>지하철</span>
                      </p>
                      <ul>
                        <li>
                          {" "}
                          6호선 돌곶이역 3번출구
                          <br />
                          시내버스 261,147 장위1동 새마을금고앞 하차
                        </li>
                        <li>
                          1호선 석계역 1번출구
                          <br />
                          마을버스 14-2번 (꿈의숲교회행)꿈의숲교회 하차
                        </li>
                      </ul>
                    </div>
                    <div className="transportation">
                      <p>
                        <span>시내버스</span>
                      </p>
                      <ul>
                        <li> 103,1017,1137,261,172 새마을금고앞 하차</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="map-info">
                  <div className="map-title">
                    <h4>차량안내</h4>
                  </div>
                  <div className="map-text">
                    <p>00대 까지 수용 가능한 주차장 시설 완비</p>
                  </div>
                </div>
                <div className="map-info">
                  <div className="map-title">
                    <h4>셔틀버스 운행</h4>
                  </div>
                  <div className="map-text">
                    <p>셔틀버스 운행에 관한 자세한 정보를 확인해 주세요.</p>
                    <div className="button1 map-btn">
                      <button className="button-font">
                        <a href="#!">셔틀버스 확인하기</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="find-way">
                  <a
                    href="https://map.naver.com/v5/search/%EA%BF%88%EC%9D%98%EC%88%B2%EA%B5%90%ED%9A%8C/place/11716185?placeSearchOption=fromNxList=true%26noredirect=1%26entry=pll&c=14139321.4921919,4525903.3271650,13,0,0,0,dh&placePath=%2Fhome%3Fentry=pll"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="inner-button">길찾기</button>
                  </a>
                  <p> 주소 : 서울시 성북구 장월로 29길 9 (장위동)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="go-to-contact">
        <div id="go-to-contact">
          <div className="wrapper">
            <div className="grid-container middle-2col-grid to-contact">
              <div className="col-1">
                <div className="contact-info">
                  <div className="contact-title">
                    <h3>더 궁금한 것이 있으신가요 ?</h3>
                  </div>
                  <div className="contact-text">
                    <h4>
                      궁금하신 내용은 이 곳을 통해 문의해주세요.
                      <br />
                      빠른시일 내에 정성껏 답변드리겠습니다.
                    </h4>
                  </div>
                  <button className="white-button">
                    <a href="#!">문의 바로가기</a>
                  </button>
                </div>
              </div>
              <div className="col-1 title">
                <h1>
                  CONTACT
                  <br />
                  <span>TO</span> US
                </h1>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <footer>
        <div className="content-section"></div>
      </footer>
    </div>
  );
};

export default Main;
