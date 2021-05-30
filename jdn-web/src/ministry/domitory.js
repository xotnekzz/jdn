import React from "react";
import Header from "components/Header.js";
const Domitory = () => {
  return (
    <div>
      <Header />
      <div className="bg">
        <div className="main-screen domitoryBg">
          <h1 className="main-title">학사관</h1>
        </div>
      </div>

      <main className="ministry">
        <section className="gray-background domitory">
          <div className="wrapper">
            <div className="section-title-left">
              <h2>학사관 소개</h2>
            </div>
            <div className="grid-container middle-2col-grid intro">
              <div className="col-1 domitory ministry-line mission-sec">
                <div className="content-title-box">
                  <h3 className="text-color-title">꿈의숲교회 부설 꿈의숲 학사관</h3>
                  <div className="ministry-text">
                    <p>
                      기독교 인재양성과 한국교회를 섬길 목적으로 서울 외 지역에서 온 대학생을 위한
                      여학생 학사관을 운영하고 있습니다. <br />
                      <br />
                      바른 신앙적 바탕 위에서 학생의 본분을 다하며 차세대 기독교 지도자로 성장할 수
                      있도록 돕는데 그 목적이 있습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="ministry-img domitory-img">
                  <img src="/images/default.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="white-background section-shadow domitory">
          <div className="wrapper">
            <div className="section-title-right">
              <h2>학사관에서는...</h2>
            </div>
            <div className="grid-container middle-3col-grid">
              <div className="domitory info">
                <img src="/images/default.jpg" />
                <div className="text-box">
                  <h3>공동체</h3>
                  <p>서로 다른 8명이 모여 한 분이신 예수님을 닮아가는 사랑의 공동체 입니다.</p>
                </div>
              </div>
              <div className="domitory info">
                <img src="/images/default.jpg" />
                <div className="text-box">
                  <h3>예배</h3>
                  <p>
                    일주일에 한 번 학사관 자체 예배, 한 달에 한 번 담임 목사님과 청년부 목사님의
                    심방예배를 통해 하나님을 알아가는 예배 공동체입니다.
                  </p>
                </div>
              </div>
              <div className="domitory info">
                <img src="/images/default.jpg" />
                <div className="text-box">
                  <h3>섬김</h3>
                  <p>
                    교회 학교 교사와 예배를 위한 섬김으로 함께협력 하여 하나님의 나라와 뜻을
                    세워나가는 섬김과 봉사의 공동체입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="white-background ministry">
          <div className="wrapper">
            <div className="section-title-left">
              <h2>학사관 정보</h2>
            </div>
            <div className="grid-container middle-2col-grid">
              <div className="col-1 dom-info">
                <div className="info-text">
                  <h4>위치</h4>
                  <p>서울시 노원구 월계동 위치 아파트</p>
                </div>
                <div className="info-text">
                  <h4>대중교통</h4>
                  <p>석계역(1,6호선) 도보 5분거리</p>
                </div>
                <div className="info-text">
                  <h4>인근대학</h4>
                  <p>고려대, 경희대, 한국외국어대, 서울과학기술대, 동덕여대, 성신여대, 광운대 등</p>
                </div>
                <div className="info-text">
                  <h4>비용</h4>
                  <p>최초 입주비 30만원, 이후 사용료 무료</p>
                </div>
              </div>

              <div className="col-1 dom-info">
                <div className="domitory-info img">
                  <img src="/images/default.jpg" />
                </div>
                <div className="domitory-info img">
                  <img src="/images/default.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gray-background section-shadow ministry">
          <div className="wrapper">
            <div className="section-title-left">
              <h2>지원 서류</h2>
            </div>
            <div className="grid-container middle-grid">
              <div className="domitory doc">
                <div className="icon"></div>
                <h4>서류</h4>
              </div>
              <div className="domitory doc">
                <div className="icon"></div>
                <h4>서류</h4>
              </div>
              <div className="domitory doc">
                <div className="icon"></div>
                <h4>서류</h4>
              </div>
              <div className="domitory doc">
                <div className="icon"></div>
                <h4>서류</h4>
              </div>
              <div className="domitory doc">
                <div className="icon"></div>
                <h4>서류</h4>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside className="go-to-contact">
        <section id="go-to-contact">
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
                    <a href="#">문의 바로가기</a>
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
        </section>
      </aside>
      <footer>
        <section className="content-section"></section>
      </footer>

      <script src="../js/header.js"></script>
    </div>
  );
};

export default Domitory;
