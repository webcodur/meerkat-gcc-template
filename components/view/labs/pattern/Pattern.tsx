import React from 'react'
import MetallicPatternHorizon from '@/components/ui/pattern/MetallicPatternHorizon'
import MetallicPatternVertical from '@/components/ui/pattern/MetallicPatternVertical'
import MetallicPatternBrushed from '@/components/ui/pattern/MetallicPatternBrushed'
import MetallicPatternNoise from '@/components/ui/pattern/MetallicPatternNoise'

const Pattern = () => {
  return (
    <div>
      <h1>Pattern1: Horizontal</h1>
      <MetallicPatternHorizon />  

      <h1>Pattern2: Vertical</h1>
      <MetallicPatternVertical />

      <h1>Pattern3: Brushed</h1>
      <MetallicPatternBrushed /> 

      <h1>Pattern4: Noise</h1>
      <MetallicPatternNoise />
    </div>
  )
}

export default Pattern
  