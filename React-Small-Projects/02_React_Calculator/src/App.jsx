
import style from './App.module.css';

function App() {
 const number = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

  return (
    <>
     <div className='container-sm w-25 mt-5'>
      <h1 className={style.h1}> React Calculator App </h1>
        <div className={style.calculator}>
            <input className={`${style["display"]}`}  type="text" />
            <div className={style.buttonContainer}>
              {number.map((item)=>(
                <button key={item} className={`${style["button"]} btn btn-outline-primary`}>{item}</button>
              ))}
            </div>
        </div>
     </div>
    </>
  )
}

export default App
