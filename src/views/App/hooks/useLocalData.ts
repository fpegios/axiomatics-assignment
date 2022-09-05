import { useState } from 'react'
import { xmlToJson } from '../../../libs/utils'

function useLocalData() {
  const [treeData, setTreeData] = useState<JSON | null>(null)

  return { treeData, setTreeData }
}

export default useLocalData
