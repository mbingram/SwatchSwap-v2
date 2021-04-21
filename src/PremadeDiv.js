import React from 'react'
import PremadeCard from './PremadeCard'

export default function PremadeDiv({premadePalettes}) {
    
    const displayColors = () => premadePalettes.map(palette => {
        return <PremadeCard palette={palette} />
    })


    return (
        <div className="colors-set">
            {displayColors()}
        </div>
    )
}