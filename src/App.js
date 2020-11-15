import logo from './logo.svg';
import React, { useState } from 'react';
import data from './data';
import List from './list';
function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
    <section className = 'container'>
    <h2 >{people.length} birthdays today</h2>
    <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
    </section>
    </main>
  );
}

export default App;
