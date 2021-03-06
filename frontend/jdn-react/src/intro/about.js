import React from "react";
import Header from "components/Header.js";

// import "js/header";
const About = () => {
  return (
    <div>
      <Header />
      <div className="bg">
        <div className="main-screen aboutBg">
          <h1 className="main-title">ABOUT JDN</h1>
        </div>
      </div>

      <main id="about">
        <div className="gray-background about-info">
          <div className="wrapper">
            <div className="section-title-left">
              <h2>JDN 소개</h2>
            </div>
            <div className="grid-container middle-2col-grid">
              <div className="col-1">
                <div className="intro text">
                  <p>
                    꿈의숲교회 청년공동체는 JDN이라는 이름을 가지고 있습니다. 이는 Jesus, Designer &
                    Director & Drive, Nehemiah의 약자로써, <span>예수 그리스도(Jesus)</span>께서
                    우리 공동체를 <span>디자인(Desinger)</span>하시고 우리의{" "}
                    <span>감독자(Director)</span>가 되셔서 우리를 친히 이끌어(Driver) 가고 계신다는
                    우리 공동체의 변하지 않는 신앙고백입니다.
                    <br />
                    <br />
                    또한 우리가 신앙적 순결과 현실적 지혜를 가졌던 <span>느헤미야(Nehemiah)</span>
                    처럼 영성과 실력을 함께 겸비함으로 성경적 비전으로 시대를 이끌어 변화시켜
                    나아가는 청년공동체를 지향하고 있음을 내포하고 있습니다.
                  </p>
                </div>
              </div>
              <div className="col-1 about-logo-img">
                <div className="about-logo">
                  <img src="images/about-logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="white-background section-shadow about-vision">
          <div className="wrapper">
            <div className="section-title-right">
              <h2>JDN 비전</h2>
            </div>
            <div className="grid-container middle-2col-grid">
              <div className="col-1">
                <div className="vision-img">
                  <img src="images/default.jpg" alt="" />
                </div>
              </div>
              <div className="col-1 vision-line vision-sec">
                <div className="content-title-box">
                  <div className="content-title">
                    <h3 className="colored-text main-color-title">
                      1. 우리의 사명 (Mission & Vision)
                    </h3>
                  </div>
                  <div className="vision-text">
                    <p>예수 그리스도로 인하여 하나님 나라를 이루어 가는 공동체</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="white-background about-vision">
          <div className="wrapper">
            <div className="grid-container middle-2col-grid">
              <div className="content-title-box none">
                <div className="content-title">
                  <h3 className="colored-text main-color-title">
                    2. 우리의 핵심가치(Mission & Vision)
                  </h3>
                </div>
              </div>
            </div>
            <div className="grid-container middle-grid">
              <div className="vision-frame">
                <div className="vision-box">
                  <div className="vision-icon">아이콘</div>
                  <div className="vlision-info">
                    <h4>레이투르기아</h4>
                    <h5>(예배)</h5>
                  </div>
                  <div className="vision-reveal">
                    <div>
                      <h5>주일예배</h5>
                      <h5>금요성령집회</h5>
                    </div>
                    <button className="button1 full-btn inbox">
                      <a href="#!">온라인예배</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="vision-frame">
                <div className="vision-box">
                  <div className="vision-icon">아이콘</div>
                  <div className="vlision-info">
                    <h4>디다케</h4>
                    <h5>(교육)</h5>
                  </div>
                  <div className="vision-reveal">
                    <div>
                      <h5>리더교육</h5>
                      <h5>알파코리아</h5>
                      <h5>새가족반운영</h5>
                    </div>
                    <button className="button1 full-btn inbox">
                      <a href="#!">새가족</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="vision-frame">
                <div className="vision-box">
                  <div className="vision-icon">아이콘</div>
                  <div className="vlision-info">
                    <h4>케리그마</h4>
                    <h5>(선포)</h5>
                  </div>
                  <div className="vision-reveal">
                    <div>
                      <h5>아웃리치사역</h5>
                      <h5>노방전도</h5>
                    </div>
                    <button className="button1 full-btn inbox">
                      <a href="#!">소개</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="vision-frame">
                <div className="vision-box">
                  <div className="vision-icon">아이콘</div>
                  <div className="vlision-info">
                    <div>
                      <h4>코이노니아</h4>
                      <h5>(교제)</h5>
                    </div>
                  </div>
                  <div className="vision-reveal">
                    <div>
                      <h5>기수모임</h5>
                      <h5>목장모임</h5>
                    </div>
                    <button className="button1 full-btn inbox">
                      <a href="#!">모임</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="vision-frame">
                <div className="vision-box">
                  <div className="vision-icon" 아이콘></div>
                  <div className="vlision-info">
                    <h4>디아코니아</h4>
                    <h5>(섬김)</h5>
                  </div>
                  <div className="vision-reveal">
                    <div>
                      <h5>팀사역</h5>
                      <h5>교회학교봉사</h5>
                    </div>
                    <button className="button1 full-btn inbox">
                      <a href="#!">사역</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
export default About;
