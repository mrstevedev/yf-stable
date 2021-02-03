import React from 'react';
import graphics_about from '../../public/graphics_about.png';

export const What: React.FC = () => {
    return (
        <div className="section yf__what" id="what">
            <div className="container">
                <div className="yf__what-left">
                <h1>About YF<span className="yf__what-txt-colored-pink">Stable?</span></h1>
                <p>YFstable is a stable coin inspired by Xstable that uses modified concepts based on upon market demand.</p><br/>

                <p>
                    Responding to the markets demand for YFStable, it adjusts it’s supply to assure there is always an effective balance between the tokens supply as well as the determined market value.        
                </p><br/><br/>
                <ul>
                    <strong>YFStable provides value to its investors by: </strong>
                    <li>Consistently increasing the equity of those who hold.</li>
                    <li>Offering a hedge against extreme market movements for a large number of assets</li>
                    <li>Protecting investors against sudden localized spikes in both supply and demand.</li>
                </ul>
                {/* <button className="button">Learn More</button> */}
                </div>
                <div className="yf__what-right">
                    <img src={graphics_about} />
                </div>
            </div>
        </div>
    )
}