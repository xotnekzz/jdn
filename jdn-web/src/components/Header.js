import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import "js/header";

const Header = () => {
  return (
    <div className="header" id="nav">
      <div>
        <div className="nav-logo">
          <Link to="/">
            <img className="home-logo" id="mainWhiteLogo" src="/images/logo-white.png" alt="" />
          </Link>
          <Link to="/">
            <img
              className="home-logo scrolled"
              id="coloredLogo"
              src="/images/logo-color.png"
              alt=""
            />
          </Link>
        </div>
        <div className="nav-link">
          <ul className="firstLinks">
            <li className="main-list">
              <a href="#!">
                소개<span>▼</span>
              </a>
              <ul className="secondLinks">
                <li>
                  <Link to="/about">about JDN</Link>
                </li>
                <li>
                  <a href="#!">섬기는 사람들</a>
                </li>
                <li>
                  <a href="#!">걸어온 길</a>
                </li>
                <li>
                  <a href="#!">문의</a>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <a href="#!">
                예배<span>▼</span>
              </a>
              <ul className="secondLinks">
                <li>
                  <Link to="/worship">
                    온라인예배<span>+</span>
                  </Link>
                  <ul className="thirdLinks">
                    <li>
                      <a href="#!">주일예배</a>
                    </li>
                    <li>
                      <a href="#!">금요성령집회</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!">예배 다시보기</a>
                </li>
                <li>
                  <a href="#!">주보</a>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <a href="#!">
                사역<span>▼</span>
              </a>
              <ul className="secondLinks">
                <li>
                  <Link to="/ministry/serve">섬김</Link>
                </li>
                <li>
                  <Link to="/ministry/project">프로젝트</Link>
                </li>
                <li>
                  <Link to="/ministry/domitory">학사관</Link>
                </li>
                <li>
                  <Link to="/ministry/outreach">아웃리치</Link>
                </li>
                <li>
                  <Link to="/ministry/visionTrip">비전트립</Link>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <a href="#!">
                소식<span>▼</span>
              </a>
              <ul className="secondLinks">
                <li>
                  <a href="#!">공지사항</a>
                </li>
                <li>
                  <a href="#!">핫이슈</a>
                </li>
              </ul>
            </li>
            <li className="main-list">
              <a href="#!">
                게시판<span>▼</span>
              </a>
              <ul className="secondLinks">
                <li>
                  <a href="#!">기도요청</a>
                </li>
                <li>
                  <a href="#!">찬양신청</a>
                </li>
                <li>
                  <a href="#!">JDN 보고</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="header-right-col">
          <div className="button-for-new">
            <button className="button1 new-btn button-font">
              <Link to="/new">I'M NEW</Link>
            </button>
          </div>
          <div className="burger">
            <div className="line1 Bbar"></div>
            <div className="line2 Bbar"></div>
            <div className="line3 Bbar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
