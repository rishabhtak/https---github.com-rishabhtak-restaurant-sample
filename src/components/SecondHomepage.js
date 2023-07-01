import React from 'react'
import { Link } from "react-router-dom";


function SecondHomepage(props) {
    return (
        <>
            <div
                className="homepage-img"
                style={{ backgroundImage: `url(${props.img})` }}
                alt='homepage'
            >
                <div className='section'>
                    <div className='row align-items-center'>
                        <div className="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <div className='breadcrumb-title'>
                                    <h1>{props.title}</h1>
                                </div>
                                <div className="breadcrumb-container">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className='nav-link' to='/'>Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page"><span className='fs-5'>{props.pageName}</span></li>
                                    </ol>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>

            </div></>
    )
}

export default SecondHomepage