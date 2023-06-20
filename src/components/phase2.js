import React, { useState } from 'react';
import SlideToggle from "react-slide-toggle";
import Human2 from '../assets/human2.js';
import Heart from '../assets/heart.js'

function Phase2() {
  const [showBottom, setShowBottom] = useState(false);
  const [hoveredSection, setHoveredSection] = useState('top-right');

  const toggleBottom = () => {
    setShowBottom(!showBottom);
  };

  return (
    <SlideToggle 
        duration={500}  
        collapsed
        render={({ toggle, setCollapsibleElement }) => (
    <div className={showBottom ? "phase phase2 phase-active" : "phase phase2"}>
      <div className="dotted-line"></div>
        <div onClick={toggle}>
            <div className="phase-top" onClick={toggleBottom}>
              <Human2 className='human'  />
              <div className='phase-top-right' >
                <a>
                  <b>Phase 2:</b> <br /> Building portfolio websites
                </a>
                <div className={showBottom ? "toggle-sign minus-sign" : "toggle-sign plus-sign"} >
                    <span></span>
                    <span></span>
                </div>
              </div>
            </div>
        </div>
       <div ref={setCollapsibleElement} >
            <div className="phase-bottom phase2-bottom">
              <div className="phase-bottom-left">
                <ul>
                    <li className={hoveredSection === "top-right" ? "list-active" : "list-inactive" } >
                    <b>Courage</b>
                    <br />
                    Cold calling all those businesses was a nerve-wrecking but an important experience to build courage.
                    </li>
                    <li className={hoveredSection === "top-left" ? "list-active" : "list-inactive" } >
                    <b>Communication</b>
                    <br />
                    Interacting with clients helped improve communication skills, and learn how to effectively convey ideas.
                    </li>
                    <li className={hoveredSection === "bottom-left" ? "list-active" : "list-inactive" } >
                    <b>Prioritization</b>
                    <br />
                    Learned how to better gauge what the client wants, and prioritize tasks accordingly.
                    </li>
                    <li className={hoveredSection === "bottom-right" ? "list-active" : "list-inactive" } >
                    <b>Resilience</b>
                    <br />
                    Although it was a good experience, going thorugh the whole process felt very demotivating at times, 
                    but it was important to learn from the failures and keep at it.
                    </li>
                </ul>
                <Heart className="heart" hoveredSection={hoveredSection} setHoveredSection={setHoveredSection}  />
              </div>
              <div className="phase-bottom-right">
                <p>
                Shah takes his first step into the world of web development by creating websites for small businesses.
                At first, he starts off by building mock websites, but soon enough, he finds himself bored and craving more meaningful projects.
                <br />
                <br />
                Until one day, Shah and his friend realize how many local businesses lack an online presence. 
                They decide to offer their services for free to any promising business they come across. 

                <br />
                <br />
                The experience turns out to be incredibly fullfilling for Shah, as he gets to learn more about the inner workings of a company, 
                and have the opportunity to directly interact with business owners to come up with possible solutions. 
                Now although he was unnsuccessful <span className='line-through' >all</span> most of the time, the whole process was very inisghtful for Shah. 
                </p>
              </div>
            
            </div>
       </div>
        
      
    </div>
    )}
    />
  );
}

export default Phase2;
