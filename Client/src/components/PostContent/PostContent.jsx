import React from 'react'
import './PostContent.css'
import { PostsData } from '../../Data/PostData'
import Content from '../Content/Content'

const PostContent = () => {
  return (
    <div className='PostContent'>
        {PostsData.map ((post, id) => {
            return <Content data={post} id={id} />
        })}
    </div>
  )
}

export default PostContent