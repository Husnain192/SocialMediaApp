import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileside/ProfileSide'
import Post from '../../components/Post/Post'
import RightSide from '../../components/RightSide/RightSide'

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide/>
        <Post/>
        <RightSide/>
    </div>
  )
}

export default Home