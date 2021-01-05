import React, { Fragment } from 'react';

const ProfileAbout = ({ problem, solution, duration }) => (

        <div className="profile-about bg-light p-2">
            <div className="section-details">
                <h1 className="text-primary">Highlight of initiative:</h1> 
                <hr/>
                <div className="item-section">
                    <h3>Problem to be resolved:</h3>
                    <p>{ problem }</p> 
                </div>
                <div className="item-section">
                    <h3>Nature of the solution:</h3>
                    <p>{ solution }</p> 
                </div>
                <div className="item-section">
                    <h3>Duration:</h3>
                    <p>{ duration }</p>
                </div>
            </div>
        </div>
)


export default ProfileAbout
