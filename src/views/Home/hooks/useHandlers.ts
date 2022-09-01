import { useCallback } from "react";
import { xmlToJson } from "../../../libs/utils";

function useHandlers () { 
    const handleFileOnLoad = function (event: any) {
        const xmlString = event.target.result
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        console.log(xmlToJson(xmlDoc))
    }

    const handleFileInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return

        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = handleFileOnLoad
        reader.readAsText(file);
    }, [])

    return { handleFileInputChange }
}

export default useHandlers