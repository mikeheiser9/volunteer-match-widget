import React from "react";
import "../Form/Form.css";

class Form extends React.Component {
  state = {
    location: "",
    virtual: true,
    food: false,
    education: false,
    healthAndSafety: false,
    services: false
  };

  handleInputChange = (e) => {
    if(e.target.name === "location" && this.state.virtual && this.state.location.length > 0){
      this.setState({
        virtual: false
      })
    }
    this.setState({
      location: e.target.value
    })
  }

  handleFilter = (evt) => {
    if(evt.target.name === "virtual" && !this.state.virtual){
      this.setState({
        location: ""
      })
    }
    this.setState({
      [evt.target.name] : !this.state[`${evt.target.name}`]
    })

  }
  

  render() {
    return (
      <div className={'form-cont'}>
        <div className={'form-inner'}>
        <form className="search">
          <div className={"top-input-cont"}>
          <label className={"text-input-label"}>Where are you looking for volunteer opportunities?</label>
            <input
             onChange={this.handleInputChange}
             value={this.state.location}
             name={"location"}
             type={"text"}
             placeholder={"Enter Your Location"}
             id={"cation-input"}
            />
            <div className={"virtual-cont"}>
             <div className={"virt-opp-cont"}>
              <input
                onChange={this.handleFilter}
                checked={this.state.location === "" ? true : this.state.virtual}
                value={this.state.virtual}
                name={"virtual"}
                type={"checkbox"}
                id={"cation-input"}
                />
              <label>Check box to view ONLY virtual opportunites?</label>
             </div>
            </div>
            </div>
            <div className={"select-cat"}>
              <div className={"essential-msg"}>
                <h4>Looking to help out with essential services?<br></br>Select one or more options below and give back today!</h4>
              </div>
            </div>
            <div className={"cat-check-parent"}>
            <div className={"cat-check-input"}>
             <input
              onChange={this.handleFilter}
             value={this.state.food}
             name={"food"}
             type={"checkbox"}
             id={"cation-input"}
            />
             <label>Food Banks</label>
            </div>
            <div className={"cat-check-input"}>
             <input
              onChange={this.handleFilter}
              value={this.state.healthAndSafety}
              name={"healthAndSafety"}
              type={"checkbox"}
              id={"cation-input"}
            />
             <label>Health and Safety</label>
            </div>
            <div className={"cat-check-input"}>
             <input
              onChange={this.handleFilter}
              value={this.state.education}
              name={"education"}
              type={"checkbox"}
              id={"cation-input"}
            />
             <label>Education</label>
            </div>
            <div className={"cat-check-input"}>
             <input
            onChange={this.handleFilter}
             value={this.state.services}
             name={"services"}
             type={"checkbox"}
             id={"cation-input"}
            />
             <label>Services</label>
            </div>
            </div>

            <div className={"select-cat"}>
              <div className={"essential-msg"}>
                <h4>Great for:</h4>
              </div>
            </div>
            <div className={"cat-check-parent"}>
              <div className={"cat-check-input"}>
                <input
                  onChange={this.handleFilter}
                value={this.state.groups}
                name={"groups"}
                type={"checkbox"}
                id={"cation-input"}
                />
                <label>Groups</label>
              </div>

              <div className={"cat-check-input"}>
                <input
                  onChange={this.handleFilter}
                value={this.state.kids}
                name={"kids"}
                type={"checkbox"}
                id={"cation-input"}
                />
                <label>Kids</label>
              </div>

              <div className={"cat-check-input"}>
                <input
                  onChange={this.handleFilter}
                value={this.state.seniors}
                name={"seniors"}
                type={"checkbox"}
                id={"cation-input"}
                />
                <label>Seniors</label>
              </div>

              <div className={"cat-check-input"}>
                <input
                  onChange={this.handleFilter}
                value={this.state.teens}
                name={"teens"}
                type={"checkbox"}
                id={"cation-input"}
                />
                <label>Teens</label>
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
