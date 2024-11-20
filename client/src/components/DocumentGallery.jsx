import React, { useState } from "react";
import { X } from "lucide-react";
import { useContentfulDocuments } from "../utils/contenfulDocumentFetcher";

const DocumentGallery = () => {
  const { documents, isLoading, error } = useContentfulDocuments();
  const [selectedDocument, setSelectedDocument] = useState(null);

  console.log(documents);
  const openModal = (document) => {
    setSelectedDocument(document);
  };

  const closeModal = () => {
    setSelectedDocument(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Laddar dokument...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Ett fel inträffade: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {documents.items.map((doc, index) => (
          <div
            key={index}
            className="cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => openModal(doc)}
          >
            <div className="bg-gray-100 rounded-lg overflow-scroll shadow-md">
              <img
                src={`https:${doc.fields.file.fields.file.url}`}
                alt={doc.fields.title}
                className="h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-center truncate">
                  {doc.fields.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDocument && (
        <div
          className="fixed max-h-screen inset-0 overflow-hidden bg-black bg-opacity-70 z-40 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[500px]  w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-1 -right-10 z-50  text-white hover:text-black border-2 rounded-md "
            >
              <X size={24} />
            </button>
            {selectedDocument.fields.file.fields.file.contentType ===
            "application/pdf" ? (
              <iframe
                src={selectedDocument.fields.file.fields.file.url}
                title={selectedDocument.fields.title}
                className="w-full  bg-white"
              />
            ) : (
              <img
                src={selectedDocument.fields.file.fields.file.url}
                title={selectedDocument.fields.title}
                className="w-full h-full object-contain bg-white rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentGallery;
