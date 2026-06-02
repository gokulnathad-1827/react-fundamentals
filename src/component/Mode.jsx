import React, { useState } from 'react';

function Mode() {
    const [dark, setDark] = useState(false);

    return (
        <div
            style={{
                backgroundColor: dark ? "#222" : "#fff",
                color: dark ? "#fff" : "#000",
                minHeight: "100vh",
                padding: "20px"
            }}
        >
            <h1 style={{ color: "green" }}>Welcome to KCE</h1>

            <button onClick={() => setDark(!dark)}>
                {dark ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}

export default Mode;