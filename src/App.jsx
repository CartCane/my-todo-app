import React, {useState} from 'react'
import ListItems from './components/ListItems'
import UserInput from './components/UserInput'

function App() {
  const [items, setItems] = useState([]);

  function handleSubmit(updateLog) {
      setItems((prev) => [...prev, updateLog]);
  }

  function deletehandle(id){
    setItems((prev)=>prev.filter((_,i)=>i !== id))
  }

  return (
    <div className='main-container'>
      <header className='title'>ToDo List</header>
      <ListItems items={items} setItems={setItems} delete={deletehandle}/>
      <UserInput submit={handleSubmit}/>
    </div>
  )
}

export default App
