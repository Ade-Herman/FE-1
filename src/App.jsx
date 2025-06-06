import { useState } from "react";
import "./App.css";
import logo from "./assets/src/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav class="bg-white py-4 border-b border-gray-200">
        <div class="container mx-auto flex items-center justify-between px-6">
          <a href="#" class="text-2xl font-semibold">
            <img src={logo} alt="logo videobelajar" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default App;
