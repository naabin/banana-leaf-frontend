import React, { Component } from 'react'

import './Gallery.css'

import { connect } from "react-redux";

import * as _ from '../../store/actions/actionCreator'
import Loading from "../Loading/Loading";

import Lightbox from 'react-image-lightbox'

class Gallery extends Component {
    state = {
        pk: 0,
        isOpen: false
    };

    componentDidMount() {
        this.props.fetchImages();
    }

    pkAndIsOpenHandler = (pk) => {
        this.setState({
            photoIndex: pk,
            isOpen: true
        })
    };
    render() {
        const images = this.props.images && this.props.images.images;
        const { photoIndex, isOpen } = this.state;
        let cardImage = null;
        cardImage = (
            <div className={'row d-flex d-flex justify-content-center'}>
                {images.map((image, index) => {
                    return (
                        <div key={image.pk} className='col-sm-6 col-md-2 col-lg-2 m-1 p-0 img-responsive'>
                            <div>
                                <div>
                                    <img onClick={() => {
                                        this.pkAndIsOpenHandler(index);
                                        this.props.show();
                                    }} id={'cardImage'} src={image.image} title={image.title} alt="" />
                                    {/* <h3 id="image-text" className="text-center">{image.title}</h3> */}
                                </div>
                            </div>
                            {isOpen && <Lightbox
                                mainSrc={images[photoIndex].image}
                                imagePadding={50}
                                nextSrc={images[(photoIndex + 1) % images.length].image}
                                imageTitle={images[photoIndex].title}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length].image}
                                onCloseRequest={() => {
                                    this.setState({ isOpen: false });
                                    this.props.show()
                                }}
                                onMovePrevRequest={() => {
                                    this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length })
                                }}
                                onMoveNextRequest={() => {
                                    this.setState({ photoIndex: (photoIndex + 1) % images.length })
                                }}
                            />}
                        </div>
                    )
                })}
            </div>
        )
        // if (this.props.images.isLoading) {
        //     cardImage = <Loading />;
        // }
        return (
            <div id='Gallery'>
                {this.props.images.isLoading? <Loading/>:cardImage}
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        images: state.images
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchImages: () => dispatch(_.fetchImages())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);