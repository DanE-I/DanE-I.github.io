import React from "react";
import "./style.css";

export const Bentolio = () => {
  return (
    <div className="bentolio">
      <div className="div">
        <div className="SOCIALS">
          <div className="LINKS">
            <div className="text-wrapper">INSTAGRAM</div>

            <div className="text-wrapper">TWITTER</div>

            <div className="text-wrapper">LINKEDIN</div>
          </div>
        </div>

        <div className="CONTACT">
          <div className="text-wrapper-2">Contact me</div>

          <div className="TOP-BAR">
            <div className="have-some-questions">
              Have some
              <br />
              questions?
            </div>

            <img
              className="ARROW"
              alt="Arrow"
              src="https://c.animaapp.com/pFe2ZkhT/img/arrow.svg"
            />
          </div>
        </div>

        <div className="ABOUT">
          <p className="p">
            Julia Huang is an innovative AI artist, renowned for blending
            cutting-edge technology with creative expression. Based in LA, she
            crafts unique digital art experiences accessible globally.
          </p>

          <img
            className="CIRCLE-ICON"
            alt="Circle ICON"
            src="https://c.animaapp.com/pFe2ZkhT/img/circle-icon.svg"
          />
        </div>

        <div className="WORK">
          <div className="ITEM">
            <div className="text-wrapper-3">Zephyr</div>
          </div>

          <div className="ITEM-2">
            <img
              className="BORDER"
              alt="Border"
              src="https://c.animaapp.com/pFe2ZkhT/img/border.svg"
            />

            <div className="text-wrapper-3">Verve</div>
          </div>

          <div className="ITEM-3">
            <img
              className="img"
              alt="Border"
              src="https://c.animaapp.com/pFe2ZkhT/img/border-1.svg"
            />

            <div className="text-wrapper-3">Elara</div>
          </div>

          <div className="ITEM-4">
            <img
              className="BORDER-2"
              alt="Border"
              src="https://c.animaapp.com/pFe2ZkhT/img/border-2.svg"
            />

            <div className="IMAGE" />

            <img
              className="ARROW-ICON"
              alt="Arrow ICON"
              src="https://c.animaapp.com/pFe2ZkhT/img/arrow-icon.svg"
            />

            <div className="text-wrapper-3">Musea</div>
          </div>
        </div>

        <header className="HEADER">
          <nav className="NAV">
            <img
              className="arrow-icon"
              alt="Navigation arrow"
              src="/assets/icons/arrow-icon.svg"
            />
            <div className="text-wrapper-3">Musea</div>
          </nav>
          
          <img className="portrait" alt="Artist portrait" src="/path/to/portrait.jpg" />
          
          <div className="slogan-intro">
            <p className="artist-redefining">
              <span>Artist Redefining </span>
              <span className="highlight">Architecture</span>
              <span> with AI-Driven Design</span>
            </p>
            
            <img
              className="flower-icon"
              alt="Decorative flower icon"
              src="/assets/icons/flower-icon.svg"
            />
          </div>
        </header>
      </div>
    </div>
  );
};
