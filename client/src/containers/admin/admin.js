import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

// import image1 from '../../../../public/uploads/2018-06-07T22-12-19.845ZsampleImage.jpg';

class Admin extends Component  {

    state = {
        selectedFile: null,
        images: [],
        imageName: ""
    }

    componentDidMount () {
        axios.get('/selectimage')
                .then(res => {
                    console.log(res.data);
                })
    }
    imagenameHandler = (e) => {
        this.setState({
            imageName: e.target.value
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
        // console.log(this.state.images);
        console.log(this.state.imageName);

        const skirt = <img
                style={{width: "100px"}} 
                src="/images/2018-06-13T09-43-15.394Zimage-0-02-01-457fa630f6b753fac8adf76c5a0628a35a862fc7c9741bc2ca8064b1cc4c06b1-V.jpg" alt="skirt"/>;

        return (
            <div>
                <h1>Admin</h1>
                <div className="imagename">
                    <div>image name</div>
                    <input type="text" onChange={this.imagenameHandler}/>           
                </div>

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
                        {skirt}
            </div>
        )
    }
}

export default Admin;
