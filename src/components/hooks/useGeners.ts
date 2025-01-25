import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Genre{
id:number
name:string
}
interface FetchGenresProps {
    count:number
    results:Genre[]
}
const useGeners = () => {

   const [geners, setGenres] = useState<Genre[]>([]);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(false)
   useEffect(() => {
     const controller = new AbortController();
     const signal = controller.signal;
     setLoading(true);
         
     apiClient
       .get<FetchGenresProps>("/genres", { signal })
       .then((res) => {
         console.log("API Response of Geners:", res.data); // Log the response data
         if (res.data && res.data.results) {
           setGenres(res.data.results);
         } else {
           console.warn("No data in response Geners");
         }
         setLoading(false);
       })
       .catch((err) => {
         if (err instanceof CanceledError) return;

         console.error("API Error:", err); // Log the error
         setError(err.message);
         setLoading(false);
       });
     return () => {
       controller.abort();
     };
   }, []);
   return { geners, error , loading };
}

export default useGeners
