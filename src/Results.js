import _ from "lodash";
import React from "react";
import { Pet } from "./Pet";

export default function Results({ pets }) {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets Found</h1>
      ) : (
        _.map(pets, (pet) => (
          <Pet
            animal={pet.type}
            breed={pet.breeds.primary}
            name={pet.name}
            id={pet.id}
            key={pet.id}
            media={pet.photos}
            location={`${pet.contact.address.city + pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
}
