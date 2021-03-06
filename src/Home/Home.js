import React, { Component } from 'react';
import {DepthOfFieldSnowfall} from 'react-snowflakes';
import RotatingArrow from './RotatingArrow';
import './Home.css';
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: 0
    }
  }

  enterHomeButton = () => {
    this.setState({rotate: 90});
  }

 leaveHomeButton = () => {
    this.setState({rotate: 0});
  }

  render() {

    return (
      <section id="home" className="home">
        <ScrollableAnchor id={'landing'}>
          <div className="home-wrapper">
            <div id="storm" className="canvas">

              <DepthOfFieldSnowfall count={80} style={{
                // Position must be relative or absolute,
                // because snowflakes are positioned absolutely.
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}/>

            </div>
            <div className="home-content">

              <div className="home-text-wrap">
                <div className="text">Hello, I'm<span className="name">Israel D. Matos</span>. 
                  <br/>
                  I'm a full-stack web developer.
                </div>
              </div>

              <a
                className="page-link-btn"
                href="#about"
                role="button"
                onMouseOver={this.enterHomeButton}
                onMouseLeave={this.leaveHomeButton}
              >
                <span className="btn-text">
                View my work</span>

                <RotatingArrow rotate={this.state.rotate}/>
              </a>
            </div>
          </div>
        </ScrollableAnchor>
      </section>
    )
  }
}
