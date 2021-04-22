import React from 'react'
import PremadeCard from './PremadeCard'

export default function Premade2({premadeTwo}) {

    const displayColors = () => premadeTwo.map(palette => {
        return <PremadeCard palette={palette} key={Math.random()} />
    })

    return (
        <div className="colors-set">
            {displayColors()}
        </div>
    )
}
