import React from "react";
import "../Form/Form.css";

class Form extends React.Component {
  state = {
    location: ""
  };

  handleInputChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }


  render() {
    return (
      <div className={'form-cont'}>
        <div className={'form-inner'}>
        <form className="search">
         <label>Where are you looking for volunteer opportunities?</label>
            <input
             onChange={this.handleInputChange}
             value={this.state.location}
             name={"location"}
             type={"text"}
             placeholder={"Enter Your Location"}
             id={"cation-input"}
            />
        <button
            type="submit"
            onClick={(event)=>this.props.handleFormSubmit(event, this.state.location)}
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
