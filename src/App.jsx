import Navbar from './components/Navbar'
import Header from './components/Header'
import Section from './components/Section'

const App = () => {
  return (
      <>
      {/* <h1 className='text-black text-4xl mt-52 font-inter'>Hello there my name is Panda</h1> */}
         <Navbar className={'bg-black'}/>
         <div className='pt-[5.7rem] lg:pt-[5.2]'>
            <Header/>
            <Section className='border border-white bg-orange-300'/>
         </div>
      </>
  )
}

export default App
