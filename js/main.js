import {getData} from './load-data.js';
import {showAlert} from './util.js';
import {renderPhotoArray} from './rendering.js';
import {initUploadImageForm} from './upload-image.js';

initUploadImageForm();
getData()
  .then(renderPhotoArray)
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
