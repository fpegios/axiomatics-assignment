import { RawNodeDatumFormatted, TreeData } from '../interfaces'

function useHelpers() {
  const getTreeDataComputed = (
    data: TreeData | TreeData[] | string[]
  ): RawNodeDatumFormatted[] => {
    if (Array.isArray(data)) {
      return data
        .map((value, i) => {
          if (typeof value === 'string') {
            return {
              name: value,
              hidden: value === '\n ',
            }
          }

          return {
            name: `Node-${i}`,
            children: getTreeDataComputed(value),
          }
        })
        .filter(v => !v.hidden)
    }

    return Object.keys(data)
      .map(key => {
        const value = data[key as keyof typeof data]

        if (typeof value === 'string') {
          return {
            name: key,
            hidden: value === '\n ' || key === '@attributes' || key === '#text',
            attributes: data['@attributes'],
            children: [
              {
                name: value,
              },
            ],
          }
        }

        const attributes =
          typeof value === 'object' && !Array.isArray(value)
            ? value['@attributes']
            : undefined

        return {
          name: key,
          attributes,
          hidden: key === '@attributes' || key === '#text',
          children: getTreeDataComputed(value),
        }
      })
      .filter(v => !v.hidden)
  }

  return { getTreeDataComputed }
}
export default useHelpers
