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
        imageName: '',
    };

    componentDidMount() {
        this.props.fetchImages(1, null);
    }
    pkAndIsOpenHandler = (pk, imagePk, imageName) => {
        this.setState({
            photoIndex: pk,
            isOpen: true,
        })
        let pathName =  this.props.router.location.pathname = `/gallery/${imagePk}/${imageName}`;
        this.props.router.history.push(pathName)
    };
    onMovePrevRequest = (imageLength, image) => {
        this.setState({ photoIndex: (this.state.photoIndex + imageLength - 1) % imageLength })
        let pathName =  this.props.router.location.pathname = `/gallery/${image && image.pk }/${image && image.name}`;
        this.props.router.history.push(pathName)
    }
    onMoveNextRequest = (imageLength, image) => {
        this.setState({ photoIndex: (this.state.photoIndex + 1) % imageLength })
        let pathName =  this.props.router.location.pathname = `/gallery/${image && image.pk }/${image && image.name}`;
        this.props.router.history.push(pathName)
    }

    gotToImage = (index) => {
        this.setState({ photoIndex: index })
    }
    nextFetchImage = (e) => {
        if(this.props.images.nextPage !== null){
            this.props.imageLoading();
            this.props.fetchImages(this.props.images.nextPage, true)
        }
    }

    render() {
        const images = this.props.images && this.props.images.images;
        const imageUrls = [];
        for (let i = 0; i < (images && images.length); i++) {
            if (images && images[i]) {
                imageUrls.push({ 'src': images && images[i] && images[i].image, 'name': images && images[i] && images[i].title, 'pk': images && images[i].pk })
            }
        }
        const { isOpen } = this.state;
        let cardImage = null;
        // const facebookUrl = `https://www.facebook.com/sharer/sharer.php?`;
        cardImage = (
            <>
                <div className={'row d-flex d-flex justify-content-center'}>
                    {images.map((image, index) => {
                        return (
                            <div key={image.pk} className='col-sm-6 col-md-2 col-lg-2 m-1 p-0 img-responsive'>
                                <div>
                                    <div>
                                        <img onClick={() => {
                                            this.pkAndIsOpenHandler(index, image.pk, image.title);
                                            this.props.show();
                                        }} id={'cardImage'} src={image.image} title={image.title} alt="" />
                                        {/* <a id='image-text' className="btn btn-default" href={`${facebookUrl}u=${window.location.href}/${image.pk}/${image.title}`} rel="noopener noreferrer"  target='_blank'><i className="fa fa-share-square"></i></a>  */}
                                        {/* {/* <h3 id="image-text" className="text-center">{image.title}</h3> */}
                                        
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
                        onClickNext={() => this.onMoveNextRequest(imageUrls.length, imageUrls.filter((_blank,index) => index  === this.state.photoIndex + 1)[0])}
                        onClickPrev={() => this.onMovePrevRequest(imageUrls.length, imageUrls.filter((_blank, index)=> index === this.state.photoIndex -1 )[0])}
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