import React, { useEffect, useState, CSSProperties} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HashLoader from 'react-spinners/HashLoader';

export default function AnalysisPage() {
  const { query } = useParams();
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/analyze';
        const response = await axios.post(API_URL, { product: query });
        const analysis = response.data || "Analysis not available";
        console.log('API Response:', response.data);
        console.log("API Response Analysis:", analysis);
        setAnalysis(response.data);
      } catch (err) {
        console.error('Error fetching analysis:', err); 
        setError('An error occurred while fetching analysis. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    if (query){
        fetchAnalysis();
    }
  }, [query]);
  
  const override: CSSProperties = {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  };

  return (
    <div className="p-4">
      {loading ? (
        <HashLoader
        color={'#50C878'}
        loading={loading}
        cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      ): error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div>
          <h2 className=" text-emerald-600 text-xl font-semibold mb-4"> AI Overview </h2>
         
          <pre className="text-gray-700 whitespace-pre-wrap">{analysis}</pre>
        </div>
      )}
    </div>
  );
}
