import React from 'react'
import './Content.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Content = ({data}) => {
  return (
    <div className='Content'>
        <img src={data.img} alt="" />

        <div className="PostReact">
            <img src={data.liked?Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span style={{color: "var(--gray)", fontSize: "12px"}}>{data.likes} likes</span>

        <div className="details">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Content