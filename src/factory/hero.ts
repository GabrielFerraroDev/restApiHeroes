export const createHero = (
  name: String,
  race: String,
  intelligence: String,
  strength: String,
  speed: String,
  power: String,
  img: Object = { data: Buffer, contentType: String }
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
