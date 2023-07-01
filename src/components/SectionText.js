import React from 'react'

function SectionText(props) {
    return (
        <div className={`section-title-style text-center ${props.style}`}>
            <span className="section-sub-title">{props.smalltitle}</span>
            <h5 className='section-title'>{props.title}</h5>

        </div>
    )
}

export default SectionText