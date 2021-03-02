import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./CV.css"

const CV = () => (
  <Layout>
    <SEO title="CV" />
    <div className="nine center cv-container">
      <section className="professional">
        <h2>Professional History</h2>

        <div className="card">
          <div className="info">
            <h3>Cofense, Inc.</h3>
            <span>Portland, OR (Remote)</span>
            <span>Services Delivery Manager</span>
            <span>December, 2017 - present (current position)</span>
          </div>
          <div>
            <p>Project Manage implementation and training for all new customers for a SaaS CyberSecurity organization. Gather technical requirements, coordinate provisioning, installation, setup and configuration of security appliance and other SaaS platforms. Track feature development and communicate roadmap. Provide overview, onboarding, and other training on security software.</p>
          </div>
        </div>

        <div className="card">
          <div className="info">
            <h3>Codementor</h3>
            <span>Portland, OR (Remote)</span>
            <span>Freelance Software Developer and Tutor</span>
            <span>November, 2017 - present</span>
          </div>
          <div>
            <span>Profile Link: <a href="https://www.codementor.io/tomgeraghty">https://www.codementor.io/tomgeraghty</a></span>
            <p>Provide assistance on demand for a variety of customer needs. Provide training and mentorship for students and those wanting to expand their knowledge of different programming paradigms. Provide code reviews and bug fixes for production websites. Quickly assess issues, provide estimates of work and time involved in remediation while maintaining transparency through open communication. </p>
          </div>
        </div>

        <div className="card">
          <div className="info">
            <h3>Multnomah County Department of County Human Services</h3>
            <span>Aging, Disability, and Veteran Services Division </span>
            <span>Portland, OR</span>
            <span>Case Manager 2</span>
            <span>September, 2015 - October, 2017</span>
          </div>
          <div>
          <p>
            Provide services to clients which could include eligibility assessment and intake for Oregon Supplemental Income Program (OSIP), Presumptive Medicaid, SNAP, and the Oregon Health Plan. Assess client needs and risk status through home visits, phone calls, and office consultations. Connect clients with resources appropriate to their needs. Develop comprehensive, client-centered care plans. Strong interpersonal, communication, and organizational skills. Commitment to delivering person-centered care. Ensure program integrity by following local practice and procedure, Oregon administrative rules, as well as State and Federal policy and law. Keep up with changing rules, policies and procedures. Prioritize workload and deadlines as new, emergent tasks arise. Communicate complex policy to individuals with different communication styles and abilities. Work with business providers, law enforcement, and the general public.
          </p>
          </div>
        </div>

        <div className="card">
          <div className="info">
            <h3>State of Oregon </h3>
            <span>Department of Human Services</span>
            <span>Portland, OR</span>
            <span>Human Services Specialist 3</span>
            <span>June, 2010 - September 2015</span>
          </div>
          <div>
            <p>
              Determine eligibility for public assistance programs such as: SNAP (Food Stamps), ERDC (Employment Related Day Care), TANF (Temporary Assistance for Needy Families), and the Oregon Health Plan (Medicaid). Connect clients with resources appropriate to their needs. Strong interpersonal, communication, and organizational skills. Ensure program integrity by following local practice and procedure, Oregon administrative rules, as well as State and Federal policy. Keep up with changing rules, policies and procedures. Prioritize workload and deadlines as new, emergent tasks arise. Communicate complex policy to individuals with different communication styles and abilities.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="info">
            <h3>Tomayo Web Development</h3>
            <span>Co-founder</span>
            <span>Portland, OR</span>
            <span>January 2015 - December 2015</span>
          </div>
          <div>
            <p>
              Partnership focused on developing websites for local musicians, vendors, non-profit and other organizations. Utilized various Content Management Systems such as Drupal, WordPress, Concrete5, etc. Created various *AMP (typically LAMP) stacks for website development. Worked in Linux, Mac, and Windows development ecosystems. Utilized content versioning control through Git. Followed paradigm of Development, Testing, and Production environments to ensure site reliability during development and updates/upgrades and fallbacks should errors arise.
            </p>
          </div>
        </div>

      </section>

      <section className="coursework">
        <h2>Tech Relevant Coursework</h2>

        <div className="card">
          <h3>CS50x</h3>
          <span>edX/Harvard/Yale Collaboration.</span>
          <p>Introduction to the intellectual enterprises of computer science and the art of programming. This course teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include: C, Python, SQL, and JavaScript plus CSS and HTML.</p>
        </div>

        <div className="card">
          <h3>CS101</h3>
          <span>University of Puget Sound.</span>
          <p>Introduction to Computer Science and general coding principles. Language utilized: Java. Textbook utilized: "Objects First with Java - A Practical Introduction Using BlueJ."</p>
        </div>

        <div className="card">
          <h3>CAS111</h3>
          <span>Portland Community College.</span> 
          <p>CMS Website Creation. Primary language utilized: PHP. We learned to create a custom-built Content Management System (CMS) utilizing PHP, HTML, and CSS with a MySQL database used to store persistent user data. </p>
        </div>

        <div className="card">
          <h3>Team Treehouse Online Coding Training</h3>
          <span>Student Profile: <a href="https://teamtreehouse.com/tomgeraghty2">https://teamtreehouse.com/tomgeraghty2</a></span>

          <h4>Track Completed: Web Design </h4>
          <span>Track Description: <a href="https://teamtreehouse.com/tracks/web-design">https://teamtreehouse.com/tracks/web-design</a></span>
          <p>Areas of Study Include: HTML5, CSS3, Design Foundations, Adobe’s Photoshop and Illustrator, Logo Design, Brand Identity, UX, SEO, Sass/CSS preprocessors and more.</p>

          <h4>Track Completed: Front End Web Development </h4>
          <span>Track Description: <a href="https://teamtreehouse.com/tracks/front-end-web-development">https://teamtreehouse.com/tracks/front-end-web-development</a></span>
          <p>Areas of study include all those listed above in Web Design, plus: JavaScript, jQuery, Responsive Layouts, AJAX Basics, Object-Oriented JavaScript, Accessibility, Website Optimization, Console Foundations, Git Basics, Front End Performance Optimization and more.</p>
        </div>

      </section>

    </div>
  </Layout>
)

export default CV
