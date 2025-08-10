//import componentImg from "./assets/components.png"; //default data imported normally
import { CORE_CONCEPTS } from "./data"; //named data imported using {}
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [selectedState, setSelectedState] = useState(null);

  function handleSelect(selectedButton) {
    setSelectedState(selectedButton);
  }

  let topic = <p>Select a Option!</p>;
  if (selectedState) {
    topic = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedState].title}</h3>
        <p>{EXAMPLES[selectedState].description}</p>
        <pre>
          <code>{EXAMPLES[selectedState].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} /> //We are using map to iterate over each concept item and enter it as a prop to CoreConcept component
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedState === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedState === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedState === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedState === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
        </section>
        {topic}
      </main>
    </div>
  );
}

export default App;
