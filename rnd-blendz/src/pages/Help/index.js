//import { get } from "immutable";
import React, { Component } from "react";
import './help.css';
import { useState } from "react";

function Help() {
    //render(){
        /*function getQuestion() {
            var acc = document.getElementsByClassName('accordion');
            var i;
            var len = acc.length;
        
            for(i = 0; i < len; i++) {
                acc[i].addEventListener('click', function() {
                    this.classList.toggle('active');
                    var panel = this.nextElementSibling;
                    if(panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + 'px';
                    }
                })
            }
        }*/ 

        const data = [
            {
                question: 'Question 1',
                answer: 'Test answer 1 ....',
            },
            {
                question: 'Question 2',
                answer: 'Test answer 2 ....',
            }
        ];

        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [selected, setSelected] = useState(null);

        const toggle = (i) => {
            if (selected === i) {
                return setSelected(null);
            }

            setSelected(i);
        };

        return(
            
            <div class='wrapper'>
                <div class='accordion'>
                    {data.map((item, i) => (
                        <div class='item'>
                            <div class='title' onClick={() => toggle(i)}>
                                <h2>{item.question}</h2>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div class={selected === i ? 'show' : 'content'}>{item.answer}</div>
                        </div>   
                    ))}
                </div>
            </div>
        )
    //}
}

export default Help;
