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
    render() {
      return null; return (
        <div>
          <Header />
          <GradeTable grades={this.state.grades} />
        </div>
      );
    }
  }
} }
