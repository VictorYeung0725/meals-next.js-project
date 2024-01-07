'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';
function ImagePicker({ label, name }) {
  //create image previews by store it into a state
  //then updated to UI for the imgae
  const [pickImage, setPickImage] = useState();
  //create ref to accee the html of input
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    //this function will be trigered whenever the inputimage have a new value
    const file = event.target.files[0];

    if (!file) {
      setPickImage(null);
      return;
    }

    //to read the file, first convet the image into a data URL
    // js have built in function
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No image pick yet</p>}
          {pickImage && (
            <Image src={pickImage} alt='The image selected by the user' fill />
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInput}
          //can add mutiple which allows user to add mutiple file
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickClick}
        >
          pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
