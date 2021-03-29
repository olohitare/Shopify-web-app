import React from 'react';
import Nomination from '../components/Nomination';
import PageLayout from '../components/PageLayout';
import { useNominationContext } from '../context/NominationContext';
import StyledNominationsPage from '../styled/StyledNominationsPage';
import { animated, useTransition } from 'react-spring';
import { Award, ChevronLeft } from 'react-feather';
import { useHistory } from 'react-router-dom';

const NominationsPage = () => {
    const { nominations } = useNominationContext();

    const transitions = useTransition(nominations,n=>n.imdbID,{
        from: { transform: 'translateY(30px)', opacity: 0},
        enter: { transform: 'translateY(0px)', opacity: 1},
        leave: { transform: 'translateY(30px)', opacity: 0},
    });

    const history = useHistory();

    const goBack = React.useCallback(()=>{
        history.goBack()
    },[])

    return ( 
        <PageLayout>
            <StyledNominationsPage className = "flex h-full flex-col">
                <header className = "flex-shrink-0">
                    <span onClick = {goBack} className = "mb-4 back">
                        <ChevronLeft/>
                    </span>
                    <h2>
                        Your Nominations
                    </h2>
                    <p>You have made {nominations.length} nominations</p>
                </header>
                <div className="main flex-grow">
                    {
                        nominations.length > 0 ?
                        <div className="MoviesList">
                            {
                                transitions.map(({item,props,key})=>{
                                    return (
                                        <animated.div style = {props} key = {key}>
                                            <Nomination 
                                            nomination = {item} 
                                            />
                                        </animated.div>
                                    )
                                })
                            }
                        </div>:
                        <div className = "h-full no-nominations centered flex-col">
                            <Award size = {100} color = "#ccc"/>
                            <p className = "text-center mt-3">When you add nominations, they magically appear here</p>
                        </div>
                    }
                </div>
            </StyledNominationsPage>
        </PageLayout>
     );
}
 
export default NominationsPage;