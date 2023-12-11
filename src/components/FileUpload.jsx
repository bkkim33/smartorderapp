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
    <div className={`${styles.fileUpload} ${"align"}`}>
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
      <div className="item">
        <Button
          onClick={triggerInputFile}
          className={styles.uploadButton}
          color="point"
          size="small"
          type="pc"
        >
          파일업로드
        </Button>
      </div>
      <div className="item wrap gap_5">
        {visible &&
          selectedFiles.map((file, index) => (
            <Chip
              key={index}
              label={file.name}
              onClick={() => handleDelete(index)}
            />
          ))}
      </div>
    </div>
  );
});

FileUpload.propTypes = {
  onChange: PropTypes.func,
};

export default FileUpload;
