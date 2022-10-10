export const createHero = (
  name: String,
  race: String,
  intelligence: String,
  strength: String,
  speed: String,
  power: String,
  img: Object
) => {
  return {
    name,
    race,
    intelligence,
    strength,
    speed,
    power,
    img,
  };
};
