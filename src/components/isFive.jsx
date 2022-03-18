import React, {useMemo} from 'react';


export default React.memo(function IsFive ({count}) {
  console.log(`is five => ${count}`)
  const getResult = useMemo(() => {
    let i = 0;
    while(i < 600000000) i++;
    return count == 5 ? "is Five ))))" : "is Not Five ((((";
  }, [count])

  return (
    <h3 className="isFive">
      {getResult}
    </h3>
  )
}, (prevProps, nextProps) => {
  if(nextProps.count == 5) {
    return false
  } else {
    return true
  }
})