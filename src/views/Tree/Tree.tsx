import React, {useEffect} from 'react';

interface TreeProps {
  data: JSON
}

function Tree ({data}: TreeProps) {
  useEffect(() => {
    console.log(data)
  }, [data])

  return <h1>Tree</h1>
}

export default React.memo(Tree);
