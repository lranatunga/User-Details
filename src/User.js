import React from "react";
import Contact from "./Contact";

export default function User({
  id,
  picture,
  age,
  name,
  email,
  phone,
  address,
  about
}) {
  return (
    <div>
      <img src={picture} alt={name} />
      <p>Name :{name} </p>
      <p>Age : {age}</p>
      <Contact Address={address} Email={email} phone={phone} />
    </div>
  );
}
