import React, {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [end, setEnd] = useState(false)
  const [winner, setWinner] = useState('')
  const [who, setWho] = useState(true)
  const [stat, setStat] = useState(
    [{id: 1 ,can: true , what: 'kwadrat' },
    {id: 2 ,can: true , what: 'kwadrat' },
    {id: 3 ,can: true , what: 'kwadrat' },
    {id: 4 ,can: true , what: 'kwadrat' },
    {id: 5 ,can: true , what: 'kwadrat' },
    {id: 6, can: true , what: 'kwadrat' },
    {id: 7, can: true , what: 'kwadrat' },
    {id: 8 ,can: true , what: 'kwadrat' },
    {id: 9, can: true , what: 'kwadrat' }]
  )



    const handlePick = (e) => {
      if(!end)
    {
      const pick = stat.findIndex(item => item.id  === Number(e.target.id) )
      if(who === true && stat[pick].can) {
        setStat( 
          [...stat],
          stat[pick].can = false, 
          stat[pick].what = 'kolko'
          )
          setWho(prev => !prev)
      }
      else if(who === false&& stat[pick].can)
       {
        setStat( 
          [...stat],
          stat[pick].can = false,
          stat[pick].what = 'krzyz'
          )
          setWho(prev => !prev)
      }

      if( 
        (stat[0].what === 'kolko' && stat[1].what === 'kolko' && stat[2].what === 'kolko') ||
        (stat[3].what === 'kolko' && stat[4].what === 'kolko' && stat[5].what === 'kolko') ||
        (stat[6].what === 'kolko' && stat[7].what === 'kolko' && stat[8].what === 'kolko') ||
        (stat[0].what === 'kolko' && stat[3].what === 'kolko' && stat[6].what === 'kolko') ||
        (stat[1].what === 'kolko' && stat[4].what === 'kolko' && stat[7].what === 'kolko') ||
        (stat[2].what === 'kolko' && stat[5].what === 'kolko' && stat[8].what === 'kolko') ||
        (stat[0].what === 'kolko' && stat[4].what === 'kolko' && stat[8].what === 'kolko') ||
        (stat[2].what === 'kolko' && stat[4].what === 'kolko' && stat[6].what === 'kolko') 
      ) {
        setWinner('Wygrał Kolko!')
      setEnd(true)
    }
      if( 
        (stat[0].what === 'krzyz' && stat[1].what === 'krzyz' && stat[2].what === 'krzyz') ||
        (stat[3].what === 'krzyz' && stat[4].what === 'krzyz' && stat[5].what === 'krzyz') ||
        (stat[6].what === 'krzyz' && stat[7].what === 'krzyz' && stat[8].what === 'krzyz') ||
        (stat[0].what === 'krzyz' && stat[3].what === 'krzyz' && stat[6].what === 'krzyz') ||
        (stat[1].what === 'krzyz' && stat[4].what === 'krzyz' && stat[7].what === 'krzyz') ||
        (stat[2].what === 'krzyz' && stat[5].what === 'krzyz' && stat[8].what === 'krzyz') ||
        (stat[0].what === 'krzyz' && stat[4].what === 'krzyz' && stat[8].what === 'krzyz') ||
        (stat[2].what === 'krzyz' && stat[4].what === 'krzyz' && stat[6].what === 'krzyz') 
      ) { setWinner('Wygrał Krzyzyk!') 
          setEnd(true)
        }
        if(!stat[0].can && !stat[1].can && !stat[2].can && !stat[3].can && !stat[4].can && !stat[5].can && !stat[6].can && !stat[7].can && !stat[8].can )
        {
          setWinner('Remis!')
          setEnd(true)
        }
    
    
  }
}
  const again = () => {
    setStat(
      [{id: 1 ,can: true , what: 'kwadrat' },
      {id: 2 ,can: true , what: 'kwadrat' },
      {id: 3 ,can: true , what: 'kwadrat' },
      {id: 4 ,can: true , what: 'kwadrat' },
      {id: 5 ,can: true , what: 'kwadrat' },
      {id: 6, can: true , what: 'kwadrat' },
      {id: 7, can: true , what: 'kwadrat' },
      {id: 8 ,can: true , what: 'kwadrat' },
      {id: 9, can: true , what: 'kwadrat' }]
    )
    setEnd(false)
    setWinner('')
  }

  return (
    <div className="app">
      <div onClick = {handlePick} id = '1' className = {stat[0].what}></div>
      <div onClick = {handlePick} id = '2' className = {stat[1].what}></div>
      <div onClick = {handlePick} id = '3' className = {stat[2].what}></div>
      <div onClick = {handlePick} id = '4' className = {stat[3].what}></div>
      <div onClick = {handlePick} id = '5' className = {stat[4].what}></div>
      <div onClick = {handlePick} id = '6' className = {stat[5].what}></div>
      <div onClick = {handlePick} id = '7' className = {stat[6].what}></div>
      <div onClick = {handlePick} id = '8' className = {stat[7].what}></div>
      <div onClick = {handlePick} id = '9' className = {stat[8].what}></div>
    <div className ='results'>
      <h1 className ={winner.slice(6, winner.length - 1)}> {winner}</h1>
      {end? <button onClick = {again}>Zagraj jeszcze raz!</button> : null}
      </div>
    </div>
  );
}

export default App;
