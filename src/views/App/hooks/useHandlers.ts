import React, { useCallback, useContext } from "react";
import { xmlToJson } from "../../../libs/utils";

interface UseHandlersProps {
    setTreeData: React.Dispatch<React.SetStateAction<JSON | null>>
}

function useHandlers ({setTreeData}: UseHandlersProps) { 
    const handleFileUploadChange = useCallback((data: JSON) => {
        setTreeData(data)
    }, [])

    return { handleFileUploadChange }
}

export default useHandlers