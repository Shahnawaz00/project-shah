import React, { useState } from 'react';
import Human3 from '../assets/human3.js';
import SlideToggle from "react-slide-toggle";
import Ribcage from '../assets/ribcage.js'

function Phase3() {
  const [showBottom, setShowBottom] = useState(false);
  const [hoveredSection, setHoveredSection] = useState('right');

  const toggleBottom = () => {
    setShowBottom(!showBottom);
  };

  return (
    <SlideToggle
      duration={500}
      collapsed
      render={({ toggle, setCollapsibleElement }) => (
        <div className={showBottom ? "phase phase3 phase-active" : "phase phase3"}>
          <div className="dotted-line"></div>
          <div onClick={toggle}>
            <div className="phase-top" onClick={toggleBottom}>
              <Human3 className='human'  />
              <div className='phase-top-right' >
                <a>
                  <b>Phase 3:</b> <br /> Shadowing a Startup
                </a>
                <div className={showBottom ? "toggle-sign minus-sign" : "toggle-sign plus-sign"} >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div ref={setCollapsibleElement}>
              <div className="phase-bottom phase3-bottom">
                <div className="phase-bottom-left">
                  <ul>
                    <li className={hoveredSection === "right" ? "list-active" : "list-inactive" } >
                      <b>Recognized Passion</b>
                      <br />
                      This journey helped realize that the passion is beyond just programming, but rather the core of it, 
                      which is being able to think critically to solve problems and build solutions. And doing so with a team of like-minded individuals is infinitely more rewarding.
                    </li>
                    <li className={hoveredSection === "left" ? "list-active" : "list-inactive" }>
                      <b>Business Savvy</b>
                      <br />
                      Being able to see a company from start to end was an invaluable experience.
                      Since the company eventually sunsetted, it was incredibly insightful to see exactly what worked and what didn't, and realize the nuances of running a business.
                    </li>
                  </ul>
                  <Ribcage className='ribcage' hoveredSection={hoveredSection} setHoveredSection={setHoveredSection} />
                </div>
                <div className="phase-bottom-right">
                  <p>
                    Shah's insatiable curiosity for the world of programming leads him to Web3 technologies, the bleeding edge of the internet.
                    After going down a rabbit hole, he finds himself in a community of like-minded individuals who are all passionate about building something meaningful.
                    <br />
                    <br />
                    He has a discussion with a developer he meets there, who happens to be planning a Web3 startup.
                    After a few conversations, Shah asks if he could join as an unpaid intern, but they refuse since it went against their values of fair compensation.
                    Reluctant to back down, Shah instead offers himself to shadow the team, initially to learn more about programming,
                    but eventually, he finds himself deep in the operations of a startup. Shah gains insights into every aspect of it, from validating a business idea to building a team,
                    to planning a scalable business model, to marketing and branding, and so much more.
                  </p>
                </div>
              </div>
          </div>
        </div>
      )}
    />
  );
}

export default Phase3;
