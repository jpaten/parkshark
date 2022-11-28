import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
    const { spotId, name, onClick, } = props;
    return (
      <div className="marker"
        style={{cursor: 'pointer'}}
        title={name}
        onClick={onClick}
        id={spotId}
      />
    );
  };

  export default Marker;