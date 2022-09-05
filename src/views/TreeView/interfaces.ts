import { RawNodeDatum } from 'react-d3-tree/lib/types/common'

interface RawNodeDatumFormatted extends RawNodeDatum {
  hidden?: boolean
}

interface TreeViewProps {
  data: JSON
}

type TreeDataValue = string | string[] | TreeData | TreeData[]

type AttributesType = Record<string, string>

type TreeData = {
  '@attributes'?: AttributesType
} & {
  [key: string]: TreeDataValue
}

export type {
  TreeViewProps,
  RawNodeDatumFormatted,
  TreeDataValue,
  AttributesType,
  TreeData,
}
