import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = (idea=true) => (

        <div class="profile-about bg-light p-2">
            { idea && (
                <Fragment>
                    <h2 className="text-primary">Top ideas</h2> 
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed</p>   
                </Fragment>
            ) }
          <h2 class="text-primary">Roland's Imaginations</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
            neque modi perspiciatis similique?
          </p>
          <div class="line"></div>
          <h2 class="text-primary">feature Set</h2>
          <div class="skills">
               
                   <div className="p-1">
                       check-icon feature-1
                   </div>
                   <div className="p-1">
                       check-icon feature-2
                   </div>
                   <div className="p-1">
                       check-icon feature-3
                   </div>
                   <div className="p-1">
                       check-icon feature-4
                   </div>
               
          </div>
        </div>
)


// ProfileAbout.propTypes = {
//     profile: PropTypes.object.isRequired
// }

export default ProfileAbout
