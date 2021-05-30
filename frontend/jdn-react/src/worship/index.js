import React from "react";
import Header from "components/Header.js";

const Worship = () => {
  return (
    <div>
      <Header />
      <div className="bg">
        <div className="main-screen aboutBg">
          <h1 className="main-title">예배</h1>
        </div>
      </div>
      <main id="worship">
        <section className="gray-background">
          <div className="wrapper">
            <div className="section-title-left">
              <h2>온라인 예배</h2>
            </div>
            <div className="grid-container middle-2col-grid">
              <div className="worship-box sunday">
                <img src="/images/default.jpg" />
                <div>
                  <button className="white-button">
                    <a href="#">주일예배 바로가기</a>
                  </button>
                </div>
              </div>
              <div className="worship-box friday">
                <img src="/images/default.jpg" />
                <div>
                  <button className="white-button">
                    <a href="#">금요예배 바로가기</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="white-background section-shadow">
          <div className="wrapper last-worship">
            <div className="section-title-left">
              <h3>지난 설교 다시보기</h3>
            </div>
            <div className="grid-container middle-grid hor-scr">
              <div className="last-worship frame">
                <a href="#">
                  <div className="image">
                    <img src="/images/default.jpg" />
                  </div>
                  <div className="info">
                    <p className="date">2021.05.05 / 주일예배</p>
                    <p className="title">설교주제입니다.</p>
                    <p className="bible">이사야 12:1-12</p>
                  </div>
                </a>
              </div>
              <div className="last-worship frame">
                <a href="#">
                  <div className="image">
                    <img src="/images/default.jpg" />
                  </div>
                  <div className="info">
                    <p className="date">2021.05.05 / 주일예배</p>
                    <p className="title">설교주제입니다.</p>
                    <p className="bible">이사야 12:1-12</p>
                  </div>
                </a>
              </div>
              <div className="last-worship frame">
                <a href="#">
                  <div className="image">
                    <img src="/images/default.jpg" />
                  </div>
                  <div className="info">
                    <p className="date">2021.05.05 / 주일예배</p>
                    <p className="title">설교주제입니다.</p>
                    <p className="bible">이사야 12:1-12</p>
                  </div>
                </a>
              </div>
              <div className="last-worship frame">
                <a href="#">
                  <div className="image">
                    <img src="/images/default.jpg" />
                  </div>
                  <div className="info">
                    <p className="date">2021.05.05 / 주일예배</p>
                    <p className="title">설교주제입니다.</p>
                    <p className="bible">이사야 12:1-12</p>
                  </div>
                </a>
              </div>
              <div className="last-worship frame">
                <a href="#">
                  <div className="image">
                    <img src="/images/default.jpg" />
                  </div>
                  <div className="info">
                    <p className="date">2021.05.05 / 주일예배</p>
                    <p className="title">설교주제입니다.</p>
                    <p className="bible">이사야 12:1-12</p>
                  </div>
                </a>
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
    </div>
  );
};

export default Worship;
