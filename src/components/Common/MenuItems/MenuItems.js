import React, { Component } from 'react';

import './MenuItems.css';

class MenuItems extends Component {

    render() {
        return (
            <div className={'col-sm-12 col-md-12'}>
                <h3>{this.props.headTitle}</h3>
                <hr style={{ backgroundColor: 'white' }} />
                {this.props.category && this.props.category.map((item, index) => {
                    return (
                        <div key={item.pk} className={'row noGap'} id={'foodItem'}>
                            <div className={'col-sm-6 col-md-10 '}>
                                <h4>{item.name} <span><p className='float-right'>{item.price}</p></span></h4>
                            </div>
                            {item.description ? <div className='col-sm-12 col-md-8'>
                            <p>{item.description}</p>
                            </div> : null}
                        </div>
                    )
                })}
            </div>
        )
    }

};

export default MenuItems;