import React, { useState } from "react";
import {AiFillPlusCircle} from "react-icons/ai"

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };
    
    return (
        <form className="ui form " onSubmit={handleFormSubmit}>
            <div className="flex justify-center">
                <div className="flex flex-row">
                    <div>
                        <input className="p-2 border-3 border-black rounded-3xl w-44 font-Dosis drop-shadow-3xl sm:w-52 lg:w-96"
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Agregar tareas ..."
                            
                        />
                    </div>
                    
                    <div className="pl-2">
                        <button type="submit" className="ui button circular icon green">
                        <AiFillPlusCircle className="text-4xl text-[#44B648] hover:text-[#101432]"/>
                        <i className="white plus icon"></i></button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;