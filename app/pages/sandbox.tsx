import {message } from 'antd'
import React, { useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Upload from '../components/upload'

export default() => {

    return <div>
        test
    </div>
}

/*
const {Dragger} = Upload

export default() => {

    const [isLoading,setIsLoading] = useState(false )
    const [imageUrl, setImageUrl] = useState(null)

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }

      
    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setIsLoading(true)
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>{
            setImageUrl(imageUrl)
            setIsLoading(false)
            
          }
            
          );
        }
      };

      const uploadButton = (
        <div>
          {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );

      
    return <div>
         <Dragger
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/files/put"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Dragger>
    </div>
}*/