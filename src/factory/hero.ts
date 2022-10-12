const createHero = (heroObject: {
  id: Number;
  name: String;
  thumbnail: {
    path: String;
    extension: String;
  };
}) => {
  return {
    idHero: heroObject.id,
    name: heroObject.name,
    image: `${heroObject.thumbnail.path}.${heroObject.thumbnail.extension}`,
  };
};

export default {
  createHero,
};
