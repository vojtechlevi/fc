import { useState, useEffect } from "react";
import { createClient } from "contentful";

export const useContentfulDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN,
  });

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        // Simulera hämtning från Contentful
        // Ersätt detta med din faktiska API-anro
        const entries = await client.getEntries({ content_type: "document" });
        setDocuments(entries);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return { documents, isLoading, error };
};
