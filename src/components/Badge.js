import React from 'react';
import { Award } from 'react-feather';
import StyledBadge from '../styled/StyledBadge';


const Badge = () => {
    return ( 
        <StyledBadge className = "centered flex-col">
            <Award color = "#e1e5e9" size = {80}/>
            <h3 className="mt-3 text-center">
                Congratulations!
            </h3>
            <p className = "text-center">You have successfully nominated <br/> five movies</p>
        </StyledBadge>
     );
}
 
export default Badge;