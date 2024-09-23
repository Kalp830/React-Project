
import style from './App.module.css';

function App() {


  return (
    <>
     <div className='container-sm w-25 mt-5'>
      <div className="row">
        <div className={style.calculator}>
            <input className="form-control" id="display" type="text" />
            <div className="button-container">
               <button className="btn btn-outline-primary">C</button>
            </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default App
