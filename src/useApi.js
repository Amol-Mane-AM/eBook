/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

/* eslint-disable no-undef */
export const useApi = (url)=>{

    const [Product, setProducts] = useState([]);

     
    const[loading,setLoading] = useState(false);

    console.log(Product);
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(d => d.json())
            .then(res => setProducts(res))
            .finally(()=>
            setLoading(false));
    }, [url]);


    return {Product,loading};
}

export default useApi;