// step 1 done
import { useState } from 'react'

const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button>

const randomNumberInRange = () =>{
  return Math.floor(Math.random()*(6-0+1))+0;
}

const Header = ({text}) => <h1>{text}</h1>

const Votes = ({votes}) => <p>has {votes} votes</p>

const MostVoted = ({anecdotes, copy}) => {
  const IsBiggest = element => element === Math.max(...copy)
  const index_max = copy.findIndex(IsBiggest)
  console.log(index_max)
  return (
      <div>
      <p>{anecdotes[index_max]}</p>
      <Votes votes = {Math.max(...copy)}/>
      </div>
  )
}

const points = new Uint8Array(7)

const copy = [...points]

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  

  const [selected, setSelected] = useState(0)
  const setState = newValue => setSelected(newValue)
  const vote = selected => {
    return (
      copy[selected] += 1
    )
  }

  return (
    <div>
      <Header text={'Anecdote of the day'}/>
      <p>{anecdotes[selected]}</p>
      <Votes votes = {copy[selected]}/>
      <Button clickHandler={() => vote(selected)} text = 'vote'/>
      <Button clickHandler={() => setState(randomNumberInRange)} text = 'next anecdote'/>
      <Header text={'Anecdote with most votes'}/>
      <MostVoted anecdotes={anecdotes} copy={copy}/>
    </div>
  )
}

export default App