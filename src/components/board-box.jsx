import React from 'react'

// Create Box component
export const Box = (props) => {
    return (
        <button className="board_box" onClick={props.onClick}>
            {props.value}
        </button>
    )
}