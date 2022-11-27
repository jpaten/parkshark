import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
    const { name, onClick } = props;
    return (
      <div className="marker"
        style={{cursor: 'pointer'}}
        title={name}
        onClick={onClick}
      />
    );
  };

  export default Marker;