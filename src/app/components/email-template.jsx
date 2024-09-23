import React from "react";

export default function EmailTemplate({ firstName, product }) {
  console.log("reached");

  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>Thanks for trying {product}. We’re thrilled to have you on board.</p>
    </div>
  );
}

// await resend.emails.send({
//   from: 'you@example.com',
//   to: 'user@gmail.com',
//   subject: 'hello world',
//   react: <EmailTemplate firstName="John" product="MyApp" />,
// });
