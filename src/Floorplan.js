import React from 'react'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import BedRoom from './BedRoom';
import Bath from './Bath'


function Floorplan(props) {
    return(
       <div id='floorplan'>
       < Kitchen/>,
       < LivingRoom/>,
       < BedRoom bedNum={1}/>,
       < BedRoom bedNum={2}/>,
       < BedRoom bedNum={3}/>,
       < Bath size='full' />,
       < Bath size='half' />,
       </div>
    );
}

export default Floorplan;