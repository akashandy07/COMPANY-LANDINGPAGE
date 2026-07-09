import React from 'react'
import './InsightPage.css'
import { useState } from 'react'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'
import six from '../assets/six.png'
import siven from '../assets/siven.png'
import egith from '../assets/egith.png'

import FotterPage from '../fotter/FotterPage'

const InsightPage = () => {
  const [show, setShow] = useState('All')

  return (
    <>
      <div className='InsightPage-container'>
        <div className='max-width-InsightPage'>
          <div className='headind-InsightPage-container'>
            <div>
              <h1>__INSIGHTS</h1>
              <p>Research and perspective<br /> from  <span> inside the work.</span></p>
              <h2>No gated reports for the sake of it — what's here is what we'd actually <br /> send a client.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className='two-InsightPage-containe'>
        <div className='max-width-InsightPage'>
          <div className='sub-two-InsightPage-containe-button'>
            <div className='button'>
              <button onClick={() => setShow('All')}>All</button>
              <button onClick={() => setShow('Strategy')}>Strategy</button>
              <button onClick={() => setShow('Cloud')}>Cloud</button>
              <button onClick={() => setShow('Applied AI')}>Applied AI</button>
              <button onClick={() => setShow('Operations')}>Operations</button>
              <button onClick={() => setShow('Security')}>Security</button>
            </div>
          </div>
        </div>
      </div>

      <div className='button-content'>
        <div className='max-width-InsightPage'>
          <div className='InsightPage-box-container'>

            {show === 'All' && (
              <div className='full-container'>
                <div className='show-first-img-content'>
                  <div>
                    <img src={one} />
                    <h1>Applied AI · Report</h1>
                    <p>Why most enterprise AI pilots never reach production — and what the 12% that do have in <br /> common.</p>
                    <h2>14 min read · Updated June 2026</h2>
                  </div>
                  <div>
                    <img src={three} />
                    <h1>Cloud</h1>
                    <p>The real cost of multi-cloud, three years in.</p>
                    <h2>8 min read</h2>
                  </div>
                </div>

                <div className='show-sec-img-content'>
                  <div>
                    <img src={two} />
                    <h1>Strategy</h1>
                    <p>What changes when your competitor is a <br /> platform, not a company.</p>
                    <h2>8 min read</h2>
                  </div>
                  <div>
                    <img src={four} />
                    <h1>Operations</h1>
                    <p>Supply chain resilience after three years of  <br /> disruption.</p>
                    <h2>8 min read</h2>
                  </div>
                  <div>
                    <img src={siven} />
                    <h1>Security</h1>
                    <p>Zero-trust isn't a product. Here's what it <br /> actually requires.</p>
                    <h2>8 min read</h2>
                  </div>
                </div>

                <div className='show-third-img-content'>
                  <div>
                    <img src={six} />
                    <h1>Strategy</h1>
                    <p>The case for slower, more deliberate <br />digital transformation.</p>
                    <h2>8 min read</h2>
                  </div>
                  <div>
                    <img src={five} />
                    <h1>Applied AI</h1>
                    <p>Where AI agents are actually ready to  <br />operate unsupervised.</p>
                    <h2>8 min read</h2>
                  </div>
                </div>
              </div>
            )}

            {show === 'Strategy' && (
              <div className='full-container'>
                <div className='show-sec-img-content'>
                  <div>
                    <img src={three} />
                    <h1>Strategy</h1>
                    <p>What changes when your competitor is a <br /> platform, not a company.</p>
                    <h2>8 min read</h2>
                  </div>
                </div>
              </div>
            )}

            {show === 'Cloud' && (
              <div className='full-container'>
                <div className='show-first-img-content'>
                  <div>
                    <img src={two} />
                    <h1>Cloud</h1>
                    <p>The real cost of multi-cloud, three years in.</p>
                    <h2>8 min read</h2>
                  </div>
                </div>
              </div>
            )}

            {show === 'Applied AI' && (
              <div className='full-container'>
                <div className='show-first-img-content'>
                  <div>
                    <img src={siven} />
                    <h1>Applied AI</h1>
                    <p>Where AI agents are actually ready to operate unsupervised.</p>
                    <h2>8 min read</h2>
                  </div>
                </div>
              </div>
            )}

            {show === 'Operations' && (
              <div className='full-container'>
                <div className='show-sec-img-content'>
                  <div>
                    <img src={four} />
                    <h1>Operations</h1>
                    <p>Supply chain resilience after three years of disruption.</p>
                    <h2>8 min read</h2>
                  </div>
                </div>
              </div>
            )}

            {show === 'Security' && (
              <div className='full-container'>
                <div className='show-sec-img-content'>
                  <div>
                    <img src={five} />
                    <h1>Security</h1>
                    <p>Zero-trust isn't a product. Here's what it <br /> actually requires.</p>
                    <h2>8 min read</h2>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <div className='last-container'>
        <div className='max-width-InsightPage'>
          <div className='sub-last-container'>
            <h1>Want this in your inbox?</h1>
            <p>One email a month. No noise.</p>
            <button>Subscribe</button>

          </div>
        </div>
      </div>
      <FotterPage />
    </>
  )
}

export default InsightPage