import React from 'react'

import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import './DieteryIcon.css';



const DieteryIcon = props => {
    const gluten = props.glutenFree;
    const dairy = props.dairyFree;
    const vegetarian = props.vegetarian;
    const vegan = props.vegan;
    return (
        <>
        <OverlayTrigger  overlay={<Tooltip>gluten free</Tooltip>}>
            <span className='d-inline-block'>
                <div onClick={() => <Tooltip>gluten free</Tooltip>} >
                    {gluten ? <div id='gluten'><p id='glutenFree'>G</p></div> : null}
                </div>
            </span>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip> dairy free</Tooltip>}>
            <span className='d-inline-block'>
                <div  onClick={() => <Tooltip>gluten free</Tooltip>} >
                    {dairy ? <div id='gluten'><p id='glutenFree'>D</p></div> : null}
                </div>
            </span>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip> vegetarian</Tooltip>}>
            <span className='d-inline-block'>
                <div  onClick={() => <Tooltip>gluten free</Tooltip>} >
                    {vegetarian ? <div id='gluten'><p id='glutenFree'>V</p></div> : null}
                </div>
            </span>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip> vegan</Tooltip>}>
            <span className='d-inline-block'>
                <div  onClick={() => <Tooltip>gluten free</Tooltip>} >
                    {vegan ? <div id='gluten'><p id='glutenFree'>VG</p></div> : null}
                </div>
            </span>
        </OverlayTrigger>

        </>
    )
}   

export default DieteryIcon;
