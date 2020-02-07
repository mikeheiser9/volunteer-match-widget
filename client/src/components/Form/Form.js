import React from "react";
import "../Form/Form.css";

class Form extends React.Component {
  render() {
    return (
      <div className={'form-cont'}>
        <div className={'form-inner'}>
        <form className="search">
         <label>Where are you looking for volunteer opportunities?</label>
            <input
             onChange={this.handleInputChange}
             name={"location"}
             type={"text"}
             placeholder={"Enter Your Location"}
             id={"cation-input"}
            />
        <button
            type="submit"
            onClick={this.handleFormSubmit}
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