export const getPhotographerName = (data) => {
  const id = window.location.search.split("id=")[1];
  let result = data.photographers.filter((photographer) => photographer.id == id);
  return result[0].name;
}