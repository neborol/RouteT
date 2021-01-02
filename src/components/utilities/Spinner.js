import React from 'react';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClockLoader';

// Can be a string as well. Need to ensure each key-value pair ends with a  ";"
const override = css`
  display: block;
  margin: 0 auto;
  box-shadow: inset 0px 0px 0px 5px #17a2b8;
`;

function Spinner({loading}) {
    return (
        <div>
            <ClipLoader
                css={override}
                size={150}
                loading={loading}
            />
        </div>
    )
}

export default Spinner;
