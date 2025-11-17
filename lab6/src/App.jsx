import './App.css'
import Statemgt from './Statemgt'
import Statemgtclass from './Statemgtclass'
function App() {
  return (
    <div>
      <h1>Counter Application</h1>
      <h2>Using Functional Component</h2>
      <Statemgt />
      <h2>Using Class Component</h2>
      <Statemgtclass />
    </div>
  )
}
export default App;