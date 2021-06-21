import React from 'react'
import PremadeCard from './PremadeCard'

export default function Premade4({premadeFour}) {

    const displayColors = () => premadeFour.map(palette => {
        return <PremadeCard palette={palette} key={Math.random()} />
    })

    return (
        <div className="colors-set">
            {displayColors()}
        </div>
    )
}
