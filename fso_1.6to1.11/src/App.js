
import { useState } from "react"

const Header = ({text}) => <h1>{text}</h1>

const Button = ({clickHandler, text}) => <button onClick = {clickHandler}>{text}</button>

const StatisticLine = ({value}) => <p>{value}</p>

const Statistics = ({values, sum}) => {
  if (sum === 0)  {
    return <p>No feedback given</p>
  }
  return(
        <div>
          <table>
            <tbody>
              <tr>  
                <td>good</td>
                <td><StatisticLine value={values[0]}/></td>
              </tr>
              <tr>  
                <td>neutral</td>
                <td><StatisticLine value={values[1]}/></td>
              </tr>
              <tr>  
                <td>bad</td>
                <td><StatisticLine value={values[2]}/></td>
              </tr>
              <tr>
                <td>All</td>
                <td><All sum={sum}/></td>
              </tr>
              <tr>
                <td>Average</td>
                <td><Average values={values} sum={sum}/></td>
              </tr>
              <tr>
                <td>Positive</td>
                <td><Positive values={values} sum={sum}/></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
}

const All = ({sum}) => <p>{sum}</p>

const Average = ({values, sum}) => <p>{(values[0]-values[2])/sum}</p>

const Positive = ({values, sum}) => <p>{100*(values[0]/sum)} %</p>

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const values = [good, neutral, bad]
  const sum = good + neutral + bad


  const setToGood = newValue => setGood(newValue)
  const setToNeutral = newValue => setNeutral(newValue)
  const setToBad = newValue => setBad(newValue)

  return (
    <div>
      <Header text={'give feedback'}/> 
      <Button clickHandler={() => setToGood(good + 1)} text = 'good'/>
      <Button clickHandler={() => setToNeutral(neutral + 1)} text = 'neutral'/>
      <Button clickHandler={() => setToBad(bad + 1)} text = 'bad'/>
      <Header text={'statistics'}/>
      <Statistics values={values} sum={sum}/>
    </div>
  )

}

export default App