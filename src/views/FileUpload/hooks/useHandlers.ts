import { useCallback, useContext } from "react";
import { xmlToJson } from "../../../libs/utils";

interface UseHandlersProps {
    onChange: (data: JSON) => void
}

function useHandlers ({onChange}: UseHandlersProps) { 
    const handleFileOnLoad = useCallback((event: any) => {
        const xmlString = event.target.result
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString.trim(), 'text/xml');

        onChange(xmlToJson(xmlDoc) as JSON)
    }, [])

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