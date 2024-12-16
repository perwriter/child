import React from 'react'
import AudioCall from './_components/audio_landing'
import AudioGameInterface from './_components/audio_play'
import GameQuestion from './_components/audio_question'
import AudioResults from './_components/audio_results'

const Audiogame = () => {
  return (
    <div>
        <AudioCall/>
        <AudioGameInterface/>
        <GameQuestion/>
        <AudioResults/>

    </div>
  )
}

export default Audiogame