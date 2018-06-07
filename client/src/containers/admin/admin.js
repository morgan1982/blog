import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

class Admin extends Component  {

    state = {
        selectedFile: null
    }

    fileSelectedHandler = files => {
        // console.log(event.target.files[0]);
        // console.log(files[0]);
        this.setState({
            selectedFile: files[0],
            uploadProgress: 0
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
                }).catch(err => {
                    console.log(err);
                    })
    }
    postTest = () => {

        axios.post('./addtest')
    }


    render () {

        return (
            <div>
                <h1>Admin</h1>
                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.fileSelectedHandler}>
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
