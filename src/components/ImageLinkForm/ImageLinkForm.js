import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This face detection application will detect faces in your images.'}
      </p>
      <p className='f3'>
        {'Please paste an image link into the input box below.'}
      </p>
      <p className='f3'>
        {'面孔識別app會幫你張相Detect人樣。請將圖片連結貼喺下面個input box。'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;