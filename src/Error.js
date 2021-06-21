import React from 'react'

export default function Error(props) {
    return (
        <div className="timeout error-div">
            <p className="error-p">{props.message}</p>
        </div>
    )
}
