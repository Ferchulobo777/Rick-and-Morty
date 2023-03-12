import React from 'react';

const Location = ({location}) => {
    return (
        <div className='location__info'>
            <h1>{location.name}</h1>
            <p><strong>Tipo:</strong><br />{location.type}</p>
            <p><strong>Dimension:</strong> <br />{location.dimension}</p>
            <p><strong>Habitantes:</strong><br />{location.residents?.length}</p>
        </div>
    );
};

export default Location;