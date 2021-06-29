import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ? 
            // Whenever the user has typed something in, the shrink label will be used besides the form-input-label
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}> 
                {label}
            </label>)
            : null
        }

    </div>
)

export default FormInput;