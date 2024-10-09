import React, { useEffect } from 'react'

function useTitle(title) {
    useEffect(()=>{ 
        document.title=`${title}/ FlixTime`

    })
  
    return null;
}

export default useTitle
