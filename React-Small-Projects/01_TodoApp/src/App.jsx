import './App.css'
import AppName from './components/AppName';
import BharatClock from './components/BharatClock';
import Container from './components/Container';
import MapMethod from './components/MapMethod';

function App() {
 
  return (
   <>
    <Container>
      <AppName/>
        <div className='row mb-3'>
           <div className='col-xl'>
            <input type='text' placeholder='Enter the item' className='form-control w-100'/>
           </div>
           <div className='col-xl'>
           <input type='date' className='form-control w-100'/>
           </div>
           <div className='col-xl-auto'>
            <button className='btn btn-primary'>Add</button>
           </div>
        </div>
        <div className='row mb-3'>
           <div className='col-xl text-start'>
            Buy Milk
           </div>
           <div className='col-xl text-start'>
           4/10/2024
           </div>
           <div className='col-xl-auto'>
            <button className='btn btn-danger'>Delete</button>
           </div>
        </div>
        <div className='row'>
           <div className='col-xl text-start'>
            Go to collage
           </div>
           <div className='col-xl text-start'>
           4/10/2024
           </div>
           <div className='col-xl-auto'>
            <button className='btn btn-danger'>Delete</button>
           </div>
        </div>
     <BharatClock/>
     <MapMethod/>
    </Container>
    </>
  )
}

export default App
