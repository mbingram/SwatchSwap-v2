import React from 'react'
import PremadeCard from './PremadeCard'

export default function Premade3({premadeThree}) {

    const displayColors = () => premadeThree.map(palette => {
        return <PremadeCard palette={palette} key={Math.random()} />
    })

    return (
        <div className="colors-set">
            {displayColors()}
        </div>
    )
}
