import { useState, useEffect } from 'react'

export const useScroll = () => {
  // setting initial value to true
  const [scroll, setScroll] = useState(1)

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 10
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    }

    // setting the event handler from web API
    document.addEventListener('scroll', onScroll)

    // cleaning up from the web API
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [scroll, setScroll])

  return scroll
}

// import { useEffect, useCallback } from 'react'

// export const useScroll = (
//   effect,
//   deps = []
// ) => {
//   const getScrollPosition = () => {
//     const position = document.body.getBoundingClientRect()
//     return {
//       x: position.left,
//       y: position.top,
//     }
//   }

//   const handleEffect = () => {
//     const position = getScrollPosition()
//     // setScrollPosition(position.y)
//     effect({ position })
//   }

//   useEffect(() => {
//     handleEffect()
//     return () => {
//       console.log("Cleanup")
//     }
//   }, deps)

//   useEffect(() => {
//     const handleScroll = () => {
//       handleEffect()
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, deps)

// }
