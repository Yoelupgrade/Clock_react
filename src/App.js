import './App.css';
import { DigitalClock } from './Components/DigitalClock/DigitalClock';
import { Countdown } from './Components/Countdown/Countdown';
import { Stopwatch } from './Components/Stopwatch/Stopwatch';
function App() {
  return (
    <div className="App">
      <DigitalClock/>
      <Countdown/>
      <Stopwatch/>
    </div>
  );
}

export default App;
