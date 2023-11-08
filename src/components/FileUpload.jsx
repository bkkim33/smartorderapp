import React, { useState, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "../styles/components/fileupload.module.scss";
import { Button } from "./Button";
import { Chip } from "./Chip"; 

const FileUpload = forwardRef((props, ref) => {
  
  const { onChange } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [visible, setVisible] = useState(true);
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setVisible(true);
    onChange && onChange(file);
  };

  const triggerInputFile = () => {
    inputRef.current.click();
  };

  const handleDelete = () => {
    setSelectedFile(null); 
    setVisible(false); 
  };

  return (
    <div className={styles.fileUpload}>
       <input
         type="file"
         onChange={handleFileChange}
         ref={(input) => {
           inputRef.current = input;
           if (ref) {
             ref.current = input;
           }
         }}
       />
       <Button onClick={triggerInputFile} className={styles.uploadButton} size="small_h35" btntype="c11">
         파일업로드
       </Button>
       {visible && selectedFile && <Chip label={selectedFile.name} onClick={handleDelete} globalClass="mt_10"/>} 
    </div>
  );
});

FileUpload.propTypes = {
  onChange: PropTypes.func,
};

export default FileUpload;
