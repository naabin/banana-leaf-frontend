import React, { Component } from 'react'

import './Gallery.css'

import { connect } from "react-redux";

import * as _ from '../../store/actions/actionCreator'
import Loading from "../Loading/Loading";

import Lightbox from 'react-images'


class Gallery extends Component {
    state = {
        photoIndex: 0,
        isOpen: false,
    };

    componentDidMount() {
        this.props.fetchImages(1, null);
    }
    pkAndIsOpenHandler = (pk) => {
        this.setState({
            photoIndex: pk,
            isOpen: true
        })
    };
    onMovePrevRequest = (imageLength) => {
        this.setState({ photoIndex: (this.state.photoIndex + imageLength - 1) % imageLength })
    }
    onMoveNextRequest = (imageLength) => {
        this.setState({ photoIndex: (this.state.photoIndex + 1) % imageLength })
    }
    gotToImage = (index) => {
        this.setState({ photoIndex: index })
    }
    nextFetchImage = (e) => {
        if(this.props.images.nextPage !== null){
            this.props.imageLoading();
            let pathName =  this.props.router.location.pathname = `/gallery/${this.props.images.nextPage}`;
            this.props.router.history.push(pathName)
            this.props.fetchImages(this.props.images.nextPage, true)
        }
    }

    render() {
        const images = this.props.images && this.props.images.images;
        const imageUrls = [];
        for (let i = 0; i < (images && images.length); i++) {
            if (images && images[i]) {
                imageUrls.push({ 'src': images && images[i] && images[i].image })
            }
        }
        const { isOpen } = this.state;
        let cardImage = null;
        cardImage = (
            <>
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
                            </div>
                        )
                    })}
                </div>
                {this.props.images.nextPage ? <div className='col-sm-12 col-md-12 text-center p-2'>
                {this.props.images.refreshing ? <button className="btn btn-success" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                        </button> : <button className='btn btn-success' onClick={(e)=>this.nextFetchImage(e)}>Load more</button> }
                </div> : null }
            </>
        )
        return (
            <>
            <div id='Gallery'>
                {this.props.images.isLoading ? <Loading /> : cardImage}
                {isOpen &&
                    <Lightbox

                        preventScroll={false}
                        spinner={() => <Loading />}
                        currentImage={this.state.photoIndex}
                        isOpen={isOpen}
                        showThumbnails
                        onClickThumbnail={this.gotToImage}
                        images={imageUrls}
                        enableZoom={false}
                        onClickNext={() => this.onMoveNextRequest(imageUrls.length)}
                        onClickPrev={() => this.onMovePrevRequest(imageUrls.length)}
                        onClose={() => {
                            this.setState({ isOpen: false });
                            this.props.show()
                        }}
                    />

                }
            </div>
            </>

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
        fetchImages: (next, append) => dispatch(_.fetchImages(next, append)),
        imageLoading: () => dispatch(_.imageRefreshing())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);