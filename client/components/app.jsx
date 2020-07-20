import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  getAverageGrade(grades) {
    const average = grades.reduce((total, num) => {
      total += num.grade;
      return total;
    }, 0);
    return Math.round(sum / grades.length);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err));
  }

  render() {
    const averageGrade = this.getAverageGrade(this.state.grades);
      return (
        <div>
          <Header title='Student Grade Table' averageTitle='Average Grade'
            averageGrade={isNaN(average) ? 0 : average}/>
          <GradeTable grades={this.state.grades} />
        </div>
      );
  }
}
