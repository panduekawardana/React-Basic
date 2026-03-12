import React from 'react';

const AccountInfo = (data) => {

   // eslint-disable-next-line react-hooks/immutability
   data.balance = null;

   return (
      <div style={{width: '100rem', textAlign: 'center'}}>
         <h2>Username : {data.username}</h2>
         <h2>Email : {data.email}</h2>
         <h2>Balance : {data.balance}</h2>
      </div>
   );
};

export default AccountInfo;
