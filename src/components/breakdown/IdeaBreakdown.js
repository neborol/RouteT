import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaPencilAlt } from 'react-icons/fa';
import { editProfileItem, getCurrentProfile } from '../../redux/actions/profile';





const IdeaBreakdown = ({ profile, getCurrentProfile, editProfileItem }) => {

    const userStatus = JSON.parse(localStorage.getItem('currentUser'));
    
    const [devNumberEditing, toggleDevNumber] = useState(false);
    // const [showStepsForm, toggleStepDisplay] = useState(false);
    const [numSteps, setNumSteps] = useState(0);
    const [devNumber, setNumDevs] = useState(0);
    const [stepData, setStepData] = useState({});
    const [inputValue, setInputValue] = useState('');
    const [stepCollection, setStepCollection] = useState([]);

    // const stepInput = React.useRef();

    const onChange = (e) => {
        setNumDevs(e.target.value);
    } 

    const updateDevNumber = (key, val) => {
        editProfileItem(key, val);
        setTimeout(() => {
            toggleDevNumber(false);
        }, 4000);
    }


    useEffect(() => {
        // Get the currently logged in User's profile because it is needed here
        getCurrentProfile();
    }, []);

    const setNextStepLabel = (e) => {
        let stepObj = {
            label: e.target.value
        };
        setStepData(stepObj);
    }

    // const clearItemValue = () => {
    //     stepInput.current.value = '';
    // }

    const addStepDisplay = () => { 
        let newData = Object.assign({}, stepData);
        stepCollection.push(newData);
        setStepCollection([...stepCollection]);
        setStepData({}); 
        setInputValue('');
    }


    const content = userStatus.isAuthenticated ? <>
            <div>
            <h1>Break down the work flow</h1><br/>
            <div className="structure-display">
                { stepCollection.map(step => {
                    return <div className="stepContainer">
                        <div className="stepCircle">{step.label}</div> 
                        <div className="stepLink"></div> 
                    </div>
                })}
            </div>
            <div>
                <form className="form">
                    
                    <div className="form-group req">
                        
                        <h3>
                            Enter the number of steps required before finish:   <span> { numSteps }</span>
                        </h3> 
                        <input type="text" 
                            placeholder="Number of Steps involved" 
                            name="numsteps"
                            value={numSteps}
                            onChange={(e) => setNumSteps(e.target.value)}
                            onBlur={(e) => setNumSteps(e.target.value)} 
                        />
                        <small className="form-text">The number of steps required for this process.</small>
                    </div>   

                    <div className="form-group req">

                        <h3><span className="m-1"> Number of developers: </span>
                            { profile.profileFields.helpers } 
                            <span onClick={() => toggleDevNumber(!devNumberEditing)} 
                                    style={{marginLeft: "15px", cursor: 'pointer'}}>
                                <FaPencilAlt color={"#000000"}/>
                            </span>  
                            { devNumberEditing && <> <span className="m-1">{devNumber > 0 && (<span>Updated DevNumber: {devNumber}</span> )}</span> </>}
                        </h3> 

                        { devNumberEditing && <input 
                            type="text" 
                            placeholder="Number of Developers" 
                            name="helpers"
                            onChange={e => onChange(e)} 
                            onBlur={(e) => updateDevNumber(e.target.name, e.target.value) }
                        /> }

                        <small className="form-text">The number of developers would later on count in the total duration.</small>
                   
                    </div>

                    <div className="form-group req">
                        <div>
                            <h1>Add a step</h1> 
                            <button 
                                type="button"
                                value={inputValue}
                                style={{fontSize: "39px", padding: "0px 30px"}} 
                                className="btn btn-primary"
                                onClick={() => addStepDisplay() }
                            >
                            +
                            </button>
                            <small className="form-text">You would now be able to add the different steps to this project.</small>                            
                        </div>  
                    </div>

                    
                    { 
                        <>
                            <div className="form-group req">
                                <h3>
                                    Enter the label for this step: 
                                </h3>
                                <input type="text" 
                                    placeholder="Step Label" 
                                    name="step_label" 
                                    onChange={e => setNextStepLabel(e)} 
                                />
                                <small className="form-text">Will be used to create graphical progress representation.</small>
                            </div> 
                        </>
                    }
                    
                </form>


            </div>
        </div>
    </>  : <>
        <p>You are not allowed to view this page.</p>
    </>

    return ( <div>{ content }</div> );
};


IdeaBreakdown.propTypes = {
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    editProfileItem: PropTypes.func.isRequired
}

// Get the required slices of the store and pass them to the component as props
const mapStateToProps = store => ({
    profile: store.profileSlice.profile // Get the isAuthenticated state from the auth slice of the store
});

// Connect the redux world with the component world, while exporting the Login component.
export default connect(mapStateToProps, { getCurrentProfile, editProfileItem })(IdeaBreakdown);
