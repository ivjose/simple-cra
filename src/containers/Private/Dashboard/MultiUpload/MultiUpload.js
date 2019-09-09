import React, { useCallback } from 'react';
import { Button } from 'antd';
import { useDropzone } from 'react-dropzone';

const MultiUpload = () => {
  const [files, setFiles] = React.useState([]);

  const onDrop = useCallback(
    acceptedFiles => {
      // Do something with the files
      setFiles([...files, ...acceptedFiles]);
    },
    [files]
  );

  const handleSubmitFile = () => {
    console.log(files, 'handleSubmitFile');
  };

  const handleDeleteFile = name => {
    console.log(name, 'Delete file');

    setFiles(files.filter(item => item.name !== name));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  console.log(files, 'file check Check');
  return (
    <div>
      <div {...getRootProps()} style={{ height: 200, backgroundColor: 'gray' }}>
        <input
          {...getInputProps()}
          // accept=".xlsx, .xls, .csv"
        />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>
            Drag &apos;n&apos; drop some files here, or click to select files
          </p>
        )}
      </div>
      <ul>
        {files.map(item => (
          <li key={item.name}>
            {item.name}
            <Button
              size="small"
              type="primary"
              onClick={() => handleDeleteFile(item.name)}
            >
              x
            </Button>
          </li>
        ))}
      </ul>
      <Button type="primary" onClick={handleSubmitFile}>
        Submit
      </Button>
    </div>
  );
};

export default MultiUpload;
