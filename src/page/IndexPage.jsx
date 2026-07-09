import React from 'react'
import './IndexPage.css'
import logo from '../assets/one.png'
import cardone from '../assets/cardone.png'
import cardtwo from '../assets/cardtwo.png'
import cardthree from '../assets/cardthree.png'
import FotterPage from '../fotter/FotterPage'



const IndexPage = () => {
  return (
    <>
      <div className="index-container">
        <div className="index-maxwidth">
          <div className='index-logo'>
            <h1>--- Global Technology & Strategy Consulting</h1>
          </div>
          <div className='index-heading'>
            <p>We help the world's <br />
              biggest companies <br />
              <span> reinvent what's next.</span>
            </p>
          </div>
          <div className='index-subheading'>
            <p>From strategy to execution, Aurion partners with enterprise  <br />leaders to turn disruption into advantage — across cloud, AI, <br />and operations.</p>
          </div>
          <div className='btn'>
            <button>Start a conversation</button>
            <button className='btnn'>See our work</button>
          </div>
          <div className='index-image'>
            <img src={logo} alt="index" />
          </div>
        </div>
      </div>

      <div className='counter-container'>
        <div className='index-maxwidth'>
          <div className='counter'>
            <div className='nnnn'>
              <h1>774<span>K</span></h1>
              <p>People across 120+ countries</p>
            </div>
            <div className='nnnn'>
              <h1>9<span>in10</span></h1>
              <p>Fortune Global 100 clients we server</p>
            </div>
            <div className='nnnn'>
              <h1>$3.7<span>B</span></h1>
              <p>People across 120+ countries</p>
            </div>
            <div>
              <h1>35</h1>
              <p>Years partnering with global enterprise</p>
            </div>
          </div>
        </div>
      </div>


      <div className='third-container'>
        <div className='index-maxwidth'>
          <div className='child-third-container'>
            <div>
              <h1>__WHAT WE DO</h1>
              <p>Capability built for <br />enterprise-scale <br />transformation.</p>
            </div>
            <div>
              <h3>Six practices, one integrated team — built to <br /> move from idea to impact without handoffs.</h3>
            </div>
          </div>

        </div>

      </div>

      <div className='fourth-container'>
        <div className='index-maxwidth'>
          <div className='fourth-container-sub'>
            <div>
              <p>01</p>
              <h1>Strategy & Consulting</h1>
              <p>Define where to play and how to win, backed by <br /> data not instinct.</p>
              <h2>Explore</h2>
            </div>
            <div>
              <p>02</p>
              <h1>Cloud & Infrastructure</h1>
              <p>Build and operate scalable, secure, and efficient cloud solutions.</p>
              <h2>Explore</h2>
            </div>
            <div>
              <p>03</p>
              <h1>Artificial Intelligence</h1>
              <p>Develop and deploy AI-driven solutions to automate and enhance business processes.</p>
              <h2>Explore</h2>
            </div>
            <div>
              <p>04</p>
              <h1>Artificial Intelligence</h1>
              <p>Develop and deploy AI-driven solutions to automate and enhance business processes.</p>
              <h2>Explore</h2>
            </div>
            <div>
              <p>05</p>
              <h1>Artificial Intelligence</h1>
              <p>Develop and deploy AI-driven solutions to automate and enhance business processes.</p>
              <h2>Explore</h2>
            </div>
            <div>
              <p>06</p>
              <h1>Artificial Intelligence</h1>
              <p>Develop and deploy AI-driven solutions to automate and enhance business processes.</p>
              <h2>Explore</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='fifth-container'>
        <div className='index-maxwidth'>
          <div className='fifth-container-heading'>
            <div>
              <h2>__Client work</h2>
              <p>Outcomes our clients <br /> measure in quarters,<br /> not years.</p>
            </div>
            <div className='sub-fifth-container'>
              <h1>A look at how transformation actually plays out.</h1>
            </div>
          </div>
          <div className='fifth-img'>
            <img src={cardone} alt="" />
            <div>
              <img src={cardtwo} alt="" />
              <img src={cardthree} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='sixth-container'>
        <div className='index-maxwidth'>
          <div className='sub-sixth-container'>
            <div>
              <h3>Where we are</h3>
              <p>Local teams,<br />global standard.</p>
            </div>
            <div>
              <h2>120+ offices, one way of working.</h2>
            </div>
          </div>
          <div className='sixth-container-box'>
            <div>
              <p>New York</p>
              <h1>North America</h1>
            </div>
            <div>
              <p>London</p>
              <h1>Europe</h1>
            </div>
            <div>
              <p>Bengaluru</p>
              <h1>South Asia</h1>
            </div>
            <div>
              <p>Singapore</p>
              <h1>Southeast Asia</h1>
            </div>
            <div>
              <p>Sydney</p>
              <h1>Oceania</h1>
            </div>
            <div>
              <p>São Paulo</p>
              <h1>South America</h1>
            </div>
            <div>
              <p>Dubai</p>
              <h1>Middle East</h1>
            </div>
            <div>
              <p>Tokyo</p>
              <h1>East Asia</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='siventh-container'>
        <div className='index-maxwidth'>
          <div className='sub-siventh-container'>
            <h1>Let's build what's next,<br /> together.</h1>
            <p>Tell us where you're headed — we'll help you get there faster.</p>
          </div>

          <div className='siventh-btn'>
            <button className='bu'>Start a conversation</button>
            <button>Download capability deck</button>
          </div>

        </div>
      </div>
      <FotterPage />

    </>


  )
}

export default IndexPage