import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
    count:number
    results:T[]
}
const useData = <T>(endpoint:string , requsetConfig?:AxiosRequestConfig, dependencies?:any[]) => {

   const [data, setData] = useState<T[]>([]);
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(false)
   useEffect(() => {
     const controller = new AbortController();
     const signal = controller.signal;
     setLoading(true);
         
     apiClient
       .get<FetchResponse<T>>(endpoint,  { signal , ...requsetConfig} )
       .then((res) => {
         console.log(`API Response of ${data}:`, res.data); // Log the response data
         if (res.data && res.data.results) {
           setData(res.data.results);
         } else {
           console.warn(`No data in response ${data}`);
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
   }, dependencies?[...dependencies]:[]);
   return { data, error, loading };
}

export default useData
