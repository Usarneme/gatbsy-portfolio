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
            <h3>Portland Refugee Support Group</h3>
            <span>Portland, OR (Remote)</span>
            <span>Software Developer, Strategic Partnerships Planning Committee Member</span>
            <span>June, 2020 - present</span>
          </div>
          <div>
            <h4>Responsibilities</h4>
            <ul>
              <li>Non-Profit volunteer wearing many hats; involved in strategic planning, program creation, data modeling, data gathering, application creation, application monitoring, member strategic partnerships initiative</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>Co-created Client Intake Survey application to gather data for families joining PRSG: <a href="https://survey.pdxrsg.org">https://survey.pdxrsg.org.</a></li>
              <li>Created ETL (extract, transform, load) utility for migration of gathered data into CRM</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="info">
            <h3>Cofense, Inc.</h3>
            <span>Portland, OR (Remote)</span>
            <span>Services Delivery Manager</span>
            <span>December, 2017 - November, 2019</span>
          </div>
          <div>
            <h4>Responsibilities</h4>
            <ul>
              <li>Manage delivery of contracted Professional Services (ie: define scope, tasks, timeline, and deliverables)</li>
              <li>Lead implementation of and training on all SaaS products</li>
              <li>Project manage implementation using PMI standards</li>
              <li>Respond within SLAs to emergent, highly variable, technical challenges</li>
              <li>Provide guidance on infrastructure requirements and setup (eg: virtual machine and server specifications)</li>
              <li>Conduct customer infrastructure investigation, demo and training of software, upsells, reviewed contracts</li>
              <li>Work closely with all business units: engineering, sales, procurement, PM, C-Suite, and incident response</li>
              <li>Tailor process for differing organizations eg: US and international governments, universities, and corporations</li>
              <li>Create forecasting, project timeline, and other reports for sales, professional services, and senior management</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>Ensured delivery of $4.4Million+ in contracted software and services</li>
              <li>Customers included over 50% of the Fortune 1,000 List, national defense departments, tech firms, etc.</li>
              <li>Built internal processes and utilities to automate tasks to manage hundreds of customers with a team of 2-3</li>
              <li>Worked with development team on build and revision of <a href="https://community.cofense.com/">Cofense Community website (https://community.cofense.com/).</a>​</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="info">
            <h3>Codementor</h3>
            <span>Portland, OR (Remote)</span>
            <span>Freelance Software Developer and Tutor</span>
            <span>November, 2017 - present</span>
            <span>Profile Link: <a href="https://www.codementor.io/tomgeraghty">https://www.codementor.io/tomgeraghty</a></span>
          </div>
          <div>
            <h4>Responsibilities</h4>
            <ul>
              <li>Assess bugs/issues in extant codebases</li>
              <li>Create level of effort estimates for contract bids</li>
              <li>Provide code reviews and bug fixes</li>
              <li>Provide training and mentorship for students and those wanting to expand their knowledge of different programming paradigms</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>Fixed a show-stopper UI bug the day before a major sale was to begin for online retailer</li>
              <li>Provided processing model theory information to Stanford TA during mentorship session</li>
            </ul>
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
            <h4>Responsibilities</h4>
            <ul>
              <li>Promote independence, dignity, and choice in the lives of older adults, people with disabilities, and veterans</li>
              <li>Assess client needs and risk status through home visits, phone calls, and office consultations</li>
              <li>Develop and deliver comprehensive, client-centered care plans</li>
              <li>Ensure program integrity by following local practices, Oregon administrative rules, and State and Federal laws</li>
              <li>Prioritize workload and deadlines as new, emergent situations arise</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>Managed caseload of 100+ high-needs individuals without ever missing an assessment renewal deadline</li>
              <li>Volunteered for other duties as assigned and earned “Technology Learning Leader” designation</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="info">
            <h3>State of Oregon - Department of Human Services</h3>
            <span>Portland, OR</span>
            <span>Human Services Specialist 3</span>
            <span>June, 2010 - September 2015</span>
          </div>
          <div>
            <h4>Responsibilities</h4>
            <ul>
              <li>Determine eligibility for families to receive State public assistance, specifically for SNAP (Food Stamps), ERDC (Employment Related Day Care), TANF (Temporary Assistance for Needy Families), and the Oregon Health Plan (OHP/Medicaid)</li>
            </ul>
            <h4>Accomplishments</h4>
            <ul>
              <li>Provided food, housing, childcare and medical assistance to tens of thousands of families in my community</li>
              <li>Built macros to automate areas of the eligibility assessment; which tools were implemented statewide saving untold hours and public funds by increasing accuracy and speed of assessments</li>
            </ul>
          </div>
        </div>

      </section>

      <section className="coursework">
        <h2>Tech Relevant Coursework</h2>

        <div className="card">
          <h3>Epicodus C#/.NET Coding Bootcamp</h3>
          <span><a href="https://www.epicodus.com/">https://www.epicodus.com/</a></span>
          <p>C#/.NET Programming Course. Full Time (8-hours per day, 5 days per week) program. Estimated graduation date Sept, 2021. Worked remotely during COVID utilizing industry standard remote collaboration tools. Daily pair programming and weekly solo projects completed demonstrating skills ranging from ECMAScript, HTML5, CSS3, jQuery, Bootstrap, React, collaboration on distributed codebases via git, C#/.NET, and more!</p>
        </div>

        <div className="card">
          <h3>CS50x</h3>
          <span>edX & Harvard Collaboration.</span>
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
