import React from "react";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const RedirectButton = (props) => {
    const navigate = useNavigate();
  
    const data = props.data;

    const handleClick = () => {
      // Redirect to another page and pass the data as state
      navigate(props.link, { state:data });
    };
  
    return (
      <Button variant="contained" color="primary" onClick={handleClick}>
        {props.text}
      </Button>
    );
  };
  
  export default RedirectButton;