// import React, { Component } from "react";
// import './help.css'

// var acc = document.getElementsByClassName('accordion');
// var i;
// var len = acc.length;

// for(i = 0; i < len; i++) {
//     acc[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//         var panel = this.nextElementSibling;
//         if(panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + 'px';
//         }
//     })
// }

// class Help extends Component {    
//     render(){
//         return(
//             <div class="container-fluid">
//             <h2>Frequently Asked Questions (FAQs)</h2>
//             <div class="accordion">
//                 <div class="icon"></div>
//                 <h5>Question 1?</h5> 
//             </div>

//             <div class="panel">
//                 <p>Test answer 1..............</p>
//                 <iframe width="560" height="315" src="https://www.youtube.com/embed/ZNMeyrgmr5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//             </div>

//             <div class="accordion">
//                 <div class="icon"></div>
//                 <h5>Question 2?</h5> 
//             </div>

//             <div class="panel">
//                 <p>Test answer 2...............</p>
//             </div>

//             <div class="accordion">
//                 <div class="icon"></div>
//                 <h5>Question 3?</h5> 
//             </div>

//             <div class="panel">
//                 <p>Test answer 3...............</p>
//             </div>

//             <div class="accordion">
//                 <div class="icon"></div>
//                 <h5>Question 4?</h5> 
//             </div>

//             <div class="panel">
//                 <p>Test answer 4...............</p>
//             </div>

//             <div class="accordion">
//                 <div class="icon"></div>
//                 <h5>Question 5?</h5> 
//             </div>

//             <div class="panel">
//                 <p>Test answer 5...............</p>
//             </div>
//         </div>
        

//         )
//     }
// }

// export default Help;

import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50vh;
  background: #fff;

`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 2rem;
  }
`;

const Help = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Help;