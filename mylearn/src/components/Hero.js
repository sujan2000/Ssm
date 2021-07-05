import React from 'react'

function Hero({heroName}) {
    if(heroName === "meena"){
        throw new Error('not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
