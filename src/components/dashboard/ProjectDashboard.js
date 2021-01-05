import React, { useEffect } from 'react';
import { setLoginStatus } from '../../redux/actions/auth';
import { connect } from 'react-redux';


const ProjectDashboard = ({ setLoginStatus }) => {
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser.isAuthenticated ? setLoginStatus(true) : setLoginStatus(false);
    }, []);

    return (
        <>
            <h1 className='large text-primary'>Team Dashboard</h1>
            <p className="lead">
                <span style={{fontSize: '26px'}}>Welcome Team Members</span>
            </p>

            { 
                <>
                    <h3>Here, you can browse different sections to see how we are doing as a team.</h3>
                    <p>The individual boxes below show the different sections of all our projects.</p>
                    <p>Click on a box to see the details.</p>
                     <div>-----  <strong> Graphical Representation of different sections come here. </strong>   -----</div>   
                
                    <br/><br/>
                    <div className="dashboard-display">
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                        <div className="dashboard-items"></div>
                    </div>
                    
                </>
            } 
        </>
    )
}

export default connect(null, { setLoginStatus })(ProjectDashboard)
