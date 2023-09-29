const strContains = (title, searchString) => {
  return title.toLowerCase().includes(searchString.toLowerCase()) ? true : false;
};

export default strContains;
