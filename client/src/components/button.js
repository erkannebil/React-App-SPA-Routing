import React from 'react';
import Button from 'react-bootstrap/Button';

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '350%',
};

const buttonStyle = {
  flex: 1,
  fontWeight: 'bold',
};

const CustomButton = ({ onClick }) => {
  return (
    <Button variant="dark" style={buttonStyle} onClick={onClick}>
      Click me
    </Button>
  );
};

export default CustomButton;
