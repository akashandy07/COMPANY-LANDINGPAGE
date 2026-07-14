import React from 'react'
import './ContactPage.css'
import FotterPage from '../fotter/FotterPage'
import { useNavigate } from 'react-router-dom'

const ContactPage = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* Hero Section */}
      <div className='contact-hero-container'>
        <div className='contact-maxwidth'>
          <div className='contact-eyebrow'>
            <p>__Contact</p>
          </div>
          <div className='contact-hero-heading'>
            <h1>Tell us where you&apos;re <span>headed.</span></h1>
          </div>
          <div className='contact-hero-subheading'>
            <p>Whether it&apos;s a specific project or a first conversation about strategy, the right person will get back to you within one business day.</p>
          </div>
        </div>
      </div>

      {/* Form + Info Section */}
      <div className='contact-form-container'>
        <div className='contact-maxwidth'>
          <div className='contact-grid'>

            {/* Left — Form */}
            <div className='contact-form-col'>
              <div className='form-field'>
                <label htmlFor='name'>Full name</label>
                <input type='text' id='name' placeholder='Jordan Lee' />
              </div>

              <div className='form-field'>
                <label htmlFor='email'>Work email</label>
                <input type='email' id='email' placeholder='jordan@company.com' />
              </div>

              <div className='form-field'>
                <label htmlFor='company'>Company</label>
                <input type='text' id='company' placeholder='Company name' />
              </div>

              <div className='form-field'>
                <label htmlFor='practice'>Which practice is this about?</label>
                <select id='practice'>
                  <option>Strategy &amp; Consulting</option>
                  <option>Cloud &amp; Infrastructure</option>
                  <option>Applied AI</option>
                  <option>Operations</option>
                  <option>Experience Design</option>
                  <option>Security</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div className='form-field'>
                <label htmlFor='message'>What are you trying to solve?</label>
                <textarea id='message' placeholder="A few sentences on the problem you're facing"></textarea>
              </div>

              <button
                onClick={() => {
                  alert('Your Message Sent Successfully');
                  navigate("/");
                }}
                className='contact-end-btn'
                type='button'
              >
                Send message
              </button>
            </div>

            {/* Right — Contact Info */}
            <div className='contact-info-col'>
              <div className='contact-info-item'>
                <h4>General inquiries</h4>
                <p><a href='mailto:hello@aurion.example'>hello@aurion.example</a></p>
              </div>

              <div className='contact-info-item'>
                <h4>Press</h4>
                <p><a href='mailto:press@aurion.example'>press@aurion.example</a></p>
              </div>

              <div className='contact-info-item'>
                <h4>Careers</h4>
                <p><a href='/careers'>See open roles →</a></p>
              </div>

              <div className='contact-info-item'>
                <h4>Headquarters</h4>
                <p>One Meridian Plaza<br />New York, NY 10010</p>
              </div>

              <div className='contact-info-item'>
                <h4>Response time</h4>
                <p>Within 1 business day</p>
              </div>
            </div>

          </div>
        </div>
      </div >

      {/* Offices Section */}
      < div className='offices-container' >
        <div className='contact-maxwidth'>
          <div className='offices-header'>
            <div>
              <p className='eyebrow'>Find an office</p>
              <h2>120+ locations, one team.</h2>
            </div>
          </div>

          <div className='office-list'>
            <div className='office-item'><h4>New York</h4><p>North America</p></div>
            <div className='office-item'><h4>London</h4><p>Europe</p></div>
            <div className='office-item'><h4>Bengaluru</h4><p>South Asia</p></div>
            <div className='office-item'><h4>Singapore</h4><p>Southeast Asia</p></div>
            <div className='office-item'><h4>Sydney</h4><p>Oceania</p></div>
            <div className='office-item'><h4>São Paulo</h4><p>South America</p></div>
            <div className='office-item'><h4>Dubai</h4><p>Middle East</p></div>
            <div className='office-item'><h4>Tokyo</h4><p>East Asia</p></div>
          </div>
        </div>
      </div >

      <FotterPage />
    </>
  )
}

export default ContactPage