import React, { Component } from 'react'

import './Gallery.css'

import { connect } from "react-redux";

import * as _ from '../../store/actions/actionCreator'
import Loading from "../Loading/Loading";

import Lightbox from 'react-image-lightbox'
import "react-image-lightbox/style.css";

class Gallery extends Component {
    state = {
        photoIndex: 0,
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
    onMovePrevRequest = (imageLength) => {
        this.setState({photoIndex:(this.state.photoIndex + imageLength -1) % imageLength})
    }
    onMoveNextRequest = (imageLength) => {
        this.setState({photoIndex:(this.state.photoIndex + 1) % imageLength})
    }
    render() {
        const images = this.props.images && this.props.images.images;
        const imageUrls = [];
        for(let i=0; i < (images && images.length);i++){
            if(images && images[i]){
                imageUrls.push(images && images[i] && images[i].image)
            }  
        }
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

                                mainSrc={imageUrls[photoIndex]}
                                mainSrcThumbnail={imageUrls[photoIndex]}
                                // imagePadding={5}
                                animationDisabled
                                enableZoom={false}
                                nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
                                nextSrcThumbnail={imageUrls[(photoIndex + 1) % imageUrls.length]}
                                imageTitle={images[photoIndex].title}
                                prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
                                prevSrcThumbnail ={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}

                                onCloseRequest={() => {
                                    this.setState({ isOpen: false });
                                    this.props.show()
                                }}
                                
                                onMovePrevRequest={() => this.onMovePrevRequest(imageUrls.length)}
                                onMoveNextRequest={() => this.onMoveNextRequest(imageUrls.length)}
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