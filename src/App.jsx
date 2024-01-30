import './App.css'
import Testimonial from './Components/Testimonial'
import data from './data'

function App() {

  return (
    <div className='w-[100vw] min-h-[100vh] flex justify-center bg-slate-200 overflow-x-hidden '>
      <Testimonial data={data} />
    </div>

  )
}

export default App
