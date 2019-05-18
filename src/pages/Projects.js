import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './Projects.css'

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <section id="projects-container">

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/task_list_app/build/index.html" target="_blank" rel="noopener noreferrer" className="project card task">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/tasklist.png" alt="The Task List app." />
        <div className="notes">
          <h4>Task List</h4>
          <p><small>for not forgetting</small></p>
          A task list application you can use for grocery lists or generally getting your life together. Available to download as a Progressive Web App to run on almost all devices!
        </div>
      </a>

      <a href="http://js-drumkit.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card drumkit">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/jsdrumkit.png" alt="The Keyboard Drumkit." />
        <div className="notes">
          <h4>Keyboard Drumkit</h4>            
          <p><small>you're a producer</small></p>
        A simple drumkit with tom, high hat, open hat, kick, ride, snare, tink, clap and boom sounds mapped to keyboard buttons. Music production has never been so easy!
        </div>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/ttt/build/index.html" target="_blank" rel="noopener noreferrer" className="project card ttt">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/tictactoe.png" alt="The Tic Tac Toe app." />
        <div className="notes">
          <h4>Tic Tac Toe Game</h4>
          <p><small>for Joshua</small></p>
          Sometimes the only way to win is to not play the game. But give this fun tic tac toe game a try anyway.
        </div>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/jscalc/" target="_blank" rel="noopener noreferrer" className="project card calc">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/calculator.png" alt="The Calculator app." />
        <div className="notes">
          <h4>Calculator</h4>
          <p><small>for the maths</small></p>
          A four function + - * / calculator. Available to download as a Progressive Web Application! You can save this as a standalone application on your phone/tablet/ChromeOS or desktop PC.
        </div>
      </a>

      <a href="http://js-analog-clock.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card clock">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/analogclock.png" alt="The Analog Clock." />
        <div className="notes">
          <h4>Analog Clock</h4>
          <p><small>technically still digital</small></p>
        A digital analog clock. Or rather an analog digital clock. Simple but sort of hypnotic due to cubic-bezier transitions of the clock's hands.
        </div>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/meditations/" target="_blank" rel="noopener noreferrer" className="project card article">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/meditations.png" alt="The Meditations app." />
        <div className="notes">
          <h4>Meditations</h4>
          <p><small>for reading</small></p>
          Read a random passage from Marcus Aurelius' Meditations.
        </div>
      </a>

      <a href="https://usarneme-flashcards.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card flashcards">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/flashcards.png" alt="The Flashcards app." />
        <div className="notes">
          <h4>Flashcards</h4>
          <p><small>for learning</small></p>
          A full-stack NodeJS (Express) + ReactJS flashcard application.
        </div>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/med_mad/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/madlib.png" alt="The Stoic Madlib app." />
        <div className="notes">
          <h4>Stoic Madlib Game</h4>
          <p><small>for Marcus</small></p>
          A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
        </div>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/webcam_artist" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/madlib.png" alt="The Stoic Madlib app." />
        <div className="notes">
          <h4>Webcam Artist</h4>
          <p><small>green screen selfies</small></p>
          A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
        </div>
      </a>

      <a href="http://rrspa.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/madlib.png" alt="The Stoic Madlib app." />
        <div className="notes">
          <h4>Single Page Application Built on React Router (v4)</h4>
          <p><small>hey you didn't really change pages</small></p>
          A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
        </div>
      </a>

      <a href="https://gifsearch4.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/madlib.png" alt="The Stoic Madlib app." />
        <div className="notes">
          <h4>Gif Search</h4>
          <p><small>search up to 20 gifs per hour!</small></p>
          A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
        </div>
      </a>

      <a href="http://yoon.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/madlib.png" alt="The Stoic Madlib app." />
        <div className="notes">
          <h4>Positive Affirmations & Self Care Activities</h4>
          <p><small>treat yourself well</small></p>
          A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
        </div>
      </a>

      <a href="http://pomo-doro.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/madlib.png" alt="The Stoic Madlib app." />
        <div className="notes">
          <h4>Pomodoro</h4>
          <p><small>what was I doing again?</small></p>
          A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
        </div>
      </a>

      <a href="https://hero5-run.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/madlib.png" alt="The Stoic Madlib app." />
        <div className="notes">
          <h4>Take Note</h4>
          <p><small>don't you forget about me</small></p>
          A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
        </div>
      </a>
      <a href="https://usarneme-socket-chat.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/madlib.png" alt="The Stoic Madlib app." />
        <div className="notes">
          <h4>Socket Chat</h4>
          <p><small>talk about more than just wrenches</small></p>
          A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
        </div>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/compass/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <img className="portfolio-image" src="https://ididnotknowicoulddothat.github.io/public/img/madlib.png" alt="The Stoic Madlib app." />
        <div className="notes">
          <h4>Compass and Speedometer</h4>
          <p><small>not useful for desktops</small></p>
          A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.
        </div>
      </a>

    </section>
  </Layout>
)

export default Projects
