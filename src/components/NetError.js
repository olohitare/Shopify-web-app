import React from 'react';
import { RefreshCcw } from 'react-feather';
import StyledNetError from '../styled/StyledNetError';
import { NetworkFailed } from '../svg';

const NetError = ({reloadFn}) => {
    return ( 
        <StyledNetError className="w-full">
            <div className = "centered flex-col">
                <div>
                    <NetworkFailed classNames = "icon" />
                </div>
                <p className = "text-center">Can't connect to the internet, Check your connection</p>
                {
                    reloadFn &&
                    <button className = "flex items-center" onClick = {reloadFn}>
                        <RefreshCcw size = {22}/>&nbsp;
                        Try again
                    </button>
                }
            </div>
        </StyledNetError>
    );
}
 
export default NetError;