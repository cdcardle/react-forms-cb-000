class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  render() {
    return (
      <form>
        <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" value={this.state.lastName} />
      </form>
    )
  }
}
