import {useState} from 'react';

function App() {
   const [saldo, setSaldo] = useState(5000);

   // Tarik Tunai
   const tarikTunai = () => {
      let inputDana = prompt('Masukkan dana');
      const compare = Number(inputDana)
      console.log(compare);

      setSaldo(saldo - compare)
   }
   // Deposit
   const deposit = () => {
      const inputDana = prompt('Masukkan dana');
      const compare = Number(inputDana)
      setSaldo(saldo + compare)
   }
   return (
      <div>
         <h1>Saldo saat ini : {formatCurrency(saldo)}</h1>
         <button onClick={() => tarikTunai()}>Tarik tunai</button>
         <button onClick={() => deposit()} className='text-secondary font-inter'>Deposit</button>
      </div>
   )
}

function formatCurrency(data) {
   const dataNumricValue = Number(data)
   const fmt= new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
   }).format(dataNumricValue);
   return fmt
}

export default App;
