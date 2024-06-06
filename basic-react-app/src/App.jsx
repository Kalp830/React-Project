import './App.css'
import Title from "./Title";
import Description from './Description';
import ProductGroup from './ProductGroup';
import ShowList from './ShowList';
import Gallery from './Gallery/Gallery';
import TodoList from './Gallery/TodoList/TodoList';


function App() {
  return (
    <>
   <h1>Hello world!</h1>
   <h3>This is my first react app</h3>
   <Title/>
   <Description/>
   <ProductGroup/>
   <Profile/>
   <TodoList/>
   </>
  )
}
function Profile(){
  return(
    <>    
    <h2>Amazing Scientists</h2>
    <Gallery/>
    <Gallery/>
    <Gallery/>
    <ShowList/>
    </>
    
  )
}

export default App
