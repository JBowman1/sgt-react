import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addNewGrade = this.addNewGrade.bind(this);
  }

  getAverageGrade(grades) {
    const average = grades.reduce((total, num) => {
      total += num.grade;
      return total;
    }, 0);
    return Math.round(average / grades.length);
  }

  addNewGrade(grade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grade)
    }).then(response => response.json())
      .then(data => this.setState({ grades: this.state.grades.concat(data) }))
      .catch(error => console.error(error.message));
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
        <div className='row'>
          <Header title='Student Grade Table' averageTitle='Average Grade'
            averageValue={isNaN(averageGrade) ? 0 : averageGrade}/>
        </div>
        <div className='row'>
          <GradeTable grades={this.state.grades} />
          <GradeForm onAddNewGrade={this.addNewGrade} />
        </div>
      </div>

    );
  }
}

export default App;
