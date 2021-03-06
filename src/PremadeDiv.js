import React from 'react'
import PremadeCard from './PremadeCard'

export default function PremadeDiv({premadePalettes}) {
    
    const displayColors = () => premadePalettes.map(palette => {
        return <PremadeCard palette={palette} key={Math.random()} />
    })

    return (
        <div className="colors-set">
            {displayColors()}
        </div>
    )
}