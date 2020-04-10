import pet, { ANIMALS } from "@frontendmasters/pet";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import useDropdown from "./useDropdown";

export const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown, setAnimal] = useDropdown(
    "Animal",
    "dog",
    ANIMALS
  );
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = _.map(breeds, ({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
