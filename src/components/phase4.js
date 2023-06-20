import React, { useState } from 'react';
import Human4 from '../assets/human4.js';
import SlideToggle from "react-slide-toggle";
import {ReactComponent as Digestive} from '../assets/digestive.svg'

function Phase4() {
  const [showBottom, setShowBottom] = useState(false);

  const toggleBottom = () => {
    setShowBottom(!showBottom);
  };

  return (
    <SlideToggle
      duration={500}
      collapsed
      render={({ toggle, setCollapsibleElement }) => (
        <div className={showBottom ? "phase phase4 phase-active" : "phase phase4"}>
          <div className="dotted-line"></div>
          <div onClick={toggle}>
            <div className="phase-top" onClick={toggleBottom}>
              <Human4 className='human' />
              <div className='phase-top-right' >
                <a>
                  <b>Phase 4:</b> <br /> <span className='line-through'></span>???
                </a>
                <div className={showBottom ? "toggle-sign minus-sign" : "toggle-sign plus-sign"} >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div ref={setCollapsibleElement}>
              <div className="phase-bottom phase4-bottom">
                <div className="phase-bottom-left">
                  <ul>
                    <li>
                      <b>Uhh</b>
                      <br />
                      Butterflies in my stomach.
                      <br />
                      Also im not sure why i wrote this in 3rd person.
                    </li>
                  </ul>
                  <Digestive className='digestive' />
                </div>
                <div className="phase-bottom-right">
                  <p>
                    Shah starts looking for opportunities to step into the professional world. 
                    He stumbles onto a company with a confusing position, curious, he dives deeper. 
                    He finds out the company has a unique structure, with multidisciplinary teams and individuals involved in every aspect of a project.
                    <br />
                    <br />
                    After having a few conversations with a team members, he realizes that this is the exact kind of environment he wants to be in.
                    A place where he will constantly be challenged and pushed to grow, work on meaningful projects,
                    learn from people with different skillsets, and most importantly, be surrounded by people who are passionate about what they do.
                  </p>
                </div>
              </div>
          </div>
        </div>
      )}
    />
  );
}

export default Phase4;
