
const Header = (props) =>{
  console.log(props)
  return (
    <div>
      <h1>
          {props.course['name']}
      </h1>
    </div> 
  )
}

const Parts = (props) => {
  console.log(props)
  const parts = props.course['parts']
  return (
    <div>
      <p>
        {parts[0]['name']} {parts[0]['exercises']}
      </p>
      <p>
        {parts[1]['name']} {parts[1]['exercises']}
      </p>
      <p>
        {parts[2]['name']} {parts[2]['exercises']}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Parts course={props.course} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  const parts = props.course["parts"]
  return (
    <div>
      <p>
        Number of exercises {parts[0]['exercises'] + parts[1]['exercises'] + parts[2]['exercises']} 
      </p>
    </div>
  )
}




const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  


  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

export default App