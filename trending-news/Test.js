import React, { useState, useEffect } from "react";

const Planets = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() =>
    fetch("https://api.themoviedb.org/3/movie/550?api_key=e22f04204b9373db6f5e0d6075facdd9")
      .then(res => res.json())
      .then(res => this.setState({ planets: res }))
      .catch(() => this.setState({ hasError: true }))
  );

  return <div>{JSON.stringify(planets)}</div>;
};
export default Planets;