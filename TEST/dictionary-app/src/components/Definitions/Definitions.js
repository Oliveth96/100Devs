import React from 'react';
import './Definitions.css'

const Definitions = ({ word, meanings }) =>{
    return (
        <div className ="meanings"> 
        
            {word === ""? ( 
                <span className ="subTitle"> Start by typing a word in Search</span>
            ) : (
                        meanings.map((mean) =>)
            )}
        
        </div>
    );
};

export default Definitions;