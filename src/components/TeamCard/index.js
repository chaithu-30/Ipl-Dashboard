// Write your code here
// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, imageUrl, id} = teamData

    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img src={imageUrl} alt={name} className="team-card-image" />
          <p className="team-card-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
