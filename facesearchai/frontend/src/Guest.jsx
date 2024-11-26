import React, { useState, useRef } from "react";
import "./Guest.css";
import photo from '../src/assets/photo.png'
import { Link} from 'react-router-dom'

function ImageUpload() {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);
  let initialText="Submit";
  const[buttonText,setbuttonText]=useState(initialText)
  const handleButton=()=>{
    setbuttonText("No result found")
    setTimeout(()=>{
      setbuttonText(initialText)
      },1000)
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="image-upload-container">
      <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload" className="display-after" />
          ) : (
            <img src={photo} alt="upload" className="display-before" />
          )}

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>
        
  
        <button
          className="image-upload-button"onClick={()=>handleButton()}
        >
          {buttonText}
        </button>
        Want to access more features make Subscription
        <Link to ='/subscriptioncard'><button
          className="image-upload-button1"
        >
          Subscription
        </button></Link>
      </div>
     
      
    </div>
  );
}

export default ImageUpload;
