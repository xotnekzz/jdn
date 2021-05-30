import React from "react";
import Header from "components/Header.js";
const New = () => {
  return (
    <div>
      <Header />
      <div className="bg">
        <div className="main-screen aboutBg">
          <h1 className="main-title">I AM a NEW !</h1>
        </div>
      </div>

      <main className="ministry">
        <section className="gray-background im-new">
          <div className="wrapper">
            <div className="section-title-left">
              <h2>환영합니다 !</h2>
            </div>
            <div className="grid-container middle-2col-grid intro">
              <div className="col-1 ministry-line mission-sec">
                <div className="content-title-box">
                  <h3 className="text-color-title">꿈의숲 교회 JDN 청년공동체</h3>
                  <div className="ministry-text">
                    <p>
                      꿈을 꾸면 꾸는 대로 되는 꿈의숲교회 청년부 공동체 JDN 에 방문하신 것을
                      진심으로 환영합니다. 다양한 나눔과 교제, 그리고 예배를 통해 JDN 공동체에서
                      신앙을 건강히 이루어 가시길 바랍니다.
                      <br />
                      <br />
                      새가족 여러분의 교육과정은 총 4주차로 이루어져 있으며, 새가족 담당 리더
                      청년과의 1:1 만남으로 진행됩니다. 함께 나누며 JDN공동체에서 신앙을 이루어가길
                      기대합니다
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="ministry-img im-new-img">
                  <img src="/images/default.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="white-background section-shadow im-new">
          <div className="wrapper">
            <div className="section-title-right">
              <h2>새신자 교육과정</h2>
            </div>
            <div>
              <div className="grid-container middle-4col-grid">
                <div className="notice-frame">
                  <div className="notice-list">
                    <div className="notice-img">
                      <img src="/images/default.jpg" />
                    </div>
                    <div className="notice-info">
                      <div className="notice-title">
                        <h3>1주차</h3>
                      </div>
                      <div className="notice-text">
                        <h5>
                          교회소개, 공동체소개 및<br />
                          새가족 방문카드 작성
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notice-frame">
                  <div className="notice-list">
                    <div className="notice-img">
                      <img src="/images/default.jpg" />
                    </div>
                    <div className="notice-info">
                      <div className="notice-title">
                        <h3>2주차</h3>
                      </div>
                      <div className="notice-text">
                        <h5>
                          예수님은 누구인가요?
                          <br />
                          믿음이란 무엇인가요?
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notice-frame">
                  <div className="notice-list">
                    <div className="notice-img">
                      <img src="/images/default.jpg" />
                    </div>
                    <div className="notice-info">
                      <div className="notice-title">
                        <h3>3주차</h3>
                      </div>
                      <div className="notice-text">
                        <h5>
                          말씀 & 기도 & 예배
                          <br />
                          공동체생활 에 대해서
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="notice-frame">
                  <div className="notice-list">
                    <div className="notice-img">
                      <img src="/images/default.jpg" />
                    </div>
                    <div className="notice-info">
                      <div className="notice-title">
                        <h3>4주차</h3>
                      </div>
                      <div className="notice-text">
                        <h5>
                          목사님과의 만남
                          <br />
                          목장으로의 편입
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="white-background section-shadow new-card">
          <div className="wrapper">
            <div className="section-title-left">
              <h2>새가족 등록카드</h2>
            </div>
            <div className="grid-container middle-grid">
              <div className="col-2">
                <h3>온라인으로 간단하게 새가족 카드를 작성해보세요!</h3>
                <p>
                  새가족인가요? 그런데 누구를 만나 어떻게 안내를 받아야할지 모르시겠다구요?
                  <br />
                  아래 링크를 통해 새가족카드를 작성해 주시고 조금만 기다려주세요.
                  <br />
                  담당간사가 빠른시일 내에 연락 드리겠습니다.
                </p>
              </div>
              <button className="button1">
                <a href="#!">새가족카드 작성</a>
              </button>
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
        </section>
      </aside>
      <footer>
        <section className="content-section"></section>
      </footer>

      <script src="../js/header.js"></script>
    </div>
  );
};

export default New;
