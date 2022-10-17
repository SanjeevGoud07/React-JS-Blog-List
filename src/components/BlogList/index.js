// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {List} = props
  return (
    <div>
      <div className="Profile">
        <img
          className="Img"
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
        />
        <h1 className="heading">Wade Warren</h1>
        <p className="para">Software developer at UK</p>
      </div>
      <ul className="List">
        {List.map(Each => (
          <BlogItem Item={Each} key={Each.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
