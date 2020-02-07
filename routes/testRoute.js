const axios = require('axios');

module.exports = function (app) {

  const API_KEY = '53d6d5fc372c25486051bc2b197daec4';
  const API_URL = 'https://graphql.stage.volunteermatch.org/graphql';
  var q = `query { 
    searchOpportunities(
      input: {
        location: "San Francisco, CA"
      }
    ) {
      currentPage
      resultsSize
      opportunities {
        title
        location {
          city
          region
        }
        parentOrg {
          name
        }      
      }
    }
  }`;
  
  const options = {
    headers: { 
      'X-api-key': API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  app.get('/api', (req, res) => {
    axios.post(API_URL)
      .end(function (result) {
        // console.log(result.status, result.headers, result.body);
        res.status(200).send(result);
        
      });
  });
  
  axios.post(
    API_URL,
    JSON.stringify({query: q}),
    options
  ).then((response) => {
    console.log(response.status + ' ' + response.statusText);
    if (response.data.errors) {
      console.log(response.data.errors);
    }
    if (response.data.data) {
      console.log(response.data.data.searchOpportunities);
    }
  }).catch((error) => {
    console.log(error);
  });

};




// var metaData = {};

// volunteerMatchApiCall({
//     action: 'getMetaData'
// }, function (response) {
//     metaData = response;
// });

// $('.form-search').submit(function () {

//     volunteerMatchApiCall({
//         action: 'searchOpportunities',
//         query: JSON.stringify({
//             virtual: $('[name="virtual"]', this).is(':checked'),
//             location: $('[name="location"]', this).val(),
//             keywords: $('[name="keywords"]', this).val().split(' ')
//         })
//     }, function (response) {
//         $.each(response.opportunities, function (opportunityIndex, opportunity) {
//             $('.card-columns-results').append(
//                 $('.result-template').html()
//                     .replace('{{imageUrl}}', decodeURIComponent(opportunity.imageUrl))
//                     .replace('{{vmUrl}}', decodeURIComponent(opportunity.vmUrl))
//                     .replace('{{vmUrl}}', decodeURIComponent(opportunity.vmUrl))
//                     .replace('{{title}}', opportunity.title)
//                     .replace('{{parentOrgId}}', opportunity.parentOrg.id)
//                     .replace('{{parentOrgName}}', opportunity.parentOrg.name)
//                     .replace('{{availability}}', (opportunity.availability.ongoing ? 'Flexible Schedule' : (opportunity.availability.singleDayOpportunity ? moment(opportunity.availability.startDate).format('MMM Do, YYYY') : moment(opportunity.availability.startDate).format('MMM Do, YY') + ' - ' + moment(opportunity.availability.endDate).format('MMM Do, YY'))))
//                     .replace('{{description}}', opportunity.plaintextDescription.substr(0, 200).split(' ').slice(0, -1).join(' ') + '&hellip;')
//                     .replace('{{categories}}', opportunity.categoryIds.map(categoryId => metaData.categories.filter(category => category.id == categoryId)[0].name).join('</td><td class="p-1 border-left">'))
//                     .replace('{{greatfor}}', opportunity.greatFor.map(code => 'Great for ' + code.replace('s', '55+').replace('t', 'teens').replace('k', 'kids').replace('g', 'groups')).join('</span><span class="badge badge-dark border mr-1">'))
//                     .replace('{{location}}', opportunity.virtual ? 'Virtual Opportunity' : opportunity.location.city + ', ' + opportunity.location.region)
//             );
//         });
//     });

//     return false;
// });

// $('.checkbox-show-virtual').change(function () {
//     if ($(this).is(':checked')) {
//         $('.form-control-location').attr('disabled', 'disabled');
//     } else {
//         $('.form-control-location').removeAttr('disabled');
//     }
// });

// $(window).resize(function () {
//     $('iframe[src*="youtube"]').each(function () {
//         $(this).css('height', $(this).width() * 9 / 16 + 'px');
//     });
// }).resize();

// function volunteerMatchApiCall(data, success, error) {
//     var apiKey = 'f50d4950d6fedc62da5865fc24e4f5de',
//         username = 'johnlegend',
//         created = moment().format("YYYY-MM-DDTHH:mm:ssZZ"),
//         nonce = getRandomAlphanumericString(5, ''),
//         passwordDigest = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(nonce + created + apiKey));

//     $.ajax({
//         url: '//www.volunteermatch.org/api/call',
//         data: data,
//         headers: {
//             'Authorization': 'WSSE profile="UsernameToken"',
//             'X-WSSE': 'UsernameToken Username="' + username + '", PasswordDigest="' + passwordDigest + '", Nonce="' + nonce + '", Created="' + created + '"',
//         },
//         success: success,
//         error: function(jqxhr, status, error) {
//             console.log('ERROR');
//             console.log(status);
//             console.log(error);
//         },
//     });
// }

// function getRandomAlphanumericString(length, string) {
//     var alphanumeric = 'abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ09123456789';
//     string += alphanumeric.substr(Math.floor(Math.random() * alphanumeric.length), 1);
//     return length == 1 ? string : getRandomAlphanumericString(length - 1, string);
// }

