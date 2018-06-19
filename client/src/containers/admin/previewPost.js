import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { previewPost } from '../../actions/preview_action';
import { fetchPost } from '../../actions';

class PreviewPost extends Component {

    state = {
        hovering: false
    }


    componentDidMount () {

        const ids = [29, 30, 31] // the id of the images
        ids.map(id => this.props.previewPost(id)) // calls the action for each id
        const titleId = 1
        this.props.fetchPost(titleId); // triggers the action to fetch the post data
    }



    render () {


        return (
            <div className="postPreview">
                <h1>POST PREVIEW</h1>
                <div className="container">
                    <div className="col-md-12">
                        <h1>{this.props.title}</h1>
                        <img
                            src={this.props.hero}
                            alt="hero"
                            className="img-fluid" />
                        <div>{this.props.body}</div>
                    </div>
                    <Link
                        to="/Admin"
                        className="btn btn-danger">back</Link>
                </div>
            </div>


            )
    }
}
function mapStateToProps ({ images, post }) {

    const { title, body } = post;

    // const path = images.map(image => `images/${image}`);
    const path = []
    for (let url of images) {
        url = '/images/' + url
        path.push(url);
    }
    console.log(path);
    return {
        // images
        hero: path[0],
        img1: path[1],
        img2: path[2],
        title,
        body
    }
}


export default connect(mapStateToProps, { previewPost, fetchPost })(PreviewPost);
