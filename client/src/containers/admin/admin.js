import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

// import image1 from '../../../../public/uploads/2018-06-07T22-12-19.845ZsampleImage.jpg';

class Admin extends Component  {

    state = {
        selectedFile: null,
        title: "",
        categories: "",
        imageName: ""
        images: []
    }

    componentDidMount () {
        axios.get('/selectimage')
                .then(res => {
                    console.log(res.data);
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

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('sampleImage', this.state.selectedFile);
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
        console.log(this.state.images);

        const skirt = <img src="/images/2018-06-07T22-12-19.845ZsampleImage.jpg"/>;

        return (
            <div>
                <h1>Admin</h1>
                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.fileDropHandler}>
                    <p>Drop the image</p>
                </Dropzone>
                <input type="file" onChange={this.fileSelectedHandler} />
                <h2>{this.state.uploadProgress}</h2>
                <button className="btn btn-primary"
                        onClick={this.fileUploadHandler}
                        name="sampleImage">Upload</button>
            </div>
        )
    }
}

export default Admin;
