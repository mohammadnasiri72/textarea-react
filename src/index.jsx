import React from 'react';
import ReactDOM from 'react-dom/client';
import Textarea from './Input';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Textarea maxLen={20} style={{borderRadius:60,border:"1px solid red", textAlign : "center"}}/>
    </>
);


