import React from 'react';

import ReactDOM from 'react-dom'

import App from './app.js';
import Image from './image.js';
import About from './about.js';

function NewExersice(){
    return (
        <div className = 'wrapper'>
           
            <App />
        
            <Image />
            <About />
        
            
           
        </div>
    )
}

ReactDOM.render(<NewExersice />,document.getElementById('root')) 
