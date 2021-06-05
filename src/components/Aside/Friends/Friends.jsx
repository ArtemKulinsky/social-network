import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
  return (
    <div className={s.friends}>
      <div className={s.friendsTitle}>Friends</div>
      <div className={s.friendsList}>
        {
          props.friends.map((friend) => <Friend name={friend.name} key={friend.id} />)
        }
      </div>
    </div>
  )
}

export default Friends;