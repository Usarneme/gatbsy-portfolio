import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// SVG Icon Set
import StarIcon from "../images/Star_Icon"
import JSIcon from "../images/JS_Icon"
import NodeJSIcon from "../images/NodeJS_Icon"
import ExpressIcon from "../images/Express_Icon"
import ReactIcon from "../images/React_Icon"
import LinuxIcon from "../images/Linux_Icon"
import HTMLIcon from "../images/HTML_Icon"
import CSSIcon from "../images/CSS_Icon"
import SASSIcon from "../images/SASS_Icon"
import BootstrapIcon from "../images/Bootstrap_Icon"
import JQueryIcon from "../images/JQuery_Icon"
import DrupalIcon from "../images/Drupal_Icon"
import MongoDBIcon from "../images/MongoDB_Icon"
import GitIcon from "../images/Git_Icon"
import GuitarIcon from "../images/Guitar_Icon"
import EnglishLanguageIcon from "../images/English_Language_Icon"
import SpanishLanguageIcon from "../images/Spanish_Language_Icon"
import BBQIcon from "../images/BBQ_Icon"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `usarneme`, `ididnotknowicoulddothat`]} />
    <div className="container icons-container">
      <h3>Knowledge, Skills, and Abilities</h3>
      <div id="devicons">

        <div className="grid skill-holder">
          <div className="skill-name left skill-heading">Skill Name</div>
          <div className="icons right">
            <StarIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <StarIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <StarIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <StarIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <StarIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
          </div>
        </div>
        
        <div className="grid skill-holder">
          <div className="skill-name left">JavaScript</div>
          <div className="icons right">
            <JSIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <JSIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <JSIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <JSIcon iconTitle="js-icon-3" highlighted={true} width="40" height="40"/>
            <JSIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">NodeJS</div>
          <div className="icons right">
            <NodeJSIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <NodeJSIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <NodeJSIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <NodeJSIcon iconTitle="js-icon-3" width="40" height="40"/>
            <NodeJSIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">Express</div>
          <div className="icons right">
            <ExpressIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <ExpressIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <ExpressIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <ExpressIcon iconTitle="js-icon-3" width="40" height="40"/>
            <ExpressIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">React</div>
          <div className="icons right">
            <ReactIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <ReactIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <ReactIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <ReactIcon iconTitle="js-icon-3" highlighted={true} width="40" height="40"/>
            <ReactIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">Linux</div>
          <div className="icons right">
            <LinuxIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <LinuxIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <LinuxIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <LinuxIcon iconTitle="js-icon-3" width="40" height="40"/>
            <LinuxIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">HTML5</div>
          <div className="icons right">
            <HTMLIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <HTMLIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <HTMLIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <HTMLIcon iconTitle="js-icon-3" highlighted={true} width="40" height="40"/>
            <HTMLIcon iconTitle="js-icon-4" highlighted={true} width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">CSS3</div>
          <div className="icons right">
            <CSSIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <CSSIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <CSSIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <CSSIcon iconTitle="js-icon-3" highlighted={true} width="40" height="40"/>
            <CSSIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">SASS</div>
          <div className="icons right">
            <SASSIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <SASSIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <SASSIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <SASSIcon iconTitle="js-icon-3" width="40" height="40"/>
            <SASSIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">Bootstrap</div>
          <div className="icons right">
            <BootstrapIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <BootstrapIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <BootstrapIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <BootstrapIcon iconTitle="js-icon-3" highlighted={true} width="40" height="40"/>
            <BootstrapIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">jQuery</div>
          <div className="icons right">
            <JQueryIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <JQueryIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <JQueryIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <JQueryIcon iconTitle="js-icon-3" width="40" height="40"/>
            <JQueryIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">Drupal</div>
          <div className="icons right">
            <DrupalIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <DrupalIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <DrupalIcon iconTitle="js-icon-2" width="40" height="40"/>
            <DrupalIcon iconTitle="js-icon-3" width="40" height="40"/>
            <DrupalIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">MongoDB</div>
          <div className="icons right">
            <MongoDBIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <MongoDBIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <MongoDBIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <MongoDBIcon iconTitle="js-icon-3" width="40" height="40"/>
            <MongoDBIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">Git</div>
          <div className="icons right">
            <GitIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <GitIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <GitIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <GitIcon iconTitle="js-icon-3" highlighted={true} width="40" height="40"/>
            <GitIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">Guitar</div>
          <div className="icons right">
            <GuitarIcon iconTitle="js-icon-0" width="40" height="40" highlighted={true} />
            <GuitarIcon iconTitle="js-icon-1" width="40" height="40" highlighted={true} />
            <GuitarIcon iconTitle="js-icon-2" width="40" height="40" highlighted={true} />
            <GuitarIcon iconTitle="js-icon-3" width="40" height="40"/>
            <GuitarIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">English</div>
          <div className="icons right lang">
            <EnglishLanguageIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <EnglishLanguageIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <EnglishLanguageIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <EnglishLanguageIcon iconTitle="js-icon-3" highlighted={true} width="40" height="40"/>
            <EnglishLanguageIcon iconTitle="js-icon-4" highlighted={true} width="40" height="40"/>
            </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">Spanish</div>
          <div className="icons right lang">
            <SpanishLanguageIcon iconTitle="js-icon-0" highlighted={true} width="40" height="40"/>
            <SpanishLanguageIcon iconTitle="js-icon-1" highlighted={true} width="40" height="40"/>
            <SpanishLanguageIcon iconTitle="js-icon-2" highlighted={true} width="40" height="40"/>
            <SpanishLanguageIcon iconTitle="js-icon-3" width="40" height="40"/>
            <SpanishLanguageIcon iconTitle="js-icon-4" width="40" height="40"/>
          </div>
        </div>
        <div className="grid skill-holder">
          <div className="skill-name left">BBQ</div>
          <div className="icons right">
            <BBQIcon iconTitle="bbq-icon-0" width="40" height="40" highlighted={true} />
            <BBQIcon iconTitle="bbq-icon-1" width="40" height="40" highlighted={true} />
            <BBQIcon iconTitle="bbq-icon-2" width="40" height="40" highlighted={true} />
            <BBQIcon iconTitle="bbq-icon-3" width="40" height="40" highlighted={true} />
            <BBQIcon iconTitle="bbq-icon-4" width="40" height="40"/>
          </div>
        </div>

      </div>
    </div>
  </Layout>
)

export default IndexPage
