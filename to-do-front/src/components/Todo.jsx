import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs"
import { GoTrashcan } from "react-icons/go";

const Todo = ({ title, completed, removeTodoItemProp, editTodoItemProp }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;

        if (key === 13) {
            editTodoItemProp({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };

    const handleButtonClick = () => {
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({ completed: newState });
            return newState;
        });
    };

    return (
        <div className="flex flex-row relative justify-center bg-[#f2a53a5e] m-auto items-center mb-3 w-60 rounded-3xl border-2 border-[#101432]">
            
            <div className="py-3">
                <button className=" relative bottom-5 right-5">
                    <BsFillCheckCircleFill className={"text-3xl " + (completedState ? "text-green-500" : " text-blue-800")}
                        onClick={handleButtonClick} />
                    {/* <i className="white check icon"></i> */}
                </button>
            </div>

            {
            isEditing ?
                    <div className="bg-red-900">
                    <div className="">
                        <input
                            onChange={handleInputOnChange}
                            onKeyDown={handleInputKeyDown}
                            autoFocus={true}
                            value={tempValue}
                        />
                    </div>
                </div> :
                <>
                    <div className="" onDoubleClick={handleDivDoubleClick}>
                            <h2 className={"text-1xl" + (completedState ? " text-green-500" : "")}>{value}</h2>
                    </div>


                        <div className="column one wide">
                            <button>
                                <GoTrashcan onClick={removeTodoItemProp}
                                    className="text-red-500 text-2xl relative top-4 left-8" />
                                {/* <i className="white remove icon"></i> */}
                            </button>
                        </div>
                    </>
            }
        </div>
    );
};

export default Todo;