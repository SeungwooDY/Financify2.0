import React, { useState, useEffect } from "react";


export default function FileDrop() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dtFiles = e.dataTransfer.files;
    if (!dtFiles || dtFiles.length === 0) return;
    const droppedFile = dtFiles[0];
    setFile(droppedFile);
    await uploadFile(droppedFile);
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0] ?? null;
    if (!picked) return;
    setFile(picked);
    await uploadFile(picked);
  };

  async function uploadFile(fileToUpload?: File) {
    const f = fileToUpload ?? file;
    if (!f) {
      console.warn("No file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", f);

    try {
      const res = await fetch("http://127.0.0.1:8000/process-image/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const body = await res.text();
        console.error("Server returned error:", res.status, body);
        setText(`Server error: ${res.status}`);
        return;
      }

      const data = await res.json();
      console.log("Backend response:", data);

      if (Array.isArray(data.sentences)) {
        setText(data.sentences.join("\n"));
      } else if (typeof data.text === "string") {
        setText(data.text);
      } else {
        setText(JSON.stringify(data));
      }
    } catch (err) {
      console.error("Upload failed:", err);
      setText("Upload failed — see console for details.");
    }
  }

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: "2px dashed #aaa",
          borderRadius: 10,
          padding: 40,
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input
          id="fileInput"
          type="file"
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
        <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
          {file ? `Selected file: ${file.name}` : "Drag & drop a file here or click to upload"}
        </label>
      </div>

      {file && file.type.startsWith("image/") && previewUrl && (
        <div style={{ marginTop: 20 }}>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: 300, maxHeight: 300 }} />
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        <h3>Your expenses:</h3>
        <textarea value={text} readOnly style={{ width: 400, height: 300 }} />
      </div>
    </>
  );
}
