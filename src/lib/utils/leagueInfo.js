export const leagueID = "932006249372286976"; // your league ID
export const leagueName = "Fantasy League of Ex-Athletes (FLEA)"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables


export const homepageText = `
  <p>A rag-tag group of friends with the most competitive fantasy league on planet Earth! The FLEA began in 2016. </p>
  <p>Founded by co-comissioners Windell Barfield & Clayton Shirley - who are dedicated in bringing an exciting, competitive & fair fantasy experience to their fantasy constituents.</p>
  <p>This page will be consistenly updated regularly with draft order, transactions, trades & other fantasy tid-bits, such as commish blogs!</p>
`;


// To omit an optional field, set it's value to null

export const managers = [
    { // 1st-Team
      "managerID": "195265232795336704",  // ID of the managerID that the manager manages (look at the order of the power rankings graph)
      "name": "Windell Barfield",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Georgia", // (optional)
      "bio":"",
      "photo": "/managers/Windell.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": null, // 1 - null
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // 2nd-Team
      "managerID": "212639722470637568",  // ID of the managerID that the manager manages (look at the order of the power rankings graph)
      "name": "Clayton Shirley",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Georgia", // (optional)
      "bio":"",
      "photo": "/managers/Clayton.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": null, // 1 - null
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // 3rd-Team
      "managerID": "601991119231848448",  // ID of the managerID that the manager manages (look at the order of the power rankings graph)
      "name": "Lance Barnes",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "North Carolina", // (optional)
      "bio":"",
      "photo": "/managers/Lance.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": null, // 1 - null
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      // 4th-Team
      "managerID": "603993255616512000",  // ID of the managerID that the manager manages (look at the order of the power rankings graph)
      "name": "Trey Alexander",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Georgia", // (optional)
      "bio":"",
      "photo": "/managers/Trey.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
      "mode": null, // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
      "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": null,
      "tradingScale": null, // 1 - null
      "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
    // 5th-Team
    "managerID": "605511948712370176",  // ID of the managerID that the manager manages (look at the order of the power rankings graph)
    "name": "Spencer Hardin",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Georgia", // (optional)
    "bio":"",
    "photo": "/managers/Spencer.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - null
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    // 6th-Team
    "managerID": "606960030209626112",  // ID of the managerID that the manager manages (look at the order of the power rankings graph)
    "name": "Dylan Baker",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Georgia", // (optional)
    "bio":"",
    "photo": "/managers/Dylan.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - null
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    // 7th-Team
    "managerID": "607257583161536512",  // ID of the managerID that the manager manages (look at the order of the power rankings graph)
    "name": "Will Lowery",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Georgia", // (optional)
    "bio":"",
    "photo": "/managers/Lowery.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - null
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    // 8th-Team
    "managerID": "723992186059853824",  // ID of the managerID that the manager manages (look at the order of the power rankings graph)
    "name": "Morgan Rich",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Georgia", // (optional)
    "bio":"",
    "photo": "/managers/Mo.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - null
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    // 9th-Team
    "managerID": "724065874633355264",  // ID of the managerID that the manager manages (look at the order of the power rankings graph)
    "name": "Hal Mansour",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Georgia", // (optional)
    "bio":"",
    "photo": "/managers/Hal.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - null
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    // 10th-Team
    "managerID": "725757598426587136",  // ID of the managerID that the manager manages (look at the order of the power rankings graph)
    "name": "Noah Walsh",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Georgia", // (optional)
    "bio":"",
    "photo": "/managers/Noah.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
    "mode": null, // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
    "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": null, // 1 - null
    "preferredContact": null, // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "managerID": 3,  // (DEPRECATED! Don't use this anymore) ID of the managerID that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": null, // (optional)
    //   "bio":"",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "null", // (optional) favorite NFL team, (follows convention: null, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "null", // (optional) 'null', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'null.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": null, // (optional)
    //   "tradingScale": null, // 1 - null (optional)
    //   "preferredContact": null,  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
