import React, { useState, useEffect } from 'react';

import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import RestoreIcon from '@material-ui/icons/Restore';

const HUD = () => {

    return (
        <div>

            <div id="zoomBtnsDiv">
                <ZoomInIcon className="zoomBtns" onClick={() => zoomIn()}/>
                <ZoomOutIcon className="zoomBtns" onClick={() => zoomOut()}/>
                <RestoreIcon className="zoomBtns" onClick={() => resetTransform()}/>
            </div>

            <div id="legendBtnDiv">
                <button id="legendBtn">
                    LEGEND
                </button>
            </div>

        </div>
    )
}

export default HUD

