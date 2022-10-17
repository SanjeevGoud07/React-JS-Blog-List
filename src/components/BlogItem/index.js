// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {Item} = props
  const {title, description, publishedDate} = Item
  return (
    <li className="L-Item">
      <div className="Heading">
        <h1 className="heading">{title}</h1>
        <p className="Para">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}

export default BlogItem
