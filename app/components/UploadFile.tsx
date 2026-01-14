"use client";

import { useRef, useState } from "react";
import { usePdf } from "../context/fileContext";

const UploadFile = ({ uploading }: { uploading: boolean }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { file, setFile } = usePdf();
  const [isDragging, setIsDragging] = useState(false);


  function handleFile(selectedFile: File) {
    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF file only.");
      return;
    }
    setFile(selectedFile);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFile(droppedFile);
  }

  async function useSamplePdf() {
    if (uploading) return;

    try {
      const res = await fetch("/wesam_lafi_cv.pdf");
      if (!res.ok) throw new Error("Failed to load sample PDF");

      const blob = await res.blob();

      const file = new File([blob], "wesam_lafi_cv.pdf", {
        type: "application/pdf",
      });

      handleFile(file);
    } catch (err) {
      console.error(err);
      alert("Could not load sample PDF");
    }
  }
  return (
    <div className="h-full relative ">
      {uploading &&
        <div className="z-20 absolute bg-[#99f6e379] w-full h-full flex items-center justify-center ">

          <div className="h-24 w-24 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      }

      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        disabled={uploading}
        onChange={(e) => {
          if (e.target.files?.[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
        className={`cursor-pointer rounded-xl border-2 border-dashed border-primary bg-[#99F6E426] p-8 text-center transition h-full flex flex-col justify-center items-center
          ${isDragging
            ? "border-primary bg-[#99f6e36e]"
            : "border-primary hover:border-slate-400"
          }
        `}
      >
        <p className="text-lg font-medium text-slate-700">
          {file ? "PDF Selected" : "Upload your PDF"}
        </p>

        <p className="mt-2 text-sm text-slate-500">
          {file ? file.name : "Click to browse or drag & drop"}
        </p>

        {!file && (
          <p className="mt-1 text-xs text-slate-400">
            PDF only · Max size depends on server
          </p>
        )}
      </div>
      <button
        type="button"
        disabled={uploading}
        onClick={useSamplePdf}
        className="mt-3 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/10 disabled:opacity-50"
      >
        Try with sample PDF
      </button>
      {file && (
        <div className="mt-4 rounded-lg bg-accent p-3 text-sm text-slate-700 ">
          <div className="flex items-center justify-between">
            <span className="truncate">{file.name}</span>
            <span className="text-slate-400">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
        </div>
      )}

    </div>
  );
};

export default UploadFile;
