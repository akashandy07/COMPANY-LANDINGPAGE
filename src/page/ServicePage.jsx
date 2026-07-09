import React from 'react'
import './ServicePage.css'
import FotterPage from '../fotter/FotterPage'

const ServicePage = () => {
    return (
        <>
            <div className='service-container'>
                <div className='max-service-container'>
                    <div className='sub-service-container'>
                        <div>
                            <h3>__ SERVICES</h3>
                            <h1>Six practices. <span>One <br />integrated team.</span></h1>
                            <p>We don't hand clients between departments. The same team that <br /> sets strategy stays through build and run — so nothing gets lost in <br />translation.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='two-service-container'>
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


            <div className='three-service-container'>
                <div className='max-service-container'>
                    <div className='sub-three-service-container'>
                        <div>
                            <h1>__How we engage</h1>
                        </div>
                    </div>


                    <div className='div-service-container'>
                        <div className='inside-service-container'>
                            <h2>Three ways to work with <br /> us.</h2>
                        </div>
                        <div>
                            <p>Most engagements start with one of these.</p>
                        </div>
                    </div>


                    <div className='two-inside-service-container'>
                        <div>
                            <h2>Advisory</h2>
                            <h1>Strategy sprint</h1>
                            <p>4–8 weeks to align leadership on direction before <br />committing budget.</p>
                        </div>
                        <div>
                            <h2>Delivery</h2>
                            <h1>Build & deploy</h1>
                            <p>Embedded team delivering a defined system, end to end.</p>
                        </div>
                        <div>
                            <h2>Partnership</h2>
                            <h1>Managed service</h1>
                            <p>Ongoing operation of a system we've built, with shared <br />accountability.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='four-service-container'>
                <div className='max-service-container'>
                    <div className='sub-four-service-container' >
                        <div>
                            <h1>Not sure which practice fits?</h1>
                            <p>Tell us the problem — we'll tell you who should be in the room.</p>

                            <button>Start Conversation</button>

                        </div>
                    </div>
                </div>
            </div>

            <FotterPage />
        </>
    )
}

export default ServicePage