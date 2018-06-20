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

        const ids = [29, 30, 31, 32] // the id of the images
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
                            <h3>The motion of the influence</h3>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quod, totam doloribus. Earum laboriosam maiores, necessitatibus nesciunt ea culpa voluptas nostrum ipsa officia. Voluptas vel commodi modi sequi consequatur ipsa eius quidem error blanditiis vitae pariatur soluta, tempora illum, asperiores, in molestias perspiciatis hic quas voluptates cupiditate beatae. Ex accusamus sed culpa eum aliquid veritatis similique repellat voluptatibus, maxime, debitis est sint, quo dolorum? Laborum incidunt a aut optio animi sapiente, voluptatum totam, non ipsa doloremque, nulla autem, rem culpa.</div>
                        <div className="row body">
                            <div className="col second-row">
                                <div className="row">
                                    <img 
                                        src={this.props.img2}
                                        className="img-fluid img-footer col-md-6" />
                                    <div className="col-md-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, velit, alias. Odio nisi sequi tempora, repudiandae nesciunt ex, saepe reprehenderit cum enim molestias rerum! Quisquam laudantium illo error ipsum eius laborum accusamus sed in ea non. Molestias tenetur repellendus nostrum.
                                    </div>                                
                                </div>
                            </div>
                            <div className="col second-row">
                                <img src={this.props.img3}
                                     alt="konos"
                                     className="img-fluid img-footer"/>
                            </div>
                        </div>
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
    // console.log(path); // BUG THE LIST GROWS
    return {
        // images
        hero: path[0],
        img1: path[1],
        img2: path[2],
        img3: path[3],
        title,
        body
    }
}


export default connect(mapStateToProps, { previewPost, fetchPost })(PreviewPost);
