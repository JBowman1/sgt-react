import React from 'react';
import Header from './header';
import GradeTable from './grade-table';


class App extends React.Component { class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err));
  }

  render() {
      return null; return (
        <div>
          <Header />
          <GradeTable grades={this.state.grades} />
        </div>
      );
    }
  }
}
