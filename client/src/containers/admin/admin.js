import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

import TextInput from '../../components/input/textInput';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../../actions/new_post';



class Admin extends Component  {

    state = {
        selectedFile: null,
        images: [],
        imageName: "",
        category: ""
    }

    componentDidMount () {
        axios.get('/selectimage')
                .then(res => {
                    // console.log(res.data);
                })
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileDropHandler = files => {
        // console.log(event.target.files[0]);
        // console.log(files[0]);
        this.setState({
            selectedFile: files[0],
            uploadProgress: 0
        })
    }

    // uploads the image to the database
    fileUploadHandler = () => { // HAS TO GO INSIDE REDUX
        const fd = new FormData();
        const { imageName } = this.state;
        fd.append("sampleImage", this.state.selectedFile); // from dropzone //
        fd.append("name", imageName); // FROM THE REDUX FORM
        axios.post('/addimage', fd, { // send the fd data to actions
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
                let uploadProgress = Math.round(progressEvent.loaded / progressEvent.total * 100) + '%'
                this.setState({
                    uploadProgress
                })
            }
        }).then(res => {
                    console.log("axios res", res);
                    const images = [...this.state.images];
                    images.push(res.data);
                    this.setState({ images })

                }).catch(err => {
                    console.log(err);
                    })
    }

    renderField ({ input, label, meta}) {

        return (
            <div className={meta.active ? "active" : ""}>
                <pre>{JSON.stringify(meta, 0, 2)}</pre>
                <label>{label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...input} /> {/* destructure the input methods onChange.. and staff*/}
            </div>
            )
    }

    onSubmit (values) {
        // console.log("the selected image file", this.state.selectedFile);
        const { selectedFile } = this.state
        // console.log('inside on Submit', values);
        this.props.createPost(values, selectedFile, (res) => {
            console.log("response from axios", res);
        })
        // this.fileUploadHandler();
    }


    render () {
        console.log("mapStateToProps", this.props.path);
        // console.log(this.state);
        // console.log(this.state.images[0]);
        // console.log(this.props);
        // have to put an id to the database
        const balidis = this.state.images.map(image => (
            <div key={image.url}>
                <h1>{image.name}</h1>
                <img src={"images/" + image.url} alt="balidis"/>
            </div>
            ))

        const { handleSubmit } = this.props; // prop from redux-form
        const path = this.props.path
        const image = path ? <img src={path} alt="morty" /> : <h3>image</h3>;

        return (
            <div>
                <h1>Admin</h1>
                <div className="imagename">
                    <div>image name</div>
                    <TextInput onChange={this.inputHandler} name="imageName"/>
                    <TextInput onChange={this.inputHandler} name="category"/>
                </div>

                <form className="form-group admin-form"
                      onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field label="imageName"
                           name="imageName"
                           component={this.renderField}/>
                    <Field label="Category"
                           name="category"
                           component={this.renderField}/>
                    <Dropzone
                    disablePreview={false}
                        multiple={false}
                        accept="image/*"
                        onDrop={this.fileDropHandler}>
                        <p>Drop the image --inside redux form --</p>
                    </Dropzone>
                    <button
                        className="btn btn-success">Submit</button>
                </form>
                <h2>{this.state.uploadProgress}</h2>

                <button className="btn btn-primary"
                        onClick={this.fileUploadHandler}
                        name="sampleImage">Upload</button>
                        {balidis}
                        {image}
            </div>
        )
    }
}

function mapStateToProps ({post}) {
    if (post !== "image") {
        const path = `images/${post.url}`
        return { path };
    }else {
        return {path: ""};
    }

}


export default reduxForm({
    form: 'NewPost'
})(connect(mapStateToProps, { createPost })(Admin)
);
