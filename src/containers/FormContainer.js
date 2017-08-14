import React, { Component } from 'react'
import TextField from '../components/TextField';
import Select from '../components/Select';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      firstName:'',
      lastName:'',
      address:'',
      city:'',
      state:'',
      zipcode:'',
      phoneNumber:'',
      email:'',
      states:['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS'
      ,'MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI'
      ,'WY'],
      stateSelected:''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.validateInputChange = this.validateInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleStateSelection = this.handleStateSelection.bind(this);
    this.validateStateSelection = this.validateStateSelection.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zipcode: '',
      phoneNumber: '',
      email: '',
      stateSelected: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.validateInputChange(this.state.firstName, 'firstName') &&
    this.validateInputChange(this.state.lastName, 'lastName') &&
    this.validateInputChange(this.state.address, 'address') &&
    this.validateInputChange(this.state.city, 'city') &&
    this.validateStateSelection(this.state.stateSelected) &&
    this.validateInputChange(this.state.zipcode, 'zipCode') &&
    this.validateInputChange(this.state.phoneNumber, 'phoneNumber') &&
    this.validateInputChange(this.state.email, 'email'))
    {
      let formPayload = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        city: this.state.city,
        zipcode: this.state.zipcode,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        stateSelected: this.state.stateSelected
      };
      this.props.trackAddressForm(formPayload);
      this.handleClearForm(event);
    }
  }

  handleInputChange(event) {
    this.validateInputChange(event.target.value, event.target.name)
    this.setState({ [event.target.name]: event.target.value})
  }

  validateInputChange(value, name) {
    let label = name.replace(/([A-Z])/g, ' $1').toUpperCase();
    if (value === '' || value === ' ') {
      let newError = { [name]: `${label} may not be blank.` }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState[[name]]
      this.setState({errors: errorState })
      return true
    }
  }

  handleStateSelection(event) {
    this.validateStateSelection(event.target.value)
    this.setState({ stateSelected: event.target.value })
  }

  validateStateSelection(selection) {
    if (selection === '') {
      let newError = { stateSelected: 'You must select a STATE.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.stateSelected
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return(
      <form className="callout" onSubmit={this.handleFormSubmit}>
        {errorDiv}
        <TextField
          content={this.state.firstName}
          label='First Name'
          name='firstName'
          handlerFunction={this.handleInputChange}
        />
        <TextField
          content={this.state.lastName}
          label='Last Name'
          name='lastName'
          handlerFunction={this.handleInputChange}
        />
        <TextField
          content={this.state.address}
          label='Address'
          name='address'
          handlerFunction={this.handleInputChange}
        />
        <TextField
          content={this.state.city}
          label='City'
          name='city'
          handlerFunction={this.handleInputChange}
        />
        <Select
          handlerFunction={this.handleStateSelection}
          name='state'
          label='State'
          options={this.state.states}
          selectedOption={this.state.stateSelected}
        />
        <TextField
          content={this.state.zipcode}
          label='Zip Code'
          name='zipcode'
          handlerFunction={this.handleInputChange}
        />
        <TextField
          content={this.state.phoneNumber}
          label='Phone Number'
          name='phoneNumber'
          handlerFunction={this.handleInputChange}
        />
        <TextField
          content={this.state.email}
          label='Email'
          name='email'
          handlerFunction={this.handleInputChange}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default FormContainer
