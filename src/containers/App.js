import React, { Component } from 'react'
import FormContainer from './FormContainer'
import AddressList from '../components/AddressList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressForm: []
    }
    this.trackAddressForm = this.trackAddressForm.bind(this);
  }

  trackAddressForm(submission) {
    this.setState({ addressForm: this.state.addressForm.concat(submission) })
  }
  render() {
    return (
      <div className="row">
        <div className="medium-6 medium-offset-3 small-12 columns">
          <h1 className="text-center">Address Tracker</h1>
          <FormContainer trackAddressForm={this.trackAddressForm}/>
          <AddressList addressForm={this.state.addressForm} />
        </div>
      </div>
    );
  }
}

export default App
