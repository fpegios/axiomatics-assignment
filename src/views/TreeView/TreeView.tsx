import React, {useMemo} from 'react';
import Tree from 'react-d3-tree';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import useHelpers from './hooks/useHelpers';
import { TreeData, TreeViewProps } from './interfaces';
import './TreeView.css'

function TreeView ({data}: TreeViewProps) {
  const {getTreeDataComputed} = useHelpers()

  const dataComputed = useMemo((): RawNodeDatum => {
    console.log('XML data in JSON format: ', data)
    return getTreeDataComputed(data as unknown as TreeData)[0]
  }, [data, getTreeDataComputed])

  return (
    <div className='tree-wrapper'>
      <Tree
        data={dataComputed}
        orientation="vertical"
        initialDepth={3}
        nodeSize={{ x: 300, y: 300 }}
        dimensions={{width: window.innerWidth, height: 800}}
      />
    </div>
  )
}

export default React.memo(TreeView);
