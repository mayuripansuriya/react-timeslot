import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Slots.css'

export default class Home extends Component {

  componentDidMount () {
    this.props._getAllRecords()
  }

  render () {
    return (
      <ListGroup className="home content-center">
        {
          this.props.homeState.data.map(slot => (
            <Link to={`/home/${slot.id}`} key={slot.id}>
              <ListGroupItem
                bsStyle={`${slot.data ? 'danger' : 'success'}`}
                className="home-list text-center"
              >
                  { slot.time }
              </ListGroupItem>
            </Link>
          ))
        }
      </ListGroup>
    )
  }
}