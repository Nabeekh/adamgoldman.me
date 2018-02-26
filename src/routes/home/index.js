import React from 'react'
import axios from 'axios'

import Layout from '../../components/Layout'

import Home from './Home'

const tutorials = [
  {
    title: 'Trauma Relief',
    description: 'Soften traumas, bad memories, arguments, and fights',
    url: 'trauma-relief',
  },
  {
    title: 'Grief To Appreciation',
    description: 'Experience your lost loves ones in a more resourceful way',
    url: 'grief-to-appreciation',
  },
  {
    title: 'Loved One Amplifier',
    description: 'Intensify the good feelings from the people you enjoy in your life',
    url: 'loved-one-amplifier',
  },
]

const path = '/'

async function action() {
  const { data } = await axios.get('/api/posts/transcripts')
  return {
    chunks: ['home'],
    title: 'Adam Goldman\'s Virtual Home',
    path,
    description: "Relax, it's just life",
    component: (
      <Layout path={path}>
        <Home
          transcripts={data}
          tutorials={tutorials}
        />
      </Layout>
    ),
  }
}

export default action
