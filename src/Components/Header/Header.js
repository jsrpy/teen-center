import React from 'react';
import Authorize from '../Authorize/Authorize';

const header = (props) => (
  <header>
    <h1>Benicia Teen Center</h1>
    <p className="subheader">Powered by the Kyle Hyland Foundation for Teen Support</p>
    <Authorize 
      user={props.user} 
      account={props.account}
      setAccount={props.setAccount}
      message={props.message}
      setMessage={props.setMessage} />
    <p className="message">{props.message}</p>
  </header>
);

export default header;