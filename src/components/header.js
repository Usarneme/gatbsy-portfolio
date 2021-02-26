import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { QuickStartCanvas } from "react-pts-canvas"
import { Create, Group, Pt } from "pts"

import ImageProfile from "../components/image_components/image_profile"
import "./header.css"

function Header() {
  const [points, setPoints] = useState([])
  const [follower, setFollower] = useState()

  useEffect(() => {
    setPoints(new Group())
    setFollower(new Pt())
  },[])

  return (  
    <header>
      <div className="header-container">
        <div className="canvas-container">
          <QuickStartCanvas
            background="#252934"
            onStart={(bound, space) => {
              const width = space.innerBound.bottomRight[0]
              const height = space.innerBound.bottomRight[1]
              const clusterBoundary = space.innerBound.clone()
              // many dots start off-screen then rotate in since the canvas shape is unlikely to be a perfect square 
              // ie corrects for vert rect for typical mobile and horiz rect for typical desktop monitors
              clusterBoundary.bottomRight = Float32Array.from([space.innerBound.bottomRight[0] + width/2, space.innerBound.bottomRight[1] + height/2])
              clusterBoundary.topLeft = Float32Array.from([space.innerBound.topLeft[0] - width/2, space.innerBound.topLeft[1] - height/2])
              const pts = Create.distributeRandom( clusterBoundary, 1000 )
              setFollower(space.center)
              setPoints(pts)
            }}
            resize={true}
            // play={false}
            onAnimate={(space, form, time, ftime) => {
              let mult = 1 // rotation speed multiplier
              const colors = ["#aaa","#bbb","#ccc","#abc","#bca","#cab","#aabbaa","#bbaabb","#f03", "#09f", "#0c6","#242D35","#FB6396","#94CF95","#F692B2","#6EC1D6","#CD84C8","#7FE4D2"]
              let newFollower = follower
              newFollower.add( space.pointer.$subtract( newFollower ).divide(20) )
              setFollower(newFollower)

              // to quicken rotation on smaller screens, it is perceived as moving slower on smaller screens
              if (space.bound[1][0] < 480) mult = 4 

              if (points && points.length > 0) { 
                points.rotate2D( 0.0004 * mult, space.center )          
                points.forEach( (p, i) => { 
                  let newFollower = follower
                  let mag = newFollower.$subtract( p ).magnitude()
                  let scale = Math.min( 1.25, Math.abs( 1 - ( mag / space.center.y ) ) )
                  form.fillOnly( colors[ i % colors.length ] ).point( p, scale % 4 + 0.5, "circle" )
                })
              }
            }}
          />
          <span className="overlay-span">
            <div>
              <h1>Hi, I'm Tom!</h1>
              <div className="flex">
                <ImageProfile className="profile-image" />
              </div>
              <p>Full Stack Software Developer, Designer, Problem-Solver</p>
            </div>
          </span>
        </div>

        <nav className="nav">
          <Link to="/" className="nav-link" activeClassName="active-nav">Home</Link>
          <Link to="/CV/" className="nav-link" activeClassName="active-nav">CV</Link>
          <Link to="/Projects/" className="nav-link" activeClassName="active-nav">Projects</Link>
        </nav>

      </div>
    </header>
  )
}

export default Header
