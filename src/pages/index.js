import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Journey from "../components/journey"

// SVG Icon Set
// import StarIcon from "../images/icons/Star_Icon"
import JSIcon from "../images/icons/JS_Icon"
import NodeJSIcon from "../images/icons/NodeJS_Icon"
import ExpressIcon from "../images/icons/Express_Icon"
import ReactIcon from "../images/icons/React_Icon"
import LinuxIcon from "../images/icons/Linux_Icon"
import HTMLIcon from "../images/icons/HTML_Icon"
import CSSIcon from "../images/icons/CSS_Icon"
import SASSIcon from "../images/icons/SASS_Icon"
import BootstrapIcon from "../images/icons/Bootstrap_Icon"
import JQueryIcon from "../images/icons/JQuery_Icon"
import DrupalIcon from "../images/icons/Drupal_Icon"
import MongoDBIcon from "../images/icons/MongoDB_Icon"
import GitIcon from "../images/icons/Git_Icon"
import GuitarIcon from "../images/icons/Guitar_Icon"
import EnglishLanguageIcon from "../images/icons/English_Language_Icon"
import SpanishLanguageIcon from "../images/icons/Spanish_Language_Icon"
import BBQIcon from "../images/icons/BBQ_Icon"

import "./index.css"

function IndexPage() {
  const skills = {"HTML5": 99,"CSS3": 99,"English": 99,"BBQ": 99,"JavaScript": 90,"Bootstrap": 90,"Spanish": 85,"React": 85,"NodeJS": 80,"Express": 80,"Git": 80,"Linux": 75,"SASS": 75,"jQuery": 75,"MongoDB": 75,"Drupal": 65,"Guitar": 60}

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `usarneme`, `ididnotknowicoulddothat`]} />
      <section className="container nine about">
        <div className="flex rows sub-heading">
          <h2>My Software Is...</h2>
        </div>
        <div className="focus-wrapper">
          <div className="grid rows bullet-point-wrapper">

            <div className="grid focus-area">
              <h4>Performant</h4>
              <div className="flex expand">
                <div className="hexagon-wrapper">
                  <div className="hexagon">
                    <i className="icon mdi mdi-speedometer speedometer"></i>
                  </div>
                </div>
                <p>My apps and websites are optimized for perceived speed and snappiness.</p>
              </div>
            </div>

            <div className="grid focus-area">
              <h4>Intuitive</h4>
              <div className="flex expand">
                <div className="hexagon-wrapper">
                  <div className="hexagon">
                    <i className="icon mdi mdi-lightbulb-outline lightbulb"></i>
                  </div>
                </div>
                <p>Utilizing design standards I create drop-dead simple user interactions.</p>
              </div>
            </div>

            <div className="grid focus-area">
              <h4>Responsive</h4>
              <div className="flex expand">
                <div className="hexagon-wrapper">
                  <div className="hexagon">
                    <i className="icon mdi mdi-cellphone-link cart"></i>
                  </div>
                </div>
                <p>Apps and sites should look beautiful and work perfectly on all screens.</p>
              </div>
            </div>

            <div className="grid focus-area">
              <h4>Dynamic</h4>
              <div className="flex expand">
                <div className="hexagon-wrapper">
                  <div className="hexagon">
                    <i className="icon mdi mdi-rocket-launch rocket"></i>
                  </div>
                </div>
                <p>Fetching, collating, and rendering dynamic data is a must for modern apps!</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="container nine skills">
        <div className="flex rows sub-heading">
          <h2>I Have Experience With...</h2>
        </div>

        <div id="devicons" className="flex">
          {Object.keys(skills).map(skill => {
            console.log(skill,skills[skill])
            let icon

            switch (skill) {
              case "HTML5": 
                icon = <HTMLIcon iconTitle="icon-0-html" width="25" height="25"/>
                break
              case "CSS3":
                icon = <CSSIcon iconTitle="icon-1-css" width="25" height="25"/>
                break
              case "JavaScript":
                icon = <JSIcon className="icon-js" iconTitle="icon-2-js" width="25" height="25"/>
                break
              case "NodeJS":
                icon = <NodeJSIcon iconTitle="icon-3-nodejs" width="25" height="25"/>
                break
              case "Express":
                icon = <ExpressIcon iconTitle="icon-4-expressjs" width="25" height="25"/>
                break
              case "React":
                icon = <ReactIcon iconTitle="icon-5-react" width="25" height="25"/>
                break
              case "Linux":
                icon = <LinuxIcon iconTitle="icon-6-linux" width="25" height="25"/>
                break
              case "SASS":
                icon = <SASSIcon iconTitle="icon-7-sass" width="25" height="25"/>
                break
              case "Bootstrap":
                icon = <BootstrapIcon className="icon-bs" iconTitle="icon-8-bootstrap" width="25" height="25"/>
                break
              case "jQuery":
                icon = <JQueryIcon iconTitle="icon-9-jquery" width="25" height="25"/>
                break
              case "Drupal":
                icon = <DrupalIcon iconTitle="icon-10-drupal" width="25" height="25"/>
                break
              case "MongoDB": 
                icon = <MongoDBIcon iconTitle="icon-11-mongodb" width="25" height="25"/>
                break
              case "Git":
                icon = <GitIcon iconTitle="icon-12-git" width="25" height="25"/>
                break
              case "Guitar":
                icon = <GuitarIcon iconTitle="icon-13-guitar" width="25" height="25" />
                break
              case "English":
                icon = <EnglishLanguageIcon className="icon-en" iconTitle="icon-14-english" width="25" height="25"/>
                break
              case "Spanish": 
                icon = <SpanishLanguageIcon className="icon-es" iconTitle="icon-15-spanish" width="25" height="25"/>
                break
              case "BBQ":
                icon = <BBQIcon className="icon-bbq" iconTitle="icon-16-barbecue" width="25" height="25" />
                break
            }
            return (
              <div key={skill} className="flex skill-holder">
                <div className="flex abs left skill-name" style={{width: skills[skill] + '%'}}>
                  <div className="flex abs rows left tag-holder icon-holder">
                    {icon || null} {skill}
                  </div>
                </div>
                <span className="flex percent-container" >{skills[skill]}%</span>
              </div>
              )
            })
          }
        </div>
      </section>

      <section className="container nine contact">
        <div className="flex rows sub-heading">
          <h2>Contact Details...</h2>
        </div>
        <div className="flex cols">
          <p>Please shoot me an email if you are interested in working together. Questions and general enquiries are welcome but please no spam or recruiters (recruiters can find me on <a href="#">LinkedIn</a>).</p>
          <form className="flex cols" onSubmit={() => alert("Not accepting emails at this time. Please check back later.")} >
            <label htmlFor="email">Email</label>
            <input type="email" disabled={true} placeholder="Email address..." />
            <button type="submit" disabled={true} onSubmit={() => alert("Somebody's been inspecting the DOM and trying stuff out...Tricky tricky.")}>Submit</button>
          </form>
        </div>
      </section>

      <div className="journey-container">
        <Journey />
      </div>
    </Layout>
  )
}

export default IndexPage
