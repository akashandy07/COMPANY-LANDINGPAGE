import React, { useState } from 'react'
import './CarrerPage.css'
import { useSearchMovie } from '../cusstom/SearchMovie'
import { useNavigate } from 'react-router-dom'
import FotterPage from '../fotter/FotterPage'

const CarrerPage = () => {
  const {
    input, setInput,
    checkRole, handleCheckRole, roleCategories,
    checkType, handleCheckType, jobTypes,
    checkExperience, handleCheckExperience, experienceLevels,
    filteredData
  } = useSearchMovie()

  const navigate = useNavigate()
  const [toggle, setToggle] = useState(null)

  function togglefunction(id) {
    setToggle(prev => (prev === id ? null : id))
  }

  return (
    <>
      <div className='CarrerPage-container'>
        <div className='max-CarrerPage-container'>
          <div className='sub-CarrerPage-container'>
            <div className='one-content'>
              <h1>Careers</h1>
              <p>Work that shows up in <br /> <span>quarterly results</span>, not just <br /> a portfolio.</p>
              <h2>774,000 people, one standard: ship things that actually change how <br /> a business runs.</h2>
            </div>
          </div>
        </div>

        <div className='sec-CarrerPage-container'>
          <div className='max-CarrerPage-container'>
            <div className='box-CarrerPage-container'>
              <div>
                <h1>120 <span>+</span></h1>
                <p>Countries with open roles</p>
              </div>
              <div>
                <h1>38 <span>%</span></h1>
                <p>Of leadership promoted internally</p>
              </div>
              <div>
                <h1>6</h1>
                <p>Practice areas to grow into</p>
              </div>
              <div>
                <h1>4.4/ <span>5</span></h1>
                <p>Average employee satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className='third-CarrerPage-container'>
          <div className='max-CarrerPage-container'>
            <div className='third-CarrerPage-container-content'>
              <div>
                <h1>__Open roles</h1>
                <p>Find your next move.</p>
              </div>
              <div className='sub-third-CarrerPage-container-content'>
                <h1>A sample of current openings.</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='search-container'>
          <div className='max-CarrerPage-container'>
            <div className='main-search-containe'>

              {/* ---------- SIDEBAR ---------- */}
              <aside className='search-fixed'>
                <h1>Filter</h1>

                <input
                  type="text"
                  placeholder='search.........'
                  value={input}
                  onChange={e => setInput(e.target.value)}
                />

                <div className='filter-group'>
                  <h2>Role</h2>
                  {roleCategories.map(role => (
                    <label key={role} className='checkbox-filter-item'>
                      <input
                        type="checkbox"
                        checked={checkRole.includes(role)}
                        onChange={() => handleCheckRole(role)}
                      />
                      {role}
                    </label>
                  ))}
                </div>

                <div className='filter-group'>
                  <h2>Job Type</h2>
                  {jobTypes.map(type => (
                    <label key={type} className='checkbox-filter-item'>
                      <input
                        type="checkbox"
                        checked={checkType.includes(type)}
                        onChange={() => handleCheckType(type)}
                      />
                      {type}
                    </label>
                  ))}
                </div>

                <div className='filter-group'>
                  <h2>Experience</h2>
                  {experienceLevels.map(level => (
                    <label key={level} className='checkbox-filter-item'>
                      <input
                        type="checkbox"
                        checked={checkExperience.includes(level)}
                        onChange={() => handleCheckExperience(level)}
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </aside>

              {/* ---------- RESULTS ---------- */}
              <div className='job-results'>
                {filteredData.length === 0 && (
                  <p>No jobs match your filters.</p>
                )}

                {filteredData.map(job => {
                  const isOpen = toggle === job.id

                  return (
                    <div key={job.id} className='three-search-row'>
                      <h1>{job.title}</h1>

                      <div className='carrer-right-box'>
                        <div className='three-job-padding'>
                          <h1>location:{job.location}</h1>
                          <h1>type:{job.type}</h1>
                          <h1>experience:{job.experience}</h1>
                        </div>
                      </div>
                      <div className='requiredSkill'>
                        <h2>requiredSkill:{job.requiredSkill}</h2>
                      </div>

                      {/* ---------- EXPANDABLE DETAILS ---------- */}
                      {isOpen && (
                        <div className='job-details'>
                          <p><strong>Job Number:</strong> {job.jobNumber}</p>
                          <p><strong>Department:</strong> {job.department}</p>
                          <p><strong>Posted:</strong> {job.postedTime}</p>
                          <p><strong>Education:</strong> {job.educationalQualification}</p>
                          <p><strong>Summary:</strong> {job.summary}</p>
                          <pre className='job-description'>{job.description}</pre>
                          <button onClick={() => navigate("/ApplyForm", { state: { job } })}>Apply</button>
                          <button onClick={() => window.history.back()}>Back</button>
                        </div>
                      )}

                      <div className='Showmore'>
                        <button onClick={() => togglefunction(job.id)}>
                          {isOpen ? "Show less" : "Show more"}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='full-sixth-container'>
        <div className='max-CarrerPage-container'>
          <div className='full-content-sixth-container'>
            <div className='full-subbb-content-sixth-container'>
              <div>
                <h1>Why Aurion</h1>
                <p>What you actually get.</p>
              </div>

              <div className='full-subbb-content-sixth-container-twoo'>
                <h2>The practical stuff, not just the pitch.</h2>
              </div>
            </div>

            <div className='full-sec-sixth-container'>
              <div>
                <h1>Real client exposure</h1>
                <p>You're in the room with clients within your first quarter — not buried in internal tooling.</p>
              </div>
              <div>
                <h1>Practice-led growth</h1>
                <p>Move between strategy, build, and run without changing companies.</p>
              </div>
              <div>
                <h1>Global mobility</h1>
                <p>Transfer between any of our 120+ offices once you're past your first year.</p>
              </div>
              <div>
                <h1>Learning budget</h1>
                <p>Annual budget for certifications, courses, and conferences, no approval chain.</p>
              </div>
              <div>
                <h1>Parental leave</h1>
                <p>26 weeks paid, available to all parents regardless of how you became one.</p>
              </div>
              <div>
                <h1>Equity for everyone</h1>
                <p>Every full-time employee holds equity, not just senior leadership.</p>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className='final-div-in-carrer'>
        <div className='max-CarrerPage-container'>
          <div className='sub-final-div-in-carrer'>
            <h1>Don't see the right role?</h1>
            <p>Send us your resume anyway — we hire ahead of need across most practices.</p>
            <button>Get in touch</button>
          </div>
        </div>
      </div>
      <FotterPage />
    </>
  )
}

export default CarrerPage