import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { QuickStartCanvas } from "react-pts-canvas"
import { Create, Group, Line, Pt, Rectangle } from "pts"

import ImageProfile from "../components/image_profile"
import "./header.css"


class Header extends React.Component {
  constructor(props) {
    super(props)
    
    const chartData = []
    for (let i=-5; i<5; i+=0.1) {
      chartData.push( (1 / Math.sqrt( 2 * Math.PI * 0.2 ) ) * Math.exp( -(i-0)*(i-0)/(2*0.2) ) )
    }

    this.state = {
      chartData: chartData,
      lines: [],
      pts: [],
      right: true,
      count: 0
    }
  }


  render() {
    return (  
      <header>
        <nav className="nav fixed">
          <Link to="/" className={typeof window !== "undefined" && (window.location.pathname !== "/Projects/" && window.location.pathname !== "/CV/") ? "nav-link active-nav" : "nav-link"}>Home</Link>
          <Link to="/CV/" className={typeof window !== "undefined" && window.location.pathname === "/CV/" ? "nav-link active-nav" : "nav-link"}>CV</Link>
          <Link to="/Projects/" className={typeof window !== "undefined" && window.location.pathname === "/Projects/" ? "nav-link active-nav" : "nav-link"}>Projects</Link>
        </nav>
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
                this.setState({pts: [...pts]})
              }}
              resize={true}
              // play={false}
              onAnimate={ (space, form, time, ftime) => {
                const colors = ["#bbaabb", "#bbabbb"]
                const line = new Line([0,0],space.innerBound.bottomRight)

                if (this.state.pts && this.state.pts.length > 0) {

                  const group = Group.fromPtArray(this.state.pts)
                  group.rotate2D(0.0005, space.bound.center) 
                  
                  form
                    .stroke(colors[Math.floor(ftime) % 2])
                    .fill(colors[Math.floor(ftime) % 2])
                    // .line(res)
                    .points(this.state.pts, 1, "circle")

                }

                // console.log(space.bound)
                // console.log(Object.keys(args))
                // 0: "id"
                // 1: "bound"
                // 2: "_time"
                // 3: "players"
                // 4: "playerCount"
                // 5: "_animID"
                // 6: "_pause"
                // 7: "_refresh"
                // 8: "_pointer"
                // 9: "_isReady"
                // 10: "_playing"
                // 11: "_pressed"
                // 12: "_dragged"
                // 13: "_hasMouse"
                // 14: "_hasTouch"
                // 15: "_pixelScale"
                // 16: "_autoResize"
                // 17: "_bgcolor"
                // 18: "_offscreen"
                // 19: "_initialResize"
                // 20: "_canvas"
                // 21: "_container"
                // 22: "_ctx"

                // _animID: -1
                // _autoResize: true
                // _bgcolor: "#9ab"
                // _canvas: <canvas class="pts-react-canvas" width="1789" height="422" style="width: 894px; height: 211px;">​
                // _container: <div class="pts-react">​
                // _ctx: CanvasRenderingContext2D { mozTextStyle: "14px sans-serif", mozImageSmoothingEnabled: true, globalAlpha: 1, … }
                // _dragged: false
                // _hasMouse: true
                // _hasTouch: true
                // _initialResize: false
                // _isReady: true
                // _offscreen: false
                // _pause: false
                // _pixelScale: 2
                // _playing: false
                // _pointer: Float32Array [ 447.29998779296875, 105.55000305175781 ]
                // _pressed: false
                // _refresh: true
                // _time: Object { prev: 1182.14, diff: 26.440000000000055, end: -1 }
                // bound: Array [ Float32Array(2), Float32Array(2) ]
                // id: "pts_existing_space"
                // playerCount: 2
                // players: Object { pts_existing_space0: {…}, pts_existing_space1: {…} }

                // console.log(space)
                // _animID: 1406
                // _autoResize: true
                // _bgcolor: "#9ab"
                // _canvas: <canvas class="pts-react-canvas" width="2592" height="429" style="width: 1296px; height: 214px;">​
                // _container: <div class="pts-react">​
                // _ctx: CanvasRenderingContext2D { mozTextStyle: "10px sans-serif", mozImageSmoothingEnabled: true, globalAlpha: 1, … }
                // _dragged: false
                // _hasMouse: true
                // _hasTouch: true
                // _initialResize: false
                // _isReady: true
                // _offscreen: false
                // _pause: false
                // _pixelScale: 2
                // _playing: true
                // _pointer: Float32Array [ 666.2000122070312, 198.5 ]
                // _pressed: false
                // _refresh: true
                // _time: Object { prev: 94748.18, diff: 16.719999999986612, end: -1 }
                // bound: Array [ Float32Array(2), Float32Array(2) ]
                // id: "pts_existing_space"
                // playerCount: 2
                // players: Object { pts_existing_space0: {…}, pts_existing_space1: {…} }

                // space.bound =>
                // 0: Float32Array [ 14.5, 14.5 ]
                // 1: Float32Array [ 1310.5, 229 ]
                // _bottomRight: Float32Array [ 1310.5, 229 ]
                // _center: Float32Array [ 662.5, 121.75 ]
                // _inited: true
                // _size: Float32Array [ 1296, 214.5 ]
                // _topLeft: Float32Array [ 14.5, 14.5 ]
                // length: 2


              }}
            />
            <span className="overlay-span">
              <ImageProfile />
            </span>
          </div>

        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Tom's Portfolio and Projects`,
}

export default Header
