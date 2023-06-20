import React, { useState, useRef } from 'react';
import Human1 from '../assets/human1.js';
import Brain from '../assets/brain.js';
import SlideToggle from "react-slide-toggle";

function Phase1() {
  const [showBottom, setShowBottom] = useState(false);
  const [hoveredSection, setHoveredSection] = useState('top');

  const toggleBottom = () => {
    setShowBottom(!showBottom);
  };


  return (
    <SlideToggle 
        duration={500}
        collapsed        
        render={({ toggle, setCollapsibleElement }) => (
            
            <div className={showBottom ? "phase phase1 phase-active" : "phase phase1"}>
               <div className="dotted-line"></div>
               {/* main top div to trigger toggle  */}
               <div onClick={toggle}>
                 {/* actual content div to trigger toggle state  */}
                 <div className="phase-top" onClick={toggleBottom}>
                   <Human1 className='human' />
                   <div className='phase-top-right' >
                        <a>
                          <b>Phase 1:</b> <br /> Discovering Programming
                        </a>
                        <div className={showBottom ? "toggle-sign minus-sign" : "toggle-sign plus-sign"} >
                            <span></span>
                            <span></span>
                        </div>
                   </div>
                   
                 </div>
               </div>
      
      
      
                {/* collapsable div */}
                <div ref={setCollapsibleElement}>
                {/* actual bottom div */}
                  <div className="phase-bottom phase1-bottom "  >
                      <div className="phase-bottom-left">

                        <ul>
                            <li className={hoveredSection === 'top' ? 'list-active' : 'list-inactive'}
                             >
                            <b>Critical Thinking</b>
                            <br />
                            Developed an essential skill in being able to effectively think about a situation at hand and take the most appropriate steps to overcome it.
                            </li>
                            <li className={hoveredSection === 'left' ? 'list-active' : 'list-inactive' } >
                            <b>Problem Solving</b>
                            <br />
                            Learned how to get deep into the root of a problem, rather than fixing the surface level issues.
                            </li>
                            <li className={hoveredSection === 'right' ? 'list-active' : 'list-inactive' } >
                            <b>Perseverance</b>
                            <br />
                            Identified the importance of pushing through certain situations even when they get overwhelmingly difficult.
                            </li>
                            <li className={hoveredSection === 'bottom' ? 'list-active' : 'list-inactive' } >
                            <b>Ambition</b>
                            <br />
                            Developed a strong desire to genuinely excel in the tech field, and the motivation to build something meaningful.
                            </li>
                            
                        </ul>
                        <Brain className='brain' setHoveredSection={setHoveredSection} hoveredSection={hoveredSection}
                        />
                      </div>
                      <div className="phase-bottom-right" >
                        <p>
                          Shah begins his journey as a science student with a certain level of fascination for the medicinal field.
                          However, the lack of challenges, and the repetitive nature of the field makes him question his career path.
                          <br />
                          <br />
                          His curiousity for the world of programming is piqued when his friend starts a bootcamp course. Shah's ridiculously competitive nature 
                          has him signing up for the same course just to one up his friend, 
                          but he soon finds himself actually enjoying the whole programming gig. 
                          The puzzles, the problem-solving, the triumphs after endless debugging—it's like a nerdy rollercoaster ride he never knew he needed.
                        </p>
                      </div>
                  </div>
                
                </div>
        
            </div>
        )}
    />
  );
}

export default Phase1;
