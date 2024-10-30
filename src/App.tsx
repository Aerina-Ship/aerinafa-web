import React from 'react';

import logo from './logo.svg';

function App() {
    return (
        <>

            <div className="w-full min-h-screen flex items-center justify-center bg-white relative overflow-hidden" onClick={event => {
                event.preventDefault();
                window.open("https://discord.aerina.date/");
            }}>
                <img src="poster1.png" alt="poster1"/>
            </div>
        </>
    );
}

export default App;
