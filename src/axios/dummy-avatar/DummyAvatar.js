import React, { useEffect, useState } from 'react';

// import * as style from '@dicebear/avatars/lib/styles/avataaars'; // Using a style from DiceBear

const DummyAvatar = ({sx}) => {


  return (
    <div>
      {/* Render the avatar inside an <img> tag */}
      <img src="https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs" alt="Generated Avatar"  className={sx} />
    </div>
  );
};

export default DummyAvatar;
