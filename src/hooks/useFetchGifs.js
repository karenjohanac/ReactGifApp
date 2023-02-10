import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/* custom hook */
export const useFetchGifs = ( category ) => {
      
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    /* Hook useEffect di spara efectos secundarios*/
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    };
};
