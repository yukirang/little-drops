handleFormChange = (e) => {
  const {name,value,type, checked} = e.target;
  type === 'checkbox' ? this.setState({[name]:checked}) : this.setState([name]:value);
}

//Example
import React, { Component } from 'react';

class MyForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      isVegetarian: false,
      seatPreference: 'window',
      travelDoc:'passport',
      comment:''
    };
    
  }
  handleSubmit = (e) =>{
    //...
  }
  
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type='text'
            value={this.state.firstName}
            name='firstName'
            placeholder='First Name'
            onChange={this.handleChange}
          />
          <br />
          <input
            type='text'
            value={this.state.lastName}
            name='lastName'
            placeholder='Last Name'
            onChange={this.handleChange}
          />
        </div>
    
        <div>
          <input
              type='checkbox'
              name='isVegetarian'
              checked={this.state.isVegetarian}
              onChange={this.handleChange}
            />{' '}
            Veggie
        </div>   
        
        <div>
          <input
            type='radio'
            name='seatPreference'
            value='window'
            checked={this.state.seatPreference === 'window'}
            onChange={this.handleChange}
          />{' '}
          window
        </div>
        
        <div>
          <input
            type='radio'
            name='seatPreference'
            value='aisle'
            checked={this.state.seatPreference === 'aisle'}
            onChange={this.handleChange}
          />{' '}
          aisle
        </div>
        
        <div>
          <input
            type='radio'
            name='seatPreference'
            value='other'
            checked={this.state.seatPreference === 'other'}
            onChange={this.handleChange}
          />{' '}
          Other/No Preference 
        </div>
         
        <div>
          <span>Travel Document:</span>
          <select
            value={this.state.travelDoc}
            onChange={this.handleChange}
            name='travelDoc'
          >
            <option value='passport'>Passport</option>
            <option value='govId'>ID</option>
            <option value='driverLiscence'>Driver Liscence</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div>
          Comment:
          <textarea value={this.state.comment} name="comment" onChange={this.handleChange} />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default MyForm;


