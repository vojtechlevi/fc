// src/components/PdfViewer.js
import React, { useEffect, useState } from "react";
import supabase from "../utils/supabaseClient";

function PdfViewer() {
  const [pdfUrls, setPdfUrls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        // Hämta listan med alla filer i 'kampanj' bucket
        const { data: files, error: listError } = await supabase.storage
          .from("kampanj")
          .list(""); // ersätt med ditt bucket-namn
        // ange mapp om dina pdf-filer är i en specifik mapp

        if (listError) {
          throw listError;
        }

        // Logga resultatet av listningen
        console.log("Files in bucket:", files);

        if (files.length === 0) {
          throw new Error("No files found in the bucket.");
        }

        // Generera public URLs för varje fil
        const urls = await Promise.all(
          files.map(async (file) => {
            const { data, error: urlError } = await supabase.storage
              .from("kampanj")
              .getPublicUrl(file.name);

            if (urlError) {
              throw urlError;
            }

            return data.publicUrl;
          })
        );

        setPdfUrls(urls);
      } catch (err) {
        console.error("Error fetching PDFs:", err);
        setError(err.message);
      }
    };

    fetchPdfs();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {error && <p className="text-red-500">{error}</p>}
      {pdfUrls.length === 0 && !error && <p>Loading PDFs...</p>}
      {pdfUrls.map((url, index) => (
        <iframe
          key={index}
          src={url}
          title={`PDF ${index + 1}`}
          width="600"
          height="400"
          className="border"
        />
      ))}
    </div>
  );
}

export default PdfViewer;
