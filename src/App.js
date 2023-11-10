
import './App.css';
import Collaboration from './Sections/Collaborations.jsx';
import { Hero } from './Hero.jsx';
function App() {
  return (
    <div className='bg-black'>
      <Hero/>
      <div className='relative z-10 w-full overflow-x-clip'>
        <Collaboration/>
      </div>
    </div>
  );
}

export default App;
