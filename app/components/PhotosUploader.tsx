import React, { Component } from 'react'
import request from 'superagent'
import Dropzone from 'react-dropzone'
import { CloudinaryContext } from 'cloudinary-react'

const PhotosUploader = () => {
  return (
    <div>
      <Dropzone
        id="direct-upload-dropzone"
        disableClick={true}
        multiple={false}
        accept="image/*"
        style={{ position: 'relative' }}
        // onDrop={this.onPhotoSelected.bind(this)}
      >
        <div id="direct_upload">
          <h1>New Photo</h1>
          <h2>Direct upload from the browser with React File Upload</h2>
          <p>You can also drag and drop an image file into the dashed area.</p>
          <form>
            <div className="form_line">
              <label>Title:</label>
              <div className="form_controls">
                <input
                  type="text"
                  // ref={(titleEl) => (this.titleEl = titleEl)}
                  className="form-control"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="form_line">
              <label>Image:</label>
              <div className="form_controls">
                <div className="upload_button_holder">
                  <label className="upload_button" htmlFor="fileupload">
                    Upload
                  </label>
                  <input
                    type="file"
                    id="fileupload"
                    accept="image/*"
                    multiple={true}
                    // ref={(fileInputEl) => (this.fileInputEl = fileInputEl)}
                    // onChange={() =>
                    //   this.onPhotoSelected(this.fileInputEl.files)
                    // }
                  />
                </div>
              </div>
            </div>
          </form>
          <h2>Status</h2>
        </div>
      </Dropzone>
    </div>
  )
}
