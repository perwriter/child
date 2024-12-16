import React from 'react'
import SprintGame from './_components/sprintlanding'
import GameInterface from './_components/Interface'
import SprintResults from './_components/results'

const Sprint_Game = () => {
  return (
    <div><SprintGame/>
    <GameInterface/>
    <SprintResults/>
    </div>
  )
}

export default Sprint_Game