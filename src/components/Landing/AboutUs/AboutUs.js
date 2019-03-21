import React, {Component} from 'react'

import './AboutUs.css'


class  AboutUs extends Component {
    state = {
        more: false
    }
    expandText = () => {
        this.setState({more: true})
    }
    render(){
        const aboutUs = "Sri Lanka, once known to the Western world as Ceylon and to the ancients as Taprobane, is situated at the southernmost tip of India, and for this reason, it is commonly referred to as a 'teardrop' or the ‘Pearl of the East’.It has a recorded history of over 2500 years, and is populated by a few races: the Sinhala, Tamil, Moor people, and other minority groups. Most of the population are Sinhalese and their history can be traced back to 483 B.C. when Vijaya set foot on the island. The island has also been known by other romantic names like Serendib, Zeilan, Sila-Diva, Salike, and Simundu. The Chinese called it ‘The Land Without Sorrow’. It is now well known as ‘The Resplendent Land’. Sri Lanka is truly resplendent being blessed with a  paradise-like beauty, deep-blue seas, sandy beaches, and a balmy 32 degrees all year round on the coastal areas, Sri Lanka has an amazing variety of food. There is a rich indigenous selection with distinct differences in taste in the low country, hill country, and northern regions of the island. There are also influences from conquerors who brought their own contributions of cuisine - mainly the British, Portuguese, and the Dutch.In this menu, you will be delighted with the selection of Sri Lankan offerings that have been tempered with the characteristics of Indian, Arab, Malay, Moor, Portuguese, Dutch, and British influences. Whilst thanking you most gracefully in true Sri Lankan style, we bring our hands together - touching palms and with our head bowed - saying 'Ayubowan' which means welcome. We hope you will enjoy the presentation, the colours, and the taste of every little morsel of food that you order from our carefully selected menu."
        const partialAboutUs = aboutUs.substr(0,224);
        const fullText = aboutUs.substr(224, aboutUs.length-1);
        return (
            <div className='jumbotron text-center'>
            <div className='row'>
                <div className="col-md-4 offset-md-1 mx-3 my-3">
                    <div className="view overlay">
                        <img src={require('../../../assets/res.jpg')} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className=" col-sm-12 col-md-6 text-md-left ml-3 mt-3">
                    <h4 className="h4 mb-4">A little about Sri Lanka and about us</h4>
                    <p id='about' className="font-weight-normal">
                        {partialAboutUs}
                    </p>
                    <div>
                        {this.state.more ? <p id='about' className='font-weight-normal'>{fullText}</p>:<button className='btn btn-success btn-sm' onClick={this.expandText}>Read More</button>}
                    </div>
                </div>
            </div>
        </div>
        )
    }



}
export default AboutUs;