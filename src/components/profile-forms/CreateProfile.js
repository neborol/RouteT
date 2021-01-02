import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 

import { createProfile } from '../../redux/actions/profile'; 


const CreateProfile = ({ createProfile }) => {

    const [formData, setFormData] = useState({
        role: '',
        title: '',
        problem: '',
        solution: '',
        duration: '',
        breakdown: '',
        tools,
        helpers
    });

    const {        
        role,
        title,
        problem,
        solution,
        duration,
        breakdown,
        tools,
        helpers
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData);
    }

    return (
        <>
            <h1 className="large text-primary">
                Create Your Profile
            </h1>
            <p className="lead">
                 Put some key creativity features in your Profile.
            </p>
            <small>* = required field</small>

            <form className="form" onSubmit={e => onSubmit(e) }>
                <div className="form-group">
                    { /*These would normally be pulled from a database, but for simplicity sake, I would hard-code it.*/ }
                    <select name="status" value={role} onChange={e => onChange(e)}>
                        <option value="0">* Select Your Role in this Feature</option>
                        <option value="Idea Owner">Idea Owner</option>
                        <option value="Co-Developer">Co-Developer</option>
                        <option value="Developer Manager">Developer Manager</option>
                        <option value="Innovations Manager">Innovations Manager</option>
                        <option value="QA Controller">QA Controller</option>
                    </select>
                    <small className="form-text">Give us an idea of where you are at in your career</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Feature Title" name="title" value={title} onChange={e => onChange(e)} />
                    <small className="form-text">A description that best suits your new idea.</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Problem at stake" name="problem"  value={problem} onChange={e => onChange(e)}/>
                    <small className="form-text">The problem at hand, that this feature would resolve.</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Short description of the solution" name="solution"  value={solution} onChange={e => onChange(e)}/>
                    <small className="form-text">Describe issue after being resolved.</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Duration of implimentation" name="duration"  value={duration} onChange={e => onChange(e)}/>
                    <small className="form-text">How long do you think the development would last?</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Breakdown of solution" name="breakdown"  value={breakdown} onChange={e => onChange(e)}/>
                    <small className="form-text"> List the individual steps to be followed from start to finish of development.</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Tools and modules required for this job" name="tools"  value={tools} onChange={e => onChange(e)}/>
                    <small className="form-text"> List the key tools, modules, technologies and skills you would use for this job.</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Number of helper Developers required" name="helpers"  value={helpers} onChange={e => onChange(e)}/>
                    <small className="form-text"> Specify how many developers you would need help from, in order to accomplish this.</small>
                </div>

                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </>
    )
}


CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
}


export default connect(null, { createProfile })(CreateProfile);

