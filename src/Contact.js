import React from "react";

export default function Contact(props) {
  return (
    <div>
      <p>Address:{props.Address} </p>
      <p>Email:{props.Email} </p>
      <p>Phone number:{props.phone} </p>
    </div>
  );
}
