import logo from "./logo.svg";
import "./App.css";
import StatefulGreeting from "./components/StatefulGreeting";
// import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";

// function App() {
//     return (
//         <div className="App">
//             <FunctionalGreetingWithProps
//                 greeting="Nice to meet you!!"
//                 name="Mike"
//                 age="32"
//             />
//         </div>
//     );
// }

function App() {
    return (
        <div className="App">
            <StatefulGreeting greeting="I'm a stateful class component!" />
        </div>
    );
}

export default App;
