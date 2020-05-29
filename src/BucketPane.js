import React from 'react';

import Bucket from './Bucket';

const BucketPane = (props) => {
  return (
    <div className = 'bucket_pane'>
      <Bucket bucketName = 'Someday' />
    </div>
  );
}

export default BucketPane;
