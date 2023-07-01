import React from 'react'
import food1 from '../assets/images/food1.webp';

function Video() {
    return (

        <div className='row'>
            <div className='col-lg-12 section'>
                <a className="play-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">

                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </a>
                <img src={food1} className='video-icon' alt="food1" />
            </div >
        </div >

    )
}

export default Video