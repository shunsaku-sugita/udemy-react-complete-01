import { useState } from 'react'

import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import { CORE_CONCEPTS } from './data.js'
import TabButton from './components/TabButton.jsx'

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button')

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  console.log('APP COMPONENT EXECUTED')

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
