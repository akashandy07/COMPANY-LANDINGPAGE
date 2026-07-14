import React from 'react'
import './AboutPage.css'
import FotterPage from '../fotter/FotterPage'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* Hero Section */}
      <div className='about-hero-container'>
        <div className='about-maxwidth'>
          <div className='about-eyebrow'>
            <p>About Aurion</p>
          </div>
          <div className='about-hero-heading'>
            <h1>Thirty-five years of helping enterprise <br />
              <span>become what's next.</span>
            </h1>
          </div>
          <div className='about-hero-subheading'>
            <p>We started as a three-person systems practice in 1991. Today we're 774,000 people across 120 countries — still answering the same question: what should this company become?</p>
          </div>
        </div>
      </div>

      {/* Stats Band */}
      <div className='stats-container'>
        <div className='about-maxwidth'>
          <div className='stats-grid'>
            <div className='stat-item'>
              <h2>1991</h2>
              <p>Founded as an independent systems practice</p>
            </div>
            <div className='stat-item'>
              <h2>774<span>K</span></h2>
              <p>People across 120+ countries</p>
            </div>
            <div className='stat-item'>
              <h2>$3.7<span>B</span></h2>
              <p>Invested in R&D yearly</p>
            </div>
            <div className='stat-item'>
              <h2>4.6<span>/5</span></h2>
              <p>Average client satisfaction score</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className='values-container'>
        <div className='about-maxwidth'>
          <div className='values-header'>
            <div>
              <p className='eyebrow'>What we believe</p>
              <h2>Four ideas that shape how we work.</h2>
            </div>
            <p className='values-subtitle'>Not values on a poster — the actual filters we apply to client work.</p>
          </div>

          <div className='values-grid'>
            <div className='value-card'>
              <p className='value-num'>01</p>
              <h3>Outcomes over hours</h3>
              <p>We're measured on what changed for the client, not time logged.</p>
            </div>
            <div className='value-card'>
              <p className='value-num'>02</p>
              <h3>Local, not generic</h3>
              <p>Every market has its own constraints. We build for the one in front of us.</p>
            </div>
            <div className='value-card'>
              <p className='value-num'>03</p>
              <h3>Built to be inherited</h3>
              <p>Your team should be able to run what we build without us in the room.</p>
            </div>
            <div className='value-card'>
              <p className='value-num'>04</p>
              <h3>Say the hard thing</h3>
              <p>If the plan won't work, we say so before the contract's signed, not after.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className='timeline-container'>
        <div className='about-maxwidth'>
          <div className='timeline-header'>
            <div>
              <p className='eyebrow'>Our story</p>
              <h2>How we got here.</h2>
            </div>
            <p className='timeline-subtitle'>A few of the turning points.</p>
          </div>

          <div className='timeline'>
            <div className='tl-row'>
              <div className='tl-year'>1991</div>
              <div className='tl-content'>
                <h4>Founded</h4>
                <p>Started as an independent systems integration practice with three founding partners.</p>
              </div>
            </div>
            <div className='tl-row'>
              <div className='tl-year'>2004</div>
              <div className='tl-content'>
                <h4>First global expansion</h4>
                <p>Opened offices across Europe and Southeast Asia, crossing 20 countries.</p>
              </div>
            </div>
            <div className='tl-row'>
              <div className='tl-year'>2013</div>
              <div className='tl-content'>
                <h4>Cloud practice launched</h4>
                <p>Built a dedicated cloud migration practice as enterprise infrastructure shifted.</p>
              </div>
            </div>
            <div className='tl-row'>
              <div className='tl-year'>2021</div>
              <div className='tl-content'>
                <h4>Applied AI practice founded</h4>
                <p>Brought AI out of R&D and into core client delivery work.</p>
              </div>
            </div>
            <div className='tl-row'>
              <div className='tl-year'>2026</div>
              <div className='tl-content'>
                <h4>774,000 people, 120+ countries</h4>
                <p>Today, serving 9 of the Fortune Global 100.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className='leadership-container'>
        <div className='about-maxwidth'>
          <div className='leadership-header'>
            <div>
              <p className='eyebrow'>Leadership</p>
              <h2>The people setting direction.</h2>
            </div>
            <p className='leadership-subtitle'>A small group, intentionally.</p>
          </div>

          <div className='lead-grid'>
            <div className='lead-card'>
              <div className='avatar'></div>
              <h4>Maya Lindqvist</h4>
              <p>Chief Executive Officer</p>
            </div>
            <div className='lead-card'>
              <div className='avatar'></div>
              <h4>Daniel Osei</h4>
              <p>Chief Operating Officer</p>
            </div>
            <div className='lead-card'>
              <div className='avatar'></div>
              <h4>Priya Raman</h4>
              <p>Chief Technology Officer</p>
            </div>
            <div className='lead-card'>
              <div className='avatar'></div>
              <h4>Felix Bauer</h4>
              <p>Chief Strategy Officer</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='cta-container'>
        <div className='about-maxwidth'>
          <div className='cta-content'>
            <h2>Want to see how we work up close?</h2>
            <p>Talk to our team about a specific transformation challenge.</p>
          </div>
        </div>
      </div>

      <div className='make-gud'>
        <div className='about-maxwidth'>
          <div className='cta-buttons'>
            <button onClick={() => navigate("/contact")} className='btn-primary'>Start a conversation</button>
            <button onClick={() => navigate("/carrer")} className='btn-outline'>See open roles</button>
          </div>
        </div>
      </div>

      <FotterPage />
    </>
  )
}

export default AboutPage