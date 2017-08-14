import React from 'react';

const AddressList = props => {
  let addressItems = props.addressForm.map(address => {
    return(
      <li key={address.firstName}>
        <strong>
          {address.firstName} {address.lastName}
        </strong>
        <br/>
        {address.address},
        <br/>
        {address.city}, {address.stateSelected}, {address.zipcode}
        <br/>
        {address.phoneNumber}
        <br/>
        {address.email}
      </li>
    )
  });

  return (
    <div>
      <h3 className="text-center">Address List</h3>
      <ul>{addressItems}</ul>
    </div>
  );
}

export default AddressList;
