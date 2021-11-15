import React from 'react'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import BedRoom from './BedRoom';
import Bath1 from './Bath1'
import Bath2 from './Bath2'

function Floorplan(props) {
    return(
       <div id='floorplan'>
       < Kitchen/>,
       < LivingRoom/>,
       < BedRoom bedNum={1}/>,
       < BedRoom bedNum={2}/>,
       < BedRoom bedNum={3}/>,
       < Bath1 />,
       < Bath2 />, 
       </div>
    );
}

export default Floorplan;