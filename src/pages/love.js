import { Fragment } from 'react';
import "./love.css";
const Love = () => {
    return (
        <Fragment>
            <div id={"body-love"}>
                <div className="container">
                <div className="row">
                <div className="col-md-12 text-center">
                <h3 className="animate-character">Moule</h3>
                </div>
                </div>
                </div><br /><br />

                <div className = "heart"></div><br /><br />

                <div className="container">
                <div className="row">
                <div className="col-md-12 text-center">
                <h3 className="animate-character">Poule</h3>
                </div>
                </div>
                </div>

                </div>
        </Fragment>
    );
};

export default Love;