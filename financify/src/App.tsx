import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function FileDrop() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // prevents browser from opening file
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const droppedFile = e.dataTransfer.files[i];
      setFile(droppedFile);
    }

    handleUpload();
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/process-image/", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("Backend response: ", data)
    setText(data.sentences.join("\n"))
  }

  // Handle file input
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      setFile(input.files[0]);
    }
  }

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: "2px dashed #aaa",
          borderRadius: "10px",
          padding: "40px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
      
        <input 
          type="file"
          onChange={handleFileSelect}
          style={{ display: "None" }}
          id="fileInput"
        />
        <label 
          htmlFor="fileInput"
          style={{ cursor: "pointer" }}
        >
          {file ? `Selected file: ${file.name}` : "Drag & drop a file here or click to upload"}
        </label>
      </div>
      <div>
        {file && file.type.startsWith("image/") && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              style={{ maxWidth: "300px", maxHeight: "300px"}}
            />
          </div>
        )}
      </div>
      <div style={{ marginTop: "20px"}}>
        <h3>Your expenses:</h3>
        <textarea
          value={text}
          readOnly
          style={{ width: "400px", height: "300px"}}
        />
      </div>
    </>
  )
}