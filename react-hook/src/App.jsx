import { useEffect, useState, createContext, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseContextExam from './components/UseContextExam';
import UseReducerExam from './components/UseReducerExam';

// ผู้ให้ข้อมูล (provider)
export const UserContext = createContext();

function App() {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState("Hello World");
  const [data, setData] = useState([]);
  const [inValue, setInValue] = useState("");
  const previosInValuie = useRef("");

  const count  = useRef(0);
  const inputElement = useRef();

  function focusInput() {
    // สั่งให้ focus ไปที่ input element ที่เราทำการ reference ไปหา่
    inputElement.current.focus();
  }

  useEffect(() => {
    count.current = count.current + 1;
    previosInValuie.current = inValue;
  }, [inValue])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setData(users);
      });
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + count)
      .then((res) => res.json())
      .then((users) => {
        setData(users);
      });
  }, [count]);

  return (
    <>
      <UserContext.Provider value={"Rosetta"}>
        <UseContextExam />
      </UserContext.Provider>

      <div>
        <input type="text" id="dummy" ref={inputElement} />
        <button onClick={focusInput}>Focus target</button>

        <input type="text" value={inValue} onChange={(e) => setInValue(e.target.value)}/>
        <h2>Current: {inValue}</h2>
        <h3>Previos: {previosInValuie.current}</h3>
        <h1>Render Count {count.current}</h1>
      </div>

      <UseReducerExam />

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{name}</h1>
      <button type='button' onClick={() => setName("EEE")}>Set name</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
