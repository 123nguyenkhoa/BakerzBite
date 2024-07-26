import React, { useState } from "react";
import "./Branch.css"; 
import MapComponent from "./Map"; 


const branches = [
  {
    name: "Alabama",
    address: "789 Bakery Lane, Birmingham",
    phone: "(555) 789-1234",
    lat: 33.5186,
    lng: -86.8104,
  },
  {
    name: "Alaska",
    address: "456 Baking Boulevard, Anchorage",
    phone: "(555) 456-7890",
    lat: 61.2181,
    lng: -149.9003,
  },
  {
    name: "Arizona",
    address: "123 Pastry Place, Phoenix",
    phone: "(555) 123-4567",
    lat: 33.4484,
    lng: -112.074,
  },
  {
    name: "Arkansas",
    address: "321 Cake Street, Little Rock",
    phone: "(555) 321-6789",
    lat: 34.7465,
    lng: -92.2896,
  },
  {
    name: "California",
    address: "123 Bakery Street, Los Angeles",
    phone: "(555) 123-4567",
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    name: "Colorado",
    address: "456 Cake Avenue, Denver",
    phone: "(555) 456-7890",
    lat: 39.7392,
    lng: -104.9903,
  },
  {
    name: "Connecticut",
    address: "789 Pie Parkway, Hartford",
    phone: "(555) 789-1234",
    lat: 41.7658,
    lng: -72.6734,
  },
  {
    name: "Delaware",
    address: "987 Cookie Court, Dover",
    phone: "(555) 987-6543",
    lat: 39.1582,
    lng: -75.5244,
  },
  {
    name: "Washington D.C.",
    address: "654 Pastry Lane, Washington",
    phone: "(555) 654-3210",
    lat: 38.8951,
    lng: -77.0369,
  },
  {
    name: "Florida",
    address: "321 Dessert Drive, Miami",
    phone: "(555) 321-6789",
    lat: 25.7617,
    lng: -80.1918,
  },
  {
    name: "Georgia",
    address: "987 Bakery Boulevard, Atlanta",
    phone: "(555) 987-6543",
    lat: 33.749,
    lng: -84.388,
  },
  {
    name: "Hawaii",
    address: "654 Cake Circle, Honolulu",
    phone: "(555) 654-3210",
    lat: 21.3069,
    lng: -157.8583,
  },
  {
    name: "Idaho",
    address: "123 Pie Place, Boise",
    phone: "(555) 123-4567",
    lat: 43.615,
    lng: -116.2023,
  },
  {
    name: "Illinois",
    address: "456 Pastry Street, Chicago",
    phone: "(555) 456-7890",
    lat: 41.8781,
    lng: -87.6298,
  },
  {
    name: "Indiana",
    address: "789 Cookie Court, Indianapolis",
    phone: "(555) 789-1234",
    lat: 39.7684,
    lng: -86.1581,
  },
  {
    name: "Iowa",
    address: "987 Dessert Drive, Des Moines",
    phone: "(555) 987-6543",
    lat: 41.5868,
    lng: -93.625,
  },
  {
    name: "Kansas",
    address: "654 Bakery Lane, Topeka",
    phone: "(555) 654-3210",
    lat: 39.0558,
    lng: -95.689,
  },
  {
    name: "Kentucky",
    address: "321 Cake Street, Frankfort",
    phone: "(555) 321-6789",
    lat: 38.2009,
    lng: -84.8733,
  },
  {
    name: "Louisiana",
    address: "123 Pastry Place, Baton Rouge",
    phone: "(555) 123-4567",
    lat: 30.4515,
    lng: -91.1871,
  },
  {
    name: "Maine",
    address: "456 Cookie Court, Augusta",
    phone: "(555) 456-7890",
    lat: 44.3106,
    lng: -69.7795,
  },
  {
    name: "Maryland",
    address: "789 Pie Parkway, Annapolis",
    phone: "(555) 789-1234",
    lat: 38.9784,
    lng: -76.4922,
  },
  {
    name: "Massachusetts",
    address: "987 Cake Avenue, Boston",
    phone: "(555) 987-6543",
    lat: 42.3601,
    lng: -71.0589,
  },
  {
    name: "Michigan",
    address: "654 Pastry Place, Lansing",
    phone: "(555) 654-3210",
    lat: 42.7336,
    lng: -84.5555,
  },
  {
    name: "Minnesota",
    address: "321 Bakery Boulevard, St. Paul",
    phone: "(555) 321-6789",
    lat: 44.9537,
    lng: -93.09,
  },
  {
    name: "Mississippi",
    address: "123 Cake Circle, Jackson",
    phone: "(555) 123-4567",
    lat: 32.2988,
    lng: -90.1848,
  },
  {
    name: "Missouri",
    address: "456 Pie Place, Jefferson City",
    phone: "(555) 456-7890",
    lat: 38.5767,
    lng: -92.1735,
  },
  {
    name: "Montana",
    address: "789 Pastry Street, Helena",
    phone: "(555) 789-1234",
    lat: 46.5926,
    lng: -112.0391,
  },
  {
    name: "Nebraska",
    address: "987 Cookie Court, Lincoln",
    phone: "(555) 987-6543",
    lat: 40.8136,
    lng: -96.7026,
  },
  {
    name: "Nevada",
    address: "654 Dessert Drive, Carson City",
    phone: "(555) 654-3210",
    lat: 39.1638,
    lng: -119.7674,
  },
  {
    name: "New Hampshire",
    address: "321 Bakery Lane, Concord",
    phone: "(555) 321-6789",
    lat: 43.2081,
    lng: -71.5376,
  },
  {
    name: "New Jersey",
    address: "123 Cake Street, Trenton",
    phone: "(555) 123-4567",
    lat: 40.217,
    lng: -74.7429,
  },
  {
    name: "New Mexico",
    address: "456 Pastry Place, Santa Fe",
    phone: "(555) 456-7890",
    lat: 35.6868,
    lng: -105.9378,
  },
  {
    name: "New York",
    address: "789 Pie Avenue, Albany",
    phone: "(555) 789-1234",
    lat: 42.6526,
    lng: -73.7562,
  },
  {
    name: "North Carolina",
    address: "987 Cake Court, Raleigh",
    phone: "(555) 987-6543",
    lat: 35.7796,
    lng: -78.6382,
  },
  {
    name: "North Dakota",
    address: "654 Pastry Parkway, Bismarck",
    phone: "(555) 654-3210",
    lat: 46.8083,
    lng: -100.7837,
  },
  {
    name: "Ohio",
    address: "321 Bakery Boulevard, Columbus",
    phone: "(555) 321-6789",
    lat: 39.9612,
    lng: -82.9988,
  },
  {
    name: "Oklahoma",
    address: "123 Cookie Street, Oklahoma City",
    phone: "(555) 123-4567",
    lat: 35.4676,
    lng: -97.5164,
  },
  {
    name: "Oregon",
    address: "456 Pie Place, Salem",
    phone: "(555) 456-7890",
    lat: 44.9426,
    lng: -123.0351,
  },
  {
    name: "Pennsylvania",
    address: "789 Pastry Street, Harrisburg",
    phone: "(555) 789-1234",
    lat: 40.2732,
    lng: -76.8867,
  },
  {
    name: "Rhode Island",
    address: "987 Cake Lane, Providence",
    phone: "(555) 987-6543",
    lat: 41.824,
    lng: -71.4128,
  },
  {
    name: "South Carolina",
    address: "654 Pastry Place, Columbia",
    phone: "(555) 654-3210",
    lat: 34.0007,
    lng: -81.0348,
  },
  {
    name: "South Dakota",
    address: "321 Bakery Court, Pierre",
    phone: "(555) 321-6789",
    lat: 44.3682,
    lng: -100.351,
  },
  {
    name: "Tennessee",
    address: "123 Cake Lane, Nashville",
    phone: "(555) 123-4567",
    lat: 36.1627,
    lng: -86.7816,
  },
  {
    name: "Texas",
    address: "456 Pastry Street, Austin",
    phone: "(555) 456-7890",
    lat: 30.2672,
    lng: -97.7431,
  },
  {
    name: "Utah",
    address: "789 Cookie Boulevard, Salt Lake City",
    phone: "(555) 789-1234",
    lat: 40.7608,
    lng: -111.891,
  },
  {
    name: "Vermont",
    address: "987 Bakery Place, Montpelier",
    phone: "(555) 987-6543",
    lat: 44.2601,
    lng: -72.5754,
  },
  {
    name: "Virginia",
    address: "654 Pie Lane, Richmond",
    phone: "(555) 654-3210",
    lat: 37.5407,
    lng: -77.436,
  },
  {
    name: "Washington",
    address: "321 Pastry Street, Seattle",
    phone: "(555) 321-6789",
    lat: 47.6062,
    lng: -122.3321,
  },
  {
    name: "West Virginia",
    address: "123 Bakery Lane, Charleston",
    phone: "(555) 123-4567",
    lat: 38.3362,
    lng: -81.6123,
  },
  {
    name: "Wisconsin",
    address: "456 Cake Avenue, Madison",
    phone: "(555) 456-7890",
    lat: 43.0731,
    lng: -89.4012,
  },
  {
    name: "Wyoming",
    address: "789 Pastry Drive, Cheyenne",
    phone: "(555) 789-1234",
    lat: 41.14,
    lng: -104.8202,
  },
];

