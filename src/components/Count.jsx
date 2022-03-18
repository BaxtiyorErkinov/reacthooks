import React from 'react';


export default React.memo(function Count ({count, id}) {

  console.log(`render in => ${id}`)

  return (
    <div className="counter">
      <h1>{count}</h1>
    </div>
  )
})