import { useState } from "react";
import "firebase/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { app } from "./firebase";

function TestUpload() {
  const [imageUpload, setImage] = useState(null);
  const storage = getStorage(app);

  function handleUpload() {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("file uploaded");
    });

  }
  const downloadFile = () => {
    // console.log("entered function");
    // const storage = getStorage();
    // getDownloadURL(ref(storage, "images/Container 101.pptxfce258f0-44e1-49f4-b3a8-2a975032b9b4}"))
    //   .then((url) => {
    //     console.log("obtain url");
    //     const xhr = new XMLHttpRequest();
    //     xhr.responseType = "blob";
    //     xhr.onload = (event) => {
    //       const blob = xhr.response;
    //     };
    //     xhr.open("GET", url);
    //     xhr.send();
    //   })
    //   .catch((error) => {
    //     // Handle any errors
    //     console.log("fail");
    //   });
  }
    const handleDownload = async () => {
      const fileRef = ref(storage, 'images/Container 101.pptxfce258f0-44e1-49f4-b3a8-2a975032b9b4}');
      try {
        const fileUrl = await getDownloadURL(fileRef);
  
        // Create an anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'myfile.pdf'; // Replace with the desired file name
        link.click();
      } catch (error) {
        console.log('Error retrieving file download URL:', error);
      }
    };


  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
      />
      <button onClick={handleUpload}>Upload</button>
      < button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default TestUpload;
