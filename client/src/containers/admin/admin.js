import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

import TextInput from '../../components/input/textInput';

// import image1 from '../../../../public/uploads/2018-06-07T22-12-19.845ZsampleImage.jpg';

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
    fileUploadHandler = () => {
        const fd = new FormData();
        const { imageName } = this.state;
        fd.append("sampleImage", this.state.selectedFile);
        fd.append("name", imageName);
        axios.post('/addimage', fd, {
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


    render () {
        // console.log(this.state);
        console.log(this.state.images[0]);
        // have to put an id to the database
        const balidis = this.state.images.map(image => (
            <div key={image.url}>
                <h1>{image.name}</h1>
                <img src={"images/" + image.url} alt="balidis"/>
            </div>
            ))



        return (
            <div>
                <h1>Admin</h1>
                <div className="imagename">
                    <div>image name</div>
                    <TextInput onChange={this.inputHandler} name="imageName"/>
                    <TextInput onChange={this.inputHandler} name="category"/>
                </div>

                <Dropzone
                disablePreview={false}
                    multiple={false}
                    accept="image/*"
                    onDrop={this.fileDropHandler}>
                    <p>Drop the image</p>
                </Dropzone>
                <h2>{this.state.uploadProgress}</h2>
                <button className="btn btn-primary"
                        onClick={this.fileUploadHandler}
                        name="sampleImage">Upload</button>
                        {balidis}
            </div>
        )
    }
}

export default Admin;
