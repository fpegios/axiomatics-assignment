import { RawNodeDatumFormatted } from "../interfaces"

function useHelpers() {
  const getTreeDataComputed = (d: any): RawNodeDatumFormatted[] => {
    if (Array.isArray(d)) {
      return d.map((value, i) => {
        if (typeof value === 'string') {
          return {
            name: value,
            hidden: value === '\n '
          }
        }
        
        return {
          name: `Node-${i}`,
          children: getTreeDataComputed(value)
        }
      }).filter(v => !v.hidden)
    }

    return Object.keys(d).map((key) => {
      const value = d[key as keyof typeof d]

      if (typeof value === 'string') {
        return {
          name: key,
          hidden: value === '\n '|| key === '@attributes' || key === '#text',
          attributes: d['@attributes'],
          children: [
            {
              name: value
            }
          ]
        }
      }
      
      const attributes = typeof value === 'object' && !Array.isArray(value) ? value['@attributes'] : undefined
      return {
        name: key,
        attributes,
        hidden: key === '@attributes' || key === '#text',
        children: getTreeDataComputed(value)
      }
    }).filter(v => !v.hidden)
  }

  return {getTreeDataComputed}
}
export default useHelpers
