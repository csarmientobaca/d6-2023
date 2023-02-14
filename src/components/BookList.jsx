import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
  }

  render() {
    return (
      <><Row>
        <Col>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Search a book</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={this.state.searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook book={b} />
                </Col>
              ))}
          </Row>
        </Col>
        {/* PART FOR THE COMMENTS */}
        <Col>
          <h1>here go comments of the clicke{ }</h1>
          <h2>here go the asin of the clicked{ }</h2>
        </Col>
      </Row>

      </>
    )
  }
}

export default BookList
