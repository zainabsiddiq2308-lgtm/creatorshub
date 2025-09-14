import * as React from "react";

 export const EmailTemplate = ({ name, email, phone, message }) => (
  <div>
   <p>the company:creator</p>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Message: {message}</p>
  </div>
);

