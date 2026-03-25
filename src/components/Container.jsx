import React, {useState} from 'react';

const Container = ({
   className
}) => {
   const [get, setGet] = useState(false)
   return (
      <div className={get()}>
         
      </div>
   );
};

export default Container;