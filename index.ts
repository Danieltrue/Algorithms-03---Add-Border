const addBorder = (picture: string[]): string[] => {
  const borderlength = picture[0].length;

  const wall = "".concat("*").repeat(borderlength);

  for (var i = 0; i < picture.length; i++) {
    picture[i] = "*" + picture[i].concat("*");
  }

  picture.unshift(wall);
  picture.push(wall);

  return picture;
};

console.log(addBorder(["123", "456"]));
