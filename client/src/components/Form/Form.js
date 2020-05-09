import React from "react";
import "../Form/Form.css";

class Form extends React.Component {
  state = {
    location: "",
    hunger: false,
    education: false,
    health: false,
    services: false
  };

  handleInputChange = (e) => {
    this.setState({
      location: e.target.value,
    })
  }

  handleFilter = (evt) => {
    this.setState({
      [evt.target.name] : !this.state[`${evt.target.name}`]
    })
  }
  

  render() {
    console.log(this.state);
    return (
      <div className={'form-cont'}>
        <div className={'form-inner'}>
        <form className="search">
         <label className={"text-input-label"}>Where are you looking for volunteer opportunities?</label>
            <input
             onChange={this.handleInputChange}
             value={this.state.location}
             name={"location"}
             type={"text"}
             placeholder={"Enter Your Location"}
             id={"cation-input"}
            />
            <div className={"select-cat"}>
              <div className={"essential-msg"}>
                <h4>Looking to help out with essential services?<br></br>Select one or more options below and give back today!</h4>
              </div>
            </div>
            <div className={"cat-check-parent"}>
            <div className={"cat-check-input"}>
             <input
              onChange={this.handleFilter}
             value={this.state.hunger}
             name={"hunger"}
             type={"checkbox"}
             id={"cation-input"}
            />
             <label>Food Banks</label>
            </div>
            <div className={"cat-check-input"}>
             <input
              onChange={this.handleFilter}
             value={this.state.location}
             name={"health"}
             type={"checkbox"}
             id={"cation-input"}
            />
             <label>Health and Safety</label>
            </div>
            <div className={"cat-check-input"}>
             <input
              onChange={this.handleFilter}
             value={this.state.location}
             name={"education"}
             type={"checkbox"}
             id={"cation-input"}
            />
             <label>Education</label>
            </div>
            <div className={"cat-check-input"}>
             <input
            onChange={this.handleFilter}
             value={this.state.location}
             name={"services"}
             type={"checkbox"}
             id={"cation-input"}
            />
             <label>Services</label>
            </div>
            </div>
        <button
            type="submit"
            onClick={(event)=>this.props.handleFormSubmit(event, this.state)}
            className="btn btn-success">
            Search Volunteer Opportunities
        </button>
        </form>
        </div>
      </div>
    );
  }
}

export default Form;
