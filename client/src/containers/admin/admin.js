import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dropzone from 'react-dropzone';

import TextInput from '../../components/input/textInput';

import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../../actions/new_post';



class Admin extends Component  {

    state = {
        selectedFile: null,
        images: [],
        imageName: "",
        category: "",
        previews: []
    }

    componentDidMount () {
        // axios.get('/selectimage')
        //         .then(res => {
        //             // console.log(res.data);
        //         })
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value // REMEMBER THIS
        })
    }

    fileDropHandler = files => {
        // console.log(files[0]);
        const previews = [...this.state.previews];
        const preview = files[0].preview // fetches the preview path of the image
        previews.push(preview);
        this.setState({
            selectedFile: files[0],
            uploadProgress: 0,
            previews
        })
    }
    imageNameHandler = e => {
        // console.log(e.target.value);
    }

    // uploads the image to the database
    fileUploadHandler = () => {
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
               {/*<pre>{JSON.stringify(meta, 0, 2)}</pre>*/}
                <label>{label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...input} /> {/* destructure the input methods onChange.. and staff*/}
            </div>
            )
    }

    onSubmit (values) {
        const { selectedFile } = this.state // the selected image
        // console.log('inside on Submit', values);
        this.props.createPost(values, selectedFile, (res) => { // sends the data to the database
            console.log("response from axios", res);
        })
    }


    render () {

        // have to put an id to the database

        const { handleSubmit } = this.props; // prop from redux-form
        const { previews } = this.state // imagePreviews
        // const images = previews.map((image, key) => {

        //     return <img key={key} src={image} alt="morty" />
        //     })
        const { title, imageName, category } = this.props;


        return (
            <div className="container">
                <h1>Admin</h1>
                <Link className="btn btn-success" to="/Admin/Preview">Preview</Link>
                <Link className="btn btn-success" to="/Admin/Test">Test</Link>
                <div className="imagename">
                    <div>image name</div>
                    <TextInput onChange={this.inputHandler} name="imageName"/>
                    <TextInput onChange={this.inputHandler} name="category"/>
                </div>

                <form className="form-group admin-form"
                      onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field label="Title"
                           name="title"
                           component={this.renderField}/>
                    <Field label="imageName"
                           name="imageName"
                           onChange={this.imageNameHandler} // method is available
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

                <div className="preview-form">
                <div>
                    <h1>{title}</h1>
                    <div className="col-md-6">
                        <img className="img-fluid" src={previews[0]} alt="1" />
                    </div>
                    <div className="col-md-8">
                        <img className="img-thumbnail" src={previews[1]} alt="morty" />
                    </div>
                    <h3>{imageName}</h3>
                    <div>{category}</div>
                </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps ( state ) {
    // selects directly from the dropzone
    const selector = formValueSelector('NewPost')
    const { title, imageName, category } = selector(state, 'title', 'imageName', 'category');


    return {
        title,
        imageName,
        category
    }

}


export default reduxForm({
    form: 'NewPost'
})(connect(mapStateToProps, { createPost })(Admin)
);
