import React, { useState, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "../styles/components/fileupload.module.scss";
import { Button } from "./Button";
import { Chip } from "./Chip"; 

const FileUpload = forwardRef((props, ref) => {

  const { onChange } = props;
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [visible, setVisible] = useState(true);
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
    setVisible(true);
    onChange && onChange(files);
  };

  const triggerInputFile = () => {
    inputRef.current.click();
  };

  const handleDelete = (name) => {
    const updatedFiles = selectedFiles.filter(file => file.name !== name);
    setSelectedFiles(updatedFiles); 
    if (updatedFiles.length === 0) {
      setVisible(false);
    }
  };
  
  return (
    <div className={styles.fileUpload}>
       <input
         type="file"
         multiple
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
       {visible && selectedFiles.map((file, index) => (
          <Chip key={index} label={file.name} onClick={() => handleDelete(index)} globalClass="mt_10 mr_8"/> 
       ))}
    </div>
  );
});

FileUpload.propTypes = {
  onChange: PropTypes.func,
};

export default FileUpload;
