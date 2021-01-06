// [
//     check('role', 'Role is required').not().isEmpty(),
//     check('title', 'title is required').not().isEmpty(),
//     check('problem', 'problem is required').not().isEmpty(),
//     check('solution', 'solution is required').not().isEmpty(),
//     check('duration', 'duration is required').not().isEmpty(),
//     check('breakdown', 'breakdown is required').not().isEmpty(),
//     check('tools', 'tools is required').not().isEmpty(),
//     check('helpers', 'helpers is required').not().isEmpty(),
//     check('status', 'status is required').not().isEmpty()
// ]



const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const profilePath = __dirname + '../../../data/profiles.json';
const dataReader = require('../../utilities/dataReader');
const uuid = require('uuid');
const fs = require('fs');

const auth = require('../../middleware/auth');

// @route  POST api/profile
// @desc   Will create or update a user's profile
// @access Private

router.post('/', auth, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    // pull all the fields out from the request.body
    const {
        role,
        title,
        problem,
        solution,
        duration,
        breakdown,
        tools,
        helpers,
        status
    } = req.body;

    // Build the profile object
    const User = JSON.parse(req.user);
    console.log('ReqUser', req.user);
    const profile = { 
        profileId: User.id,
        profileOwner: User.name,
        profileFields: {}
    };
    
    
    if (role) profile.profileFields.role = role;
    if (title) profile.profileFields.title = title;
    if (problem) profile.profileFields.problem = problem;
    if (solution) profile.profileFields.solution = solution;
    if (duration) profile.profileFields.duration = duration;
    if (breakdown) profile.profileFields.breakdown = breakdown;
    if (tools) profile.profileFields.tools = tools;
    if (helpers) profile.profileFields.helpers = helpers;
    if (status) profile.profileFields.status = status;




    try {
        async function crate_a_profile() {
            let readData = await dataReader(profilePath);

            // Check if the read file being read contains data already 
            if (!readData || readData.length === 0) {
                const profiles = [];  // This will hold the very first profile if no profile exist after the file is read
               
                profiles.push(Object.assign({}, profile)); // Copy the profile object and insert it in the profiles array
                const newProfile = JSON.stringify(profiles, '\t', 2);   // Convert the profiles array to formatted json in preparation to writing in the json file
                await fs.writeFile(profilePath, newProfile, function(err) {  // Write first profile to the profiles.json file
                    if (err) {
                        console.error(err);
                        return false;
                    } else {
                        return res.status(201).json(profile);// Send the newly created profile if to the browser.
                    }
                }); 
            }

            // In case the read file already has some data in it, read the data, add the next profile to the list and then write the new list back to the prifile.json file.
            if (readData && readData.length > 0) {
                readData = JSON.parse(readData);
                readData.push(Object.assign({}, profile));
                const stringedData = JSON.stringify(readData, '\t', 2);   // Convert the updated profiles array to json in preparation to writing in the json file
                
                await fs.writeFile(profilePath, stringedData, function(err) {
                    if (err) {
                        console.error(err);
                        return false;
                    } else {
                        return res.status(201).json(profile);// Send the newly created profile if to the browser.
                    }
                }); 
            }

        }

        crate_a_profile();

    } catch(e) {
        console.log('Error:', e.stack);
        res.status(500).send('Server Error')
    }

}
);



// @route  POST api/profile/edit
// @desc   Will update a user's profile
// @access Private
router.post('/edit', auth, async (req, res) => {
    try {
        async function edit_a_profile() {
            let readData = await dataReader(profilePath);


            if (req.user) {
                let newProfile = {};
                const Usr = JSON.parse(req.user);
                readData = JSON.parse(readData);
                let newProfiles = readData.map(profile => {
                    if (profile.profileId === Usr.id) {
                        profile.profileFields = {...profile.profileFields, ...req.body};
                        newProfile = profile; // Update the new profile
                    }

                    return profile;
                });

                         
                // Stringify the above data prior to writing back to the file
                const stringedData = JSON.stringify(newProfiles, '\t', 2); 

                /* Now write it to the file */
                await fs.writeFile(profilePath, stringedData, function(err) {
                    if (err) {
                        console.error(err);
                        return false;
                    } else {
                        return res.status(201).json(newProfile);
                    }
                }); 
            }

        }

        edit_a_profile();

        } catch(e) {
            console.log('Error:', e.stack);
            res.status(500).send('Server Error')
        }

    }
);








// @route  GET api/profile/myprofile
// @desc   Get current users profile
// @access Private
router.get('/myprofile', auth, async (req, res) => {
    // console.log(req.headers['x-auth-user']);
    try {
        async function get_a_profile() {
            // Read the data from a file pointed to by profilePath
            let readData = await dataReader(profilePath);

            // Check if the read file being read contains any data
            if (!readData || readData.length === 0) {
                return res.status(404).send('No profile found!');
            } else {
                
                if (req.user) {
                    const Usr = JSON.parse(req.user);
                    if (!Usr.id) {
                        return res.status(404).send('No valid User id found!');
                    } else {
                        const readDataObj = JSON.parse(readData);
                        let selectedProfile;
                        // Get whomever the currently logged-in user is
                        if (readDataObj) {
                            selectedProfile = readDataObj.find(data => {
                                return data.profileId === Usr.id;
                            }); 
                        }

                        // console.log('Final', JSON.stringify(selectedProfile));
                        return res.status(200).json(selectedProfile);   // Send the found profile to the browser.
                    }                    
                } else {
                    return res.status(404).send('A current User must exist!');
                }

            }
        }

        get_a_profile();

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});





module.exports = router;
