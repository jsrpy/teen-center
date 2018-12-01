import React, {Component} from 'react';

class StudentItem extends Component {
  state = {
    updatedContent: this.props.content
  }

  // update state with contents of input field
  handleTermChange = (e) => {
    this.setState({ updatedContent: e.target.value })
    if (this.props.message) this.props.setMessage('');
  }

  toggleVerified = (e) => {
    this.setState({ updatedContent: e.target.checked })
    this.props.updateRecord(e.target.checked, this.props.id, this.props.field);
  }

  sendUpdate = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
      this.props.updateRecord(e.target.value, this.props.id, this.props.field);
    }
  }

  render() {
    let inputField = null;
    if (this.props.field === 'verified') {
      inputField = (
        <input type="checkbox"
          onChange={(e) => this.toggleVerified(e)}
          checked={!!this.state.updatedContent} />
      )
    } else {
      inputField = (
        <input type="text"
          className={this.props.field}
          onChange={this.handleTermChange}
          onKeyPress={(e) => this.sendUpdate(e)}
          defaultValue={this.state.updatedContent} />
      )
    }
    return (
      <React.Fragment>
        {inputField}
      </React.Fragment>
    )
  }
}

export default StudentItem;