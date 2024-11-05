import "./Bentolio.css";

export const Bentolio = ({ className, ...props }) => {
  return (
    <div className={"bentolio " + className}>
      <div className="socials">
        <div className="links">
          <div className="instagram">Instagram </div>
          <div className="twitter">Twitter </div>
          <div className="linkedin">Linkedin </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-me">Contact me </div>
        <div className="top-bar">
          <div className="have-some-questions">
            Have some
            <br />
            questions?{" "}
          </div>
          <img className="arrow" src="arrow0.svg" />
        </div>
      </div>
      <div className="about">
        <div className="julia-huang-is-an-innovative-ai-artist-renowned-for-blending-cutting-edge-technology-with-creative-expression-based-in-la-she-crafts-unique-digital-art-experiences-accessible-globally">
          Julia Huang is an innovative AI artist, renowned for blending
          cutting-edge technology with creative expression. Based in LA, she
          crafts unique digital art experiences accessible globally.{" "}
        </div>
        <img className="circle-icon" src="circle-icon0.svg" />
      </div>
      <div className="work">
        <div className="zephyr">Zephyr </div>
        <div className="border"></div>
        <div className="verve">Verve </div>
        <div className="border2"></div>
        <div className="elara">Elara </div>
        <div className="border3"></div>
        <div className="image">
          <img
            className="lilcoderman-pink-chair-sitting-on-table-in-a-room-in-the-style-8-f-5-e-5-aa-9-38-f-8-4-af-0-89-f-3-8572-b-0-ae-9362-1"
            src="lilcoderman-pink-chair-sitting-on-table-in-a-room-in-the-style-8-f-5-e-5-aa-9-38-f-8-4-af-0-89-f-3-8572-b-0-ae-9362-10.png"
          />
        </div>
        <img className="arrow-icon" src="arrow-icon0.svg" />
        <div className="musea">Musea </div>
      </div>
      <div className="portrait">
        <img className="image2" src="image1.png" />
      </div>
      <div className="slogan-intro">
        <div className="artist-redefining-architecture-with-ai-driven-design">
          <span>
            <span className="artist-redefining-architecture-with-ai-driven-design-span">
              Artist Redefining
            </span>
            <span className="artist-redefining-architecture-with-ai-driven-design-span2">
              Architecture
            </span>
            <span className="artist-redefining-architecture-with-ai-driven-design-span3">
              with AI-Driven Design
            </span>
          </span>{" "}
        </div>
        <img className="flower-icon" src="flower-icon0.svg" />
      </div>
      <div className="header">
        <div className="nav">
          <div className="logo">
            <span>
              <span className="logo-span">JULIA</span>
              <span className="logo-span2"></span>
              <span className="logo-span3">HUANG</span>
            </span>{" "}
          </div>
          <div className="page-links">
            <div className="frame-14">
              <div className="projects">PROJECTS </div>
              <div className="about2">ABOUT </div>
              <div className="contact2">CONTACT </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
