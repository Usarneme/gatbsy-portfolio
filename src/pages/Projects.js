import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImageAffirmations from "../components/image_components/image_affirmations"
import ImageCalculator from "../components/image_components/image_calculator"
import ImageClock from "../components/image_components/image_clock"
import ImageFlashcards from "../components/image_components/image_flashcards"
import ImageGifSearch from "../components/image_components/image_gifsearch"
import ImageJSDrumkit from "../components/image_components/image_jsdrumkit"
import ImageMadlibs from "../components/image_components/image_madlibs"
import ImageMeditations from "../components/image_components/image_meditations"
import ImageNotes from "../components/image_components/image_notes"
import ImagePomodoro from "../components/image_components/image_pomodoro"
import ImageRR4SPA from "../components/image_components/image_rr4spa"
import ImageSocketChat from "../components/image_components/image_socketchat"
import ImageTasklist from "../components/image_components/image_tasklist"
import ImageTictactoe from "../components/image_components/image_tictactoe"
import ImageWebcamArtist from "../components/image_components/image_webcam_artist"

import './Projects.css'

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="github-link center">
      <h2><a href="https://github.com/usarneme">Please check out my <span className="github-button">GitHub Portfolio</span> for more projects and code examples!</a></h2>
    </div>
    <section id="projects-container">
      <a href="https://usarneme-flashcards.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card flashcards">
        <h4>Flashcards</h4>
        <small>for learning</small>
        <ImageFlashcards className="portfolio-image" alt="The Flashcards app." />
        <p>A full-stack NodeJS (Express) + ReactJS flashcard application.</p>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/task_list_app/build/index.html" target="_blank" rel="noopener noreferrer" className="project card task">
        <h4>Task List</h4>
        <small>for not forgetting</small>
        <ImageTasklist className="portfolio-image" alt="The Task List app." />
        <p>A task list application you can use for grocery lists or generally getting your life together. Available to download as a Progressive Web App to run on almost all devices!</p>
      </a>

      <a href="http://js-drumkit.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card drumkit">
        <h4>Keyboard Drumkit</h4>            
        <small>you're a producer</small>
        <ImageJSDrumkit className="portfolio-image" alt="The Keyboard Drumkit." />
        <p>A simple drumkit with tom, high hat, open hat, kick, ride, snare, tink, clap and boom sounds mapped to keyboard buttons. Music production has never been so easy!</p>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/ttt/build/index.html" target="_blank" rel="noopener noreferrer" className="project card ttt">
        <h4>Tic Tac Toe Game</h4>
        <small>for Joshua</small>
        <ImageTictactoe className="portfolio-image" alt="The Tic Tac Toe app." />
        <p>Sometimes the only way to win is to not play the game. But give this fun tic tac toe game a try anyway.</p>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/jscalc/" target="_blank" rel="noopener noreferrer" className="project card calc">
        <h4>Calculator</h4>
        <small>for the maths</small>
        <ImageCalculator className="portfolio-image" alt="The Calculator app." />
        <p>A four function + - * / calculator. Available to download as a Progressive Web Application! You can save this as a standalone application on your phone/tablet/ChromeOS or desktop PC.</p>
      </a>

      <a href="http://js-analog-clock.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card clock">
        <h4>Analog Clock</h4>
        <small>technically still digital</small>
        <ImageClock className="portfolio-image" alt="The Analog Clock." />
        <p>A digital analog clock. Or rather an analog digital clock. Simple but sort of hypnotic due to cubic-bezier transitions of the clock's hands.</p>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/meditations/" target="_blank" rel="noopener noreferrer" className="project card article">
        <h4>Meditations</h4>
        <small>for living well</small>
        <ImageMeditations className="portfolio-image" alt="The Meditations app." />
        <p>Read a passage at random from Meditations; the diary of the Stoic emperor Marcus Aurelius.</p>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/med_mad/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <h4>Stoic Madlib Game</h4>
        <small>for Marcus</small>
        <ImageMadlibs className="portfolio-image" alt="The Stoic Madlib app." />
        <p>A web app version of the purportedly popular madlib game using as a source material Meditations by Marcus Aurelius.</p>
      </a>

      <a href="https://ididnotknowicoulddothat.github.io/public/sites/webcam_artist" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <h4>Webcam Artist</h4>
        <small>green screen selfies</small>
        <ImageWebcamArtist className="portfolio-image" alt="The Stoic Madlib app." />
        <p>A fun way to play with video effects using your computer's webcam. Apply visual effects like color shifting to sepia tone. A green screen effect is possible by adjusting color sliders to match the background color behind you. Try other fun effects and combinations!</p>
      </a>

      <a href="http://rrspa.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <h4>Single Page Application Built on React Router (v4)</h4>
        <small>hey you didn't really change pages</small>
        <ImageRR4SPA className="portfolio-image" alt="The React Router 4 Single Page application." />
        <p>A test demonstration of a single page application built using React Router for all front-end page routing. HTML5 push state updates history and emulates normal page navigation for bread-crumbing. However no requests are sent to the server so the page load is essentially instantaneous.</p>
      </a>

      <a href="https://gifsearch4.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <h4>Gif Search</h4>
        <small>search up to 20 gifs per hour!</small>
        <ImageGifSearch className="portfolio-image" alt="The Stoic Madlib app." />
        <p>Input a key word or phrase into the search bar and watch as this front-end application instantly loads up new GIFs! Well, almost instantly via AJAX and no page reloads. This also implements an infinite scroll whereby getting near the bottom of the page causes the page to send another AJAX request for more data which is then appended. Giphy API is awesome but throttles requests.</p>
      </a>

      <a href="http://yoon.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <h4>Positive Affirmations & Self Care Activities</h4>
        <small>treat yourself well</small>
        <ImageAffirmations className="portfolio-image" alt="Positive Affirmations and Self Care Activities app." />
        <p>We can all use a reminder of something great or a suggestion of something to do for ourselves once in a while.</p>
      </a>

      <a href="http://pomo-doro.surge.sh/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <h4>Pomodoro</h4>
        <small>what was I doing again?</small>
        <ImagePomodoro className="portfolio-image" alt="The Pomodoro app." />
        <p>The Pomodoro technique is a way of focusing your energies for the greatest productivity and output. By using spaced repetition and breaks you can reinforce learning or set yourself up for highly productive focus time while working.</p>
      </a>

      <a href="https://hero5-run.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <h4>Take Note</h4>
        <small>don't you forget about me</small>
        <ImageNotes className="portfolio-image" alt="The Take Note app." />
        <p>A simple note taking app when you're on the run. Quick chat saves to localStorage every 10 seconds anything you type into the full screen textarea.</p>
      </a>
      <a href="https://usarneme-socket-chat.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project card meditations">
        <h4>Socket Chat</h4>
        <small>talk about more than just wrenches</small>
        <ImageSocketChat className="portfolio-image" alt="The WebSockets powered by SocketIO Chat app." />
        <p>Built on ExpressJS and powered by Socket.io this socket chat application allows for instant transimission of chat messages between all connected users. All chat data is stored in an mLab-hosted MongoDB database (through Express Mongoose).</p>
      </a>

    </section>
  </Layout>
)

export default Projects
