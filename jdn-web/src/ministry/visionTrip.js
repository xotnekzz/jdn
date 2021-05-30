import React from "react";
import Header from "components/Header.js";

// import "js/slide";

const VisionTrip = () => {
  return (
    <div>
      <Header />
      <div className="bg">
        <div className="main-screen domitoryBg">
          <h1 className="main-title">비전트립</h1>
        </div>
      </div>

      <main className="ministry">
        <section className="gray-background visiontrip">
          <div className="wrapper">
            <div className="section-title-left">
              <h2>비전트립 소개</h2>
            </div>
            <div className="grid-container middle-2col-grid intro">
              <div className="col-1 ministry-line mission-sec">
                <div className="content-title-box">
                  <h3 className="text-color-title">비전트립은...</h3>
                  <div className="ministry-text">
                    <p>
                      예수님의 시선(VISION)으로 온 열방을 바라보고 마음(HEART) 으로 온 열방을
                      품기위해 함께(WITH) 떠나는 동행(TRIP)으로, 목적지에 따라 성지순례와 함께
                      병행하기도 합니다.
                    </p>
                    <span>*기간 및 예산은 목적지에 따라서 달라질 수 있습니다.*</span>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="ministry-img visiontrip-img">
                  <img src="/images/default.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gray-background visiontrip">
          <div className="wrapper">
            <div className="section-title-right">
              <h2>준비과정</h2>
            </div>
            <div className="grid-container middle-2col-grid process">
              <div className="col-1">
                <div className="process-frame left active">
                  <div className="process-img"></div>
                </div>
                <div className="process-frame left">
                  <div className="process-img"></div>
                </div>
                <div className="process-frame left">
                  <div className="process-img"></div>
                </div>
                <div className="process-frame left">
                  <div className="process-img"></div>
                </div>
              </div>

              <div className="col-1">
                <button id="left-arrow">좌</button>
                <div className="process-info right active">
                  <h5>1주차</h5>
                  <h3>오리엔테이션</h3>
                  <p>
                    설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다.
                    설명입니다.설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다.
                    설명입니다.설명입니다. 설명입니다.
                  </p>
                </div>
                <div className="process-info right">
                  <h5>2주차</h5>
                  <h3>모임</h3>
                  <p>
                    설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다.
                    설명입니다.설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다.
                    설명입니다.설명입니다. 설명입니다.
                  </p>
                </div>
                <div className="process-info right">
                  <h5>3주차</h5>
                  <h3>오리엔테이션</h3>
                  <p>
                    설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다.
                    설명입니다.설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다.
                    설명입니다.설명입니다. 설명입니다.
                  </p>
                </div>
                <div className="process-info right">
                  <h5>4주차</h5>
                  <h3>오리엔테이션</h3>
                  <p>
                    설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다.
                    설명입니다.설명입니다. 설명입니다.설명입니다. 설명입니다.설명입니다.
                    설명입니다.설명입니다. 설명입니다.
                  </p>
                </div>
                <button id="right-arrow">우</button>
              </div>
            </div>
          </div>
        </section>

        <section className="white-background section-shadow visiontrip">
          <div className="wrapper">
            <div className="section-title-left">
              <h2>아웃리치 발자국</h2>
            </div>
            <div className="foot-print">
              <div className="grid-container middle-2col-grid  timeline-box reverse">
                <div className="col-1">
                  <div className="timeline-img">
                    <img src="/images/default.jpg" />
                  </div>
                </div>
                <div className="col-1">
                  <span>Chung Ju</span>
                  <div>
                    <div className="sub-title colored-text main-color-title">
                      <h3>2014 충주 삼탄교회</h3>
                    </div>
                    <div className="information">
                      <p>
                        설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-container middle-2col-grid  timeline-box">
                <div className="col-1">
                  <div className="timeline-img">
                    <img src="/images/default.jpg" />
                  </div>
                </div>
                <div className="col-1">
                  <span>San Chung</span>
                  <div>
                    <div className="sub-title colored-text main-color-title">
                      <h3>2015 산청 금서교회</h3>
                    </div>
                    <div className="information">
                      <p>
                        설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-container middle-2col-grid  timeline-box reverse">
                <div className="col-1">
                  <div className="timeline-img">
                    <img src="/images/default.jpg" />
                  </div>
                </div>
                <div className="col-1">
                  <span>Vietnam</span>
                  <div>
                    <div className="sub-title colored-text main-color-title">
                      <h3>2017 베트남</h3>
                    </div>
                    <div className="information">
                      <p>
                        설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-container middle-2col-grid  timeline-box">
                <div className="col-1">
                  <div className="timeline-img">
                    <img src="/images/default.jpg" />
                  </div>
                </div>
                <div className="col-1">
                  <span>Kyoung Ju</span>
                  <div>
                    <div className="sub-title colored-text main-color-title">
                      <h3>2019 경주 사방교회</h3>
                    </div>
                    <div className="information">
                      <p>
                        설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.설명입니다.
                      </p>
                    </div>
                  </div>
                </div>
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
      <script src="../js/slide.js"></script>
    </div>
  );
};

export default VisionTrip;
