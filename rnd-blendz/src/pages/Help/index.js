import React, { Component } from "react";
import {
  Answer,
  Button,
  HelpWrapper,
  Question,
  QuestionWrapper,
} from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";

class Help extends Component {
  render() {
    return (
      <div>
        <div>
          <br>
            <br></br>
          </br>
        </div>
        <nav class="navbar"></nav>

        <div class="container-fluid">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div class="accordion">
            <div class="icon"></div>
            <h5>Question 1?</h5>
          </div>

          <div class="panel">
            <p>Test answer 1..............</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZNMeyrgmr5o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div class="accordion">
            <div class="icon"></div>
            <h5>Question 2?</h5>
          </div>

          <div class="panel">
            <p>Test answer 2...............</p>
          </div>

          <div class="accordion">
            <div class="icon"></div>
            <h5>Question 3?</h5>
          </div>

          <div class="panel">
            <p>Test answer 3...............</p>
          </div>

          <div class="accordion">
            <div class="icon"></div>
            <h5>Question 4?</h5>
          </div>

          <div class="panel">
            <p>Test answer 4...............</p>
          </div>

          <div class="accordion">
            <div class="icon"></div>
            <h5>Question 5?</h5>
          </div>

          <div class="panel">
            <p>Test answer 5...............</p>
          </div>
        </div>
      </div>
    );
  }

  getQuestion() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    var len = acc.length;

    for (i = 0; i < len; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
}

export default Help;
