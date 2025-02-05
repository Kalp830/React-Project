export const getImageUrl = (person) => {
  console.log(person.imageId);
  return "https://i.imgur.com/" + person.imageId + ".jpg";
};
