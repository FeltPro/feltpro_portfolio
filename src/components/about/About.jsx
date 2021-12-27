import "./about.css";
import Prof from "../../img/profThree.jpg";
import MyPDF from "../../docs/resume.pdf";


const About = () => {
    return (
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={Prof} 
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Why Front-end development?
        </p>
        <p className="a-desc">
        Up until August of 2021, I was a full-time Primary School Teacher and teaching 
        lead, and had been for the past ten years. I had always planned to take a 
        break in my school career to learn new skills myself - it was always something 
        I wanted to do - and coding seemed the obvious choice to me.
        Simply put, I love the challenges, task-oriented projects, and discovery which coding provides and 
        I plan to keep learning and designing exciting projects. I am pleased with my progress so far; 
        however, I know I am just at the beginning of this exciting journey. I am now keen to develop my 
        knowledge and move onto collaborations and professional projects. For my resume please 
        <a className="resume" href={MyPDF} download="resume.pdf"><strong> click on this link</strong></a>.     
        </p>
        {/*
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default About


