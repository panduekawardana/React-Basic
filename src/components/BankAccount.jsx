import React, { useState } from 'react'

const BankAccount = () => {
   const [balance, setBalance] = useState(1000000);

   function tarikTunai() {
      const hasil = setBalance( balance - 10000);
      console.log(hasil);
   }

   return (
    <div>
      <button onClick={ () => tarikTunai()}>Tarik Tunai</button>
    </div>
  )
}

export default BankAccount
