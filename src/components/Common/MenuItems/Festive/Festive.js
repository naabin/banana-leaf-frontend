import React from 'react'

import './Festive.css'

import DieteryIcon from '../../DieteryIcon/DieteryIcon.js'


const Festive = props => {
    return(
        <>
        <div className='container text-center p-3'>
            <h3>MERRY CHRISTMAS 2019</h3>
            <h5>Three course choice A La'Carte<br/> Lunch 11.30 am to 2.30 pm</h5>
        </div>
         <div>
            <h5 className='text-center'>Trio of Seafood <DieteryIcon glutenFree={true} dairyFree={true}></DieteryIcon></h5>
            <p className="text-center">Grilled scallops, prawns & smoked salmon served with Sri Lankan spiced tamarind sauce</p>

            <h5 className='text-center'>Turkey Pan Roll</h5>
            <p className="text-center">
            Sri Lankan mildly curried minced Turkey and potato rolled in a crepe,crumbed and lightly <br/> fried drizzled with cranberries & mango coulis
            </p>
            <hr/>
            <h5 className='text-center'>Lamb Biriyani <DieteryIcon glutenFree={true}></DieteryIcon></h5>
            <p className="text-center">
            Traditional Biriyani with savoury rice and diced lamb.<br/> Cooked with cashew nuts, Sultanas and Fried Onions.<br/> Served with Pappadams and cucumber raita.
            </p>
            <h5 className='text-center'>Barramundi <DieteryIcon glutenFree={true}> </DieteryIcon></h5>
            <p className="text-center">
            Pan grilled Barramundi dusted with mild Sri Lankan spices. Served with Sweet Potato mash.
            </p>
            <h5 className="text-center">Spiced Chicken <DieteryIcon glutenFree={true} dairyFree={true} /></h5>
            <p className="text-center">
            Sri Lankan spices marinated chicken breast placed on Turmeric and Paprika coated potatoes.<br/> Drizzled with mild devil Sauce.
            </p>
            <h5 className="text-center">Pork Belly <DieteryIcon glutenFree={true}/></h5>
            <p className="text-center">
            Chilli and honey glazed, crispy skin slow cooked poke belly comes with grilled button <br/> squash, Brussels sprouts, Broccolini, Pumpkin puree, Poached apple and rhubarb compote.
            </p>
            <hr/>
            <h5 className="text-center">Sri Lankan Wood Apple Mousse <DieteryIcon glutenFree={true}/></h5>
            <p className="text-center">A light sweet & tangy mousse made with Sri Lanka wood apple puree</p>
            <h6 className="text-center">Or</h6>
            <h5 className="text-center">Date and Cashew Cake</h5>
            <p className="text-center">Light & fluffy cake serve with custard & caramel sauce</p>
            <h6 className="text-center">Or</h6>
            <h5 className="text-center">Nutella and Ricotta Tart</h5>
            <p className="text-center">Serve with fresh berries & whipped cream</p>
            <h5 className="text-center">Adults $95 PP (Kids under 12) $ 35 Kids Menu</h5>
            <h6 className="text-center"> <i>NO BYO<br/>
                Please notify staff of all allergies<br/>
                G gluten free D dairy free V vegetarian V vegan *on request</i></h6>
        </div>
        
        </>
    )
}

export default Festive;