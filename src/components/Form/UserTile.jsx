import React from 'react';
import './UserForm.css';

export const UserTile = ({props}) => {

    return (
        <div className='wrapper'>
            <div className="tile-section">
                {props.map((data, i) =>
                    <div className='tile' key={i}>
                        <span>Name: {data.name}</span>
                        <span>Department: {data.department}</span>
                        <span>Rating: {data.rating}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
