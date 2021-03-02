import React from "react"

function Journey() {
  return (
    <section className="container nine journey">
      <h2>Software Developer Journey</h2>
      <div className="card beginner">
        <h4>Early Learning and Application</h4>
        <ul>
          <li>Hello World - First Static Website</li>
          <li>Adding Styles With CSS</li>
          <li>Adding Interactivity via HTML Elements (e.g.: form, button, prompt)</li>
          <li>Adding Interactivity via JavaScript (e.g.: event handling, dynamic DOM updates</li>
          <li>Fetching Scripts From Other Sites/CDNs (e.g.: fontawesome, jquery, bootstrap)</li>
          <li>Fetching Data From Other Sources (e.g.: remote database, API retrievals)</li>
        </ul>
      </div>

      <div className="card intermediate">
        <h4>Discovering What's Out There And Piecing It Together</h4>
        <ul>
          <li>Using Dynamic Data to Create Simple WebApps (e.g.: weather data fetch and display, random X of the day)</li>
          <li>Local Authentication and User Accounts (consider: local auth via database w/bcrypt, server sessions, CORS)</li>
          <li>Third Party Authentication (consider: OAuth, JWT)</li>
          <li>Module and Package Management and Locking (e.g.: npm/x, yarn, go mod/get, ruby gem)</li>
          <li>Distributed Version Control Systems (consider: git, merges, pull requests, branching model)</li>
          <li>Version Control Data Stores (e.g.: github, bitbucket)</li>
          <li>Coordination and Distribution of Work in a Distributed Team</li>
        </ul>
      </div>

      <div className="card proficient">
        <h4>Settling Structures Into Mental Models and Using Them To Compose New Systems</h4>
        <ul>
          <li>Releases, Version Locking, Containers (consider: Docker, CI/CD pipelines, travis, yaml)</li>
          <li>Recognition of Patterns in Software Development</li>
          <li>Reading Theory and Applying Design Patterns</li>
          <li>Coalescing Design Patterns into Components</li>
          <li>Application Performance Monitoring (consider: tooling, low-impact monitoring and exfiltration, data combinatorics)</li>
        </ul>
      </div>

      <div className="card senior">
        <h4>Moving Up The Hierarchy and Realizing Decisions Involve Tradeoffs</h4>
        <ul>
          <li>Systems Architecture Design</li>
          <li>High Availability (consider: database sharding, concurrency, elixir)</li>
        </ul>
      </div>
    </section>
  )
}

export default Journey