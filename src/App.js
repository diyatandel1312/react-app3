import React,{useState} from "react";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";

import './index.css';
import TabButton from "./components/Header/TabButton";
import { EXAMPLES } from "./data.js";


//first way pass data
// function CoreConcept(props){
//   return(
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
     
//     </li>
//   )
// }


function App() {
 const[selectedTopic,setSelectedTopic]=useState();

 
  function handleSelect(selectedButton){
    // selectedButton=>'Components','JSX','Props','State'
    // tabContent=selectedButton;
    // console.log(tabContent);
    setSelectedTopic(selectedButton);
  }

console.log("App component Executed");
let tabContent = <p>Please Select a Topic</p>;

if(selectedTopic){
  tabContent = <div id="tab-content">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>
    {EXAMPLES[selectedTopic].code}
    </code>
  </pre>
</div>
}
  return (
    <div>
      {/* <header>
        <h1>Hello world!!</h1>
        </header> */}
     < Header />
      <main>
        <section id="core-concepts">
        <ul>
          {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
          <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
          <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
          <CoreConcept  title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/> */}

<CoreConcept {...CORE_CONCEPTS[0]} />
<CoreConcept {...CORE_CONCEPTS[1]} />
<CoreConcept {...CORE_CONCEPTS[2]} />
<CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton isSelected={selectedTopic==="components"} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton  isSelected={selectedTopic==="jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic==="props"} onSelect={() => handleSelect('props') }>Props</TabButton>
          <TabButton isSelected={selectedTopic==="state"} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
           {tabContent}
        </section>
      
      </main>
    </div>
  );
}

export default App;
