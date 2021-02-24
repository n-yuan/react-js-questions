import React, { useState } from 'react';

export default ({ items }) => {
  const [clicked, setClicked] = useState("none")

  return (
    <div>
      <header>
        <h1>StarRez: Question 4</h1>
      </header>

      <article>
        <p>Write some tests for the below functionality</p>

        <h2>{clicked}</h2>

        <ul>
          {items.map(e =>

            <li key={e.name}>
              <button onClick={() => setClicked(e.name)}>{e.name}</button>
            </li>
          )}
        </ul>
      </article>
    </div>
  );
}
