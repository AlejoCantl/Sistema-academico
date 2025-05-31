"use client";
import { CloudUpload } from "lucide-react";
import { useRef, useState } from "react";

export default function UploadExcel() {
  const [placeholderText, setPlaceholderText] = useState("Subir archivo Excel");
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
    inputRef.current.onchange = (e) => {
      const fileName = e.target.files[0]?.name;
      if (fileName) {
        setPlaceholderText(fileName);
      } else {
        setPlaceholderText("Subir archivo Excel");
      }
    };
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
      <label
        style={{
          fontSize: "14px",
          color: "#000",
          marginTop: "10px",
          marginBottom: "5px",
        }}
      >
        Insertar Excel
      </label>

      {/* Input oculto */}
      <input
        type="file"
        accept=".xlsx, .xls"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={(e) => {
          const fileName = e.target.files[0]?.name;
          console.log("Archivo seleccionado:", fileName);
        }}
      />

      {/* Botón visible que actúa como placeholder */}
      <button
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#2E71BD",
          color: "#fff",
          padding: "12px 20px",
          border: "none",
          borderRadius: "10px",
          width: "250px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {placeholderText}
        <CloudUpload size={20} />
      </button>
    </div>
  );
}
