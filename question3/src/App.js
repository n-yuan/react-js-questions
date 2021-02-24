import React from "react";
import Form from "./Form";

export default () => {
  const handleFormPost = (e) => {
    alert(JSON.stringify(e));
  };

  return (
    <main>
      <header>
        <h1>StarRez: Question 3</h1>
      </header>

      <article>
        <p>Create an accessible form</p>
        <Form onSubmit={handleFormPost} />
      </article>
    </main>
  );
};
