// @flow

import React from 'react'
import axios from 'axios'

import { inputChange } from '../../forms'

class SignupForm extends React.Component {
  state = {
    email: '',
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          value={this.state.email}
          onChange={inputChange.call(this, 'email')}
          required
          className="input"
          type="email"
          placeholder="My best email is ..."
        />
        <button
          className="button"
          style={{
 fontWeight: 'bold', fontSize: 24, padding: 20, marginBottom: 30,
}}
        >
          keep me updated Adam
        </button>
      </form>
    )
  }

  submit = (evt) => {
    evt.preventDefault()
    axios.post('/api/mailChimp/13c6d60bb8/subscribe/', {
      email_address: this.state.email,
      status: 'subscribed',
      merge_fields: {},
    })
      .then(({ data }) => {
        alert(`subscribed email: ${data.email_address} \n Please check your email! :)`)
      })
      .catch(err => alert(`there was an error: ${err.message}`))
  }
}

export default SignupForm
