import { useCallback, useContext } from "react";
import { xmlToJson } from "../../../libs/utils";
import { useNavigate } from "react-router-dom";

interface UseHandlersProps {
    xmlData: JSON | null,
    setXmlData: (data: JSON | null) => void
}

function useHandlers ({
    xmlData,
    setXmlData
}: UseHandlersProps) { 
    const navigate = useNavigate();

    const handleFileOnLoad = useCallback((event: any) => {
        const xmlString = event.target.result
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        
        setXmlData(xmlToJson(xmlDoc) as JSON)
        navigate('/tree')
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