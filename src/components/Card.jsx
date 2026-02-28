import {BadgeCheck, User, Heart, Plus} from "lucide-react"

const Card = ()=>{
    return(
         <div className='card-parent'>
        <div className='img-wrapper'>
          <img className='profile-img' src="https://www.webxcreation.com/event-recruitment/images/profile-1.jpg" alt="" />
        </div>
        <div className='center'>
          <div className='heading'>
            <h1>Nicola Tesla</h1>
            <span><BadgeCheck size={20} color='green' enableBackground={true} /></span>
          </div>
          <p>Product designer who focuses on simplicity & usability</p>
        </div>
        <div className='bottom'>

          <div className='user'>
            <span><User color='gray' size={14} /></span>
            <h2>24</h2>
          </div>

          <div className='user'>
            
            <span><Heart color='gray' size={14} /></span>
            <h2>15</h2>
          </div>
          <button id='btn'>Follow <Plus className='plus' size={14} /></button>
        </div>
      </div>
    )
}

export default Card;