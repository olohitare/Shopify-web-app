import React from 'react';
import { Award, Bookmark, User } from 'react-feather';
import { Link, NavLink } from 'react-router-dom';
import { useNominationContext } from '../context/NominationContext';
import StyledPageLayout from '../styled/StyledPageLayout';

const PageLayout = ({ children }) => {
    const { nominations } = useNominationContext();
    return ( 
        <StyledPageLayout>
            <main>
                { children }
            </main>
            <footer>
                <div className = "w-full h-full px-2">
                    <ul className = "h-full w-full">
                        <li className = "px-3">
                            <NavLink
                            exact
                            to = '/' 
                            activeClassName = "active">
                                <Bookmark size = {26}/>
                            </NavLink>
                        </li>
                        <li className = "px-3">
                            <NavLink
                            to = '/nominations'
                            activeClassName = "active">
                                <div  className = "relative">
                                    <Award size = {26}/>
                                    <span className="absolute centered nominations-count">
                                        { nominations.length }
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        <li className = "px-3">
                            <NavLink
                            to = '/account'
                            activeClassName = "active">
                                <User size = {26}/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </footer>
        </StyledPageLayout>
     );
}
 
export default PageLayout;