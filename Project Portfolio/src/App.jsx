// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import NavTabs from "./components/NavTabs";
import { Outlet } from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavTabs />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
