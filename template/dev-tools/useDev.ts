import React, { useEffect, useRef } from 'react'

/**
 * example of usage: useDev('MyComponent').reRendering()
 * @param componentName - optional
 * @returns
 */
export function useDev(componentName: string = 'Component') {
  return {
    renderTimeMeasurement: () => useDevRenderTimeMeasurement(componentName),
    reRendering: () => useDevReRenderingConsole(componentName),
    delay: (ms: number = 1000) => delay(ms),
  }
}

function useDevRenderTimeMeasurement(componentName: string) {
  const start = performance.now()

  useEffect(() => {
    const end = performance.now()
    console.log(
      `${componentName} Rendering took:`,
      end - start,
      `ms ~ ${((end - start) / 1000).toFixed(2)} s`,
    )
  }, [])
}

function useDevReRenderingConsole(componentName?: string) {
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current += 1
    console.log(`${componentName} rendered ${renderCount.current} times`)
  })
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
