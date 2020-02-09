import React from "react";
import "../Results/Results.css";
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const callAPI = gql`{
    searchOpportunities(
        input: {
          location: "Philadelphia, PA"
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
    }`;

class Results extends React.Component {
  render() {
    return (
        <Query query={callAPI}>
        {({ loading, error, data }) => {
          if (loading) return <p>Relax, it's worth the wait...</p>
          if (error) return <p>Looks like we've got a problem...</p>
          console.log("this is where the data goes" + JSON.stringify(data.searchOpportunities.opportunities, null, 4));
          return (
            <div className={"results-container"}>
            <div className={"city-header"}>
            <h2>Opportunities Near {data.searchOpportunities.opportunities[0].location.city}</h2>
            </div>
            <div className={"abs-cont"}></div>
            <div className={"results-inner"}>
                    {data.searchOpportunities.opportunities.map(opportunities => (
                        <div className={"cards"}>
                        { console.log(opportunities) }
                        <div className={"opp-img"}>
                        <img
                         src={opportunities.parentOrg.imageUrl == null ? "https://bespokedemo.com/wp-content/uploads/2020/01/VolunteerMatch-Logo.png": opportunities.parentOrg.imageUrl}
                          className="card-img-top"
                          alt="oppotunity-img" />
                        </div>
                        <div className={"card-body"}>
                        <div className={"category-cont"}>
                        <span>{opportunities.categories[0]}</span>
                        <span>{opportunities.categories[1]}</span>
                        <span>{opportunities.categories[2]}</span>
                        </div>
                        <div className={"opp-title-cont"}>
                        <div className={"opp-title"}>
                         <h3>{opportunities.title}</h3>
                        </div>
                         <div className={"date-range"}>
                         <h5>{opportunities.dateRange.startDate == null ? "N/A" : opportunities.dateRange.startDate}</h5>
                         </div>
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