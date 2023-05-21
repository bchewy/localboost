import React from "react";
import { Button } from '@mui/material';

// TODO: create full url path to firebase storage
// TODO: calculate and display the total download file size and number of files?

// This button will download all files in the array of urls passed in as props
const DownloadButton = (props) => {
    const handleDownload = () => {
      props.arr.forEach((url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = url;
        link.click();
      });
    };

    return (
      <Button size="small" variant="contained" onClick={handleDownload} color='primary'>
        Download Files
      </Button>
    );
  };

export default DownloadButton;