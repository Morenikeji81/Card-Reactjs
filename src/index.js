import React from "react";
import ReactDOM from "react-dom";
import Example from "./components/Card";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode> 

    
    <div className="card">
    <Example />
    </div>

    </React.StrictMode>
); 

