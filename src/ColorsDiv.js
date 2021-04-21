import React from 'react'
import Card from './Card'

export default function ColorsDiv({colors}) {

    const displayColors = () => colors.map(color => {
        return <Card color={color} key={color}/>
    })

    return (
        <div className="colors-set">
            {displayColors()}
        </div>
    )

}