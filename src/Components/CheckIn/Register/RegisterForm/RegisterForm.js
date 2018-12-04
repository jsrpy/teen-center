import React from 'react';

// fields to register new students
const registerForm = (props) => (
  <form autoComplete="off">
    <h2>Register New Student</h2>
    <h3>No student will ever see anything except your name! <br/>All fields required.</h3>
    <label htmlFor="id">Your school ID - <span className="highlight">Careful! Your ID can't be changed!</span></label>
    <input type="text" autoFocus
      name="id"
      onChange={(e) => props.updateField(e, 'id')}
      placeholder="School ID"
      value={props.state.id} />

    <label>Your first and last name:</label>
    <input type="text"
      onChange={(e) => props.updateField(e, 'name')}
      placeholder="First AND last"
      value={props.state.name} />

    <label>Your cell phone number:</label>
    <input type="text"
      onChange={(e) => props.updateField(e, 'phone')}
      placeholder="(###) ###-####"
      value={props.state.phone} />

    <label>Your current school:</label>
    <input type="text"
      onChange={(e) => props.updateField(e, 'school')}
      placeholder="ex: BHS"
      value={props.state.school} />

    <label>Your graduation year:</label>
    <input type="text"
      onChange={(e) => props.updateField(e, 'year')}
      placeholder="yyyy"
      value={props.state.year} />

    <label>Parent/guardian name(s):</label>
    <input type="text"
      onChange={(e) => props.updateField(e, 'parents')}
      placeholder="First and last name(s)"
      value={props.state.parents} />

    <label>Parent/guardian cell phone numbers:</label>
    <input type="text"
      onChange={(e) => props.updateField(e, 'parentPhone')}
      placeholder="(###) ###-####"
      value={props.state.parentPhone} />

    <label htmlFor="agree">Check to agree:</label>
    <input 
      type="checkbox" 
      name="agree"
      value={props.state.agree} 
      onChange={props.toggleCheckbox} /><span className="checkbox-text">I have received the rules for the Benicia Teen Center and agree to follow them</span><br/>

    <button onClick={(e) => props.validateInfo(e, 'regOnly')}>Register Only</button>
    <button onClick={(e) => props.validateInfo(e, 'regAndSignIn')}>Register and Sign In</button>
    <a onClick={props.toggleRegister}>(cancel)</a> {/* eslint-disable-line */}
  </form>
);

export default registerForm;