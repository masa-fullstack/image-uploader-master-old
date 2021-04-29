import Card from './Card'
import React from 'react'
import Dropzone from 'react-dropzone'

const ImageUploader: React.FC = () => {
  // const [searchList, setSearchList] = useState<SearchList>()

  return (
    <Card>
      <div className="flex flex-col items-center">
        <div>Upload your image</div>
        <div>File should be Jpeg, Png, ...</div>
        <div className="cursor-pointer">
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Dragdrop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      </div>
    </Card>
  )
}

export default ImageUploader
