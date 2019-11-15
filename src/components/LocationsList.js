import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import "../index.css";
import LocationCard from "../components/LocationCard";



export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [location, setLocations] = useState([]);

  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/location/").then(res => {
      console.log(res.data.results);
      setLocations(res.data.results);
    }).catch(e => console.log(e));
  }, []);
  
  return (
    <section className="generic-list">
      {location.map(location => 
        
          <LocationCard
            id={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
          /> 
      )
      }
    </section>
  );
}