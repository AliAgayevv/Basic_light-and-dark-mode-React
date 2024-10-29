import React from "react";
import { Toggle } from "./Components/Toggle";


export default function App() {

  const [isDark, setIsDark] = React.useState(true);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
        />
        <h1 className="title">Hello</h1>
        <div className="box">
            <h2>This is a box</h2>
        </div>
    </div>
  );
}


