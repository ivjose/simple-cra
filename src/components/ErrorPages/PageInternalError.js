import React from 'react';

const PageInternalError = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <b style={{ fontSize: 50, marginBottom: 0 }}>Uh Oh!</b>
      <b style={{ fontSize: 30 }}>Page Internal Error | Someting went wrong</b>
    </div>
  );
};

export default PageInternalError;
