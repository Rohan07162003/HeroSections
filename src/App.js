import './App.css';
import Collaboration from './Sections/Collaborations.jsx';
import SamePage from './Sections/SamePage.jsx';
import Streamlined from './Sections/Streamlined.jsx';
import { Hero } from './Hero.jsx';
import { Hero2 } from './Hero2.jsx';
function App() {
  return (
    <div className='bg-black'>
      <Hero/>
      <div className='relative z-10 w-full overflow-x-clip'>
        <Collaboration/>
        <SamePage/>
        <Streamlined/>
      </div>
      <Hero2/>
      hgvh
    </div>
  );
}

export default App;
