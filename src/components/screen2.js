import React from 'react';

import Header from './header';
import './styles.css';

export default function Screen2() {

    const handleSimulate = () => {
        window.location.href= "/";
    }

    return(
        <div className="mainDiv">
            <Header />
            <div className="screen2">
                <p>Congratulations !!!!</p>
                <p>
                    <strong>Night</strong> is <strong>Dark</strong> and <strong>Full</strong> of <strong>Terrors</strong>
                </p>
                <p>
                    Help will always be given at <strong>Kuliza</strong> to those who ask for it.
                </p>
                <div className="button">
                    <button onClick={handleSimulate} className="submit">Simulate Again</button>
                </div>
            </div>
        </div>
    )
}