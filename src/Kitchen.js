import React from 'react'
import Oven from './Oven.js'
import Sink from './Sink.js'

function Kitchen(props) {
    return (
        <div id='kitchen'>
            <h1>Kitchen</h1>
            <Oven/>
            <Sink/>
        </div>
    )
}

export default Kitchen;