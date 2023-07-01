import React from 'react'

function Button(props) {
    return (
        <div className={`${props.positionCenter ? 'text-center' : ''} ${props.marginBottom ? 'm-bottom' : ''}`}>
            <button type="button" className="button text-capitalize" style={props.style}><span>{props.text}</span></button>
        </div>
    )
}

export default Button
