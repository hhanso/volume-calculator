import './App.css'
import Day from './components/Day'

function App() {

  return (
    <>
      <h1>Hypertrophy volume calculator</h1>
      <div className="flex-container">
        <Day dayOfTheWeek='Sunday'/>
        <Day dayOfTheWeek='Monday'/>
        <Day dayOfTheWeek='Tuesday'/>
        <Day dayOfTheWeek='Wednesday'/>
        <Day dayOfTheWeek='Thursday'/>
        <Day dayOfTheWeek='Friday'/>
        <Day dayOfTheWeek='Saturday'/>
      </div>
    </>
  )
}

export default App
