import React from 'react';

const CustomErrorPage = ({ statusCode } : any) => {
  return (
    <div>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : 'An error occurred on the client'}
      </p>
    </div>
  );
};

export default CustomErrorPage;
