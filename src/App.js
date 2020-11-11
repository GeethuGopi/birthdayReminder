import logo from './logo.svg';
import React, { useState } from 'react';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
    <section>
    <h2>{people.length} birthdays today</h2>
    </section>
    </main>
  );
}

export default App;
