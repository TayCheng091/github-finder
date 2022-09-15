import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") return;
    this.props.searchUsers(this.state.text);
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn  btn-dark btn-block'
        />
      </form>
    );
  }
}

export default Search;
