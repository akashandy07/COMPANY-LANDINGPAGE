import React from 'react'
import './FotterPage.css'

const FotterPage = () => {
    return (
        <>
            <div className='fotter-container'>
                <div className='max-width-fotter'>
                    <div className='first-fotter'>
                        <div className='footerlogo'>
                            <h2>.aurion</h2>
                            <p>Global technology and strategy<br />consulting for enterprise <br />transformation.</p>
                        </div>
                        <div className='sub-footerpage'>
                            <div>
                                <h4>Services</h4>
                                <a href='/services'>Strategy</a>
                                <a href='/services'>Cloud</a>
                                <a href='/services'>Applied AI</a>
                                <a href='/services'>Security</a>
                            </div>
                            <div>
                                <h4>Company</h4>
                                <a href='/about'>About</a>
                                <a href='/insights'>Newsroom</a>
                                <a href='/careers'>Careers</a>
                                <a href='/about'>Investors</a>
                            </div>
                            <div>
                                <h4>Insights</h4>
                                <a href='/insights'>Research</a>
                                <a href='/insights'>Reports</a>
                                <a href='/insights'>Podcasts</a>
                            </div>
                            <div>
                                <h4>Connect</h4>
                                <a href='#'>LinkedIn</a>
                                <a href='/contact'>Contact us</a>
                                <a href='/contact'>Find an office</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='down-footer'>
                <div className='max-width-fotter'>
                    <div className='final-footer'>
                        <div>
                            <p>© 2026 Aurion Global, Inc.</p>
                        </div>
                        <div>
                            <p>Privacy · Terms · Cookie settings</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FotterPage