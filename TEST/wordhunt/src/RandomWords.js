import React from "react";

const RandomWords = ({ word, definition, pronunciation}) => {
    return (
        <div className = "rWords">
            <div>
                <strong> Word: </strong> {word}
            </div>

            <div>
                <strong> Definition:  </strong> {definition}
            </div>

            <div>
                <strong> pronunciation: </strong> {pronunciation}
            </div>
        </div>
    );
};

export default RandomWords;