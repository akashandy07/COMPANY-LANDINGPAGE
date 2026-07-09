import React, { useReducer } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './ApplyForm.css'

const initialState = {
  name: '',
  email: '',
  password: '',
  experiance: '',
}

// reducer takes (state, action) — not (action, type)
function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      // action.field tells us which key to update, action.value is the new value
      return { ...state, [action.field]: action.value }

    case 'RESET':
      return initialState

    default:
      return state
  }
}

const ApplyForm = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const job = location.state?.job // may be undefined if page was refreshed directly

  // useReducer(reducer, initialState) — reducer comes first
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);

  function handleChange(e) {
    const { name, value } = e.target
    dispatch({ type: 'SET_FIELD', field: name, value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert("We GetBack Soon")

  }

  return (
    <div className="apply-modal">
      <form onSubmit={handleSubmit}>
        <h2> Role: {job?.title ?? 'Apply'}</h2>

        <input
          type="text"
          name="name"
          placeholder="enter ur name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="enter ur email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="enter ur password"
          value={state.password}
          onChange={handleChange}
        />
        <textarea
          name="experiance"
          placeholder="enter ur experience"
          value={state.experiance}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <button
          className="apply-close-btn"
          type="button"
          onClick={() => navigate(-1)}
        >
          close
        </button>
      </form>

      {/* just to show it's working — remove if you don't need it */}
      <pre>{JSON.stringify(state.data, null, 2)}</pre>
    </div>
  )
}

export default ApplyForm