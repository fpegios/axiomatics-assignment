import { RawNodeDatum } from "react-d3-tree/lib/types/common"

interface RawNodeDatumFormatted extends RawNodeDatum {
    hidden?: boolean
}

interface TreeViewProps {
    data: JSON
}

export type {TreeViewProps, RawNodeDatumFormatted}