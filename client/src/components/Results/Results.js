import React from "react";
import "../Results/Results.css";
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import startCase from 'lodash/startCase';
import camelCase from 'lodash/camelCase';
import template from 'lodash/template';





class Results extends React.Component {
  state = { 
    query: gql`{
      searchOpportunities(
          input: {
            location: "Sacremento, CA"
          }
        ) {
          currentPage
          resultsSize
          opportunities {
            title
            categories
            imageUrl
            url
            skillsNeeded
            description
            volunteersNeeded
            dateRange {
              endDate
              endTime
              ongoing
              singleDayOpps
              startDate
              startTime
            }
            location {
              street1
              street2
              city
              region
              postalCode
              virtual
            }
            parentOrg {
              name
              mission
              url
              phoneNumber
              imageUrl
            }      
          }
        }
      }`
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.location !== this.props.location){
      this.setState({
        query: gql`{
          searchOpportunities(
              input: {
                location: "${this.props.location}"
              }
            ) {
              currentPage
              resultsSize
              opportunities {
                title
                categories
                imageUrl
                url
                skillsNeeded
                description
                volunteersNeeded
                dateRange {
                  endDate
                  endTime
                  ongoing
                  singleDayOpps
                  startDate
                  startTime
                }
                location {
                  street1
                  street2
                  city
                  region
                  postalCode
                  virtual
                }
                parentOrg {
                  name
                  mission
                  url
                  phoneNumber
                  imageUrl
                }      
              }
            }
          }`
      })
    }
  }
  
  render() {
    const regex = /(<([^>]+)>)/ig;
    return (
        <Query query={this.state.query}>
        {({ loading, error, data }) => {
          if (loading) return <p>Just a moment please...</p>
          if (error) return <p>Looks like we've got a problem...</p>
          console.log("this is where the data goes" + JSON.stringify(data.searchOpportunities.opportunities, null, 4));
          return (
            <div className={"results-container"}>
             <div className={"city-header"}>
              <h2>Opportunities Near {data.searchOpportunities.opportunities[0].location.city}</h2>
            </div>
            <div className={"results-inner"}>
             {data.searchOpportunities.opportunities.map((opportunities, index) => (
              <div className={"cards"} key={index}>
               { console.log(opportunities) }
                <div className={"top-card"}>
                 <div className={"opp-img"}>
                  <div className={"img-inner"}>
                   <img src={opportunities.imageUrl === null ? "https://bespokedemo.com/wp-content/uploads/2020/01/VolunteerMatch-Logo.png": opportunities.imageUrl} className="card-img-top" alt="oppotunity-img" />
                  </div>                
                 </div>
                <div className={"org-date-cont"}>
                 <h3>{opportunities.parentOrg.name}</h3>
                  <span>Date: {opportunities.dateRange.startDate === null ? "Open Ended" : opportunities.dateRange.startDate}</span>
               </div>
              </div>
             <div className={"card-body"}>
              <div className={"category-cont"}>
                { opportunities.categories.length === 3 ? 
                 <div className={"category-cont-inner"}>
                  <span>{startCase(camelCase(opportunities.categories[0]))}</span>
                  <span>{startCase(camelCase(opportunities.categories[1]))}</span>
                  <span>{startCase(camelCase(opportunities.categories[2]))}</span> 
                 </div>
                : null
                }
                { opportunities.categories.length === 2 ? 
                 <div className={"category-cont-inner"}>
                  <span>{startCase(camelCase(opportunities.categories[0]))}</span>
                  <span>{startCase(camelCase(opportunities.categories[1]))}</span>
                 </div>
                  : null
                }
                { opportunities.categories.length === 1 ? 
                 <div className={"category-cont-inner"}>
                  <span>{startCase(camelCase(opportunities.categories[0]))}</span>
                 </div>
                  : null
                }
                </div>
              <div className={"opp-title-cont"}>
                <div className={"opp-title"}>
                   <h3>{opportunities.title}</h3>
                </div>
                <div className={"opp-desc"}>
                  {/* {console.log("desc " + opportunities.description)} */}
                 <p>{opportunities.description.replace(regex,'')}</p>
                </div>
               </div>
              <div className={"learn-more"}> 
               <a href={opportunities.url} target={"_blank"}>
                <span>Learn More</span>
               </a>
              </div>
            </div>
        </div>
         )
        )}
        </div>
      </div>
          )
        }}
      </Query>
    );
  }
}

export default Results;