const Branch = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleBranchClick = (branch) => {
    if (selectedBranch && selectedBranch.name === branch.name) {
      setSelectedBranch(null);
    } else {
      setSelectedBranch(branch);
    }
  };

  return (
    <div className="branch-container">
      <div className="branch-list">
        <h2>Our Branches</h2>
        <ul>
          {branches.map((branch, index) => (
            <li key={index} className="branch-item">
              <div
                className="branch-header"
                onClick={() => handleBranchClick(branch)}
              >
                {branch.name}
                <span className="arrow">
                  {selectedBranch && selectedBranch.name === branch.name
                    ? "−"
                    : "+"}
                </span>
              </div>
              <div
                className={`branch-info ${
                  selectedBranch && selectedBranch.name === branch.name
                    ? "branch-info-show"
                    : ""
                }`}
              >
                <p>{branch.address}</p>
                <p>Phone: {branch.phone}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="branch-map">
        <MapComponent
          center={
            selectedBranch
              ? { lat: selectedBranch.lat, lng: selectedBranch.lng }
              : { lat: 37.7749, lng: -122.4194 }
          } 
          zoom={selectedBranch ? 12 : 4} 
          markers={
            selectedBranch
              ? [
                  {
                    lat: selectedBranch.lat,
                    lng: selectedBranch.lng,
                    title: selectedBranch.name,
                  },
                ]
              : []
          }
        />
      </div>
    </div>
  );
};

export default Branch;
