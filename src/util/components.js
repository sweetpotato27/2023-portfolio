export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const generateRandomCharacter = () => {
  const possibleCharacters = "abcdefghijklmnopqrstuvwxyz0123456789?!@#$%&(){}[]|";
  return possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
}

export const generateGridOfCharacters = (gridState, setElementState) => {
  // Create an empty array to hold the elements
  let elements = [];
  let intro = "INTRODUCTION".split("");
  let skill = "SKILLS".split("");
  let contact = "CONTACT".split("");
  let project = "PROJECTS".split("");
  let resume = "RESUME".split("");
  const { elementsPerRow, elementsPerColumn, totalElements } = gridState;
  for (let i = 0; i < totalElements; i++) {
    let element = {};
    if (intro.length > 0) {
      element.key = elements.length + 1;
      element.index = intro.length - 1;
      element.type = "intro";
      element.character = intro.pop();
    } else if (skill.length > 0) {
      element.key = elements.length + 1;
      element.index = skill.length - 1;
      element.type = "skill";
      element.character = skill.pop();
    } else if (contact.length > 0) {
      element.key = elements.length + 1;
      element.index = contact.length - 1;
      element.type = "contact";
      element.character = contact.pop();
    } else if (project.length > 0) {
      element.key = elements.length + 1;
      element.index = project.length - 1;
      element.type = "project";
      element.character = project.pop();
    } else if (resume.length > 0) {
      element.key = elements.length + 1;
      element.index = resume.length - 1;
      element.type = "resume";
      element.character = resume.pop();
    } else {
      element.key = elements.length + 1;
      element.index = elements.length + 1;
      element.type = "other";
      element.character = generateRandomCharacter();
    }
    elements.push(element)
  }
  elements = shuffleArray(elements);
  // Iterate through the rows and columns
  let index = 0;
  for (let y = 0; y < elementsPerColumn; y++) {
    for (let x = 0; x < elementsPerRow; x++) {
      // Calculate the x and y positions of the element
      // Takes into account the height of nav bar
      const randomOffsetChance = 0.07;
      const isRandomPixelOffset = Math.random() < randomOffsetChance;
      const maxOffsetNum = 30;
      const randomXOffset = isRandomPixelOffset ? Math.floor(Math.random() * maxOffsetNum) + 1 : 0;
      const randomYOffset = isRandomPixelOffset ? Math.floor(Math.random() * maxOffsetNum) + 1 : 0;
      const heightOffset = document.getElementById('navigation-bar').offsetHeight;
      const xPos = x * 48 + randomXOffset;
      const yPos = y * 48 + heightOffset + 17 + randomYOffset;

      // Create an object for the element and push it to the elements array
      let element = elements[index];
      if (element.type === "intro") {
        // Shift a character off
        // Insert character into object
        // Push object to gridProperties
        element.xPos = xPos;
        element.yPos = yPos;
        setElementState(prevState => ({
          ...prevState,
          intro: prevState.intro.concat(element),
        }));
      } else if (element.type === "skill") {
        element.xPos = xPos;
        element.yPos = yPos;
        setElementState(prevState => ({
          ...prevState,
          skill: prevState.skill.concat(element),
        }));
      } else if (element.type === "contact") {
        element.xPos = xPos;
        element.yPos = yPos;
        setElementState(prevState => ({
          ...prevState,
          contact: prevState.contact.concat(element),
        }));
      } else if (element.type === "project") {
        element.xPos = xPos;
        element.yPos = yPos;
        setElementState(prevState => ({
          ...prevState,
          project: prevState.project.concat(element),
        }));
      } else if (element.type === "resume") {
        element.xPos = xPos;
        element.yPos = yPos;
        setElementState(prevState => ({
          ...prevState,
          resume: prevState.resume.concat(element),
        }));
      } else {
        element.xPos = xPos;
        element.yPos = yPos;
        setElementState(prevState => ({
          ...prevState,
          other: prevState.other.concat(element),
        }));
      }

      index++;
    }
  }

  // Return the array of elements
  return elements;
}

export const pxToInt = (px) => {
  // Use a regular expression to match the "px" at the end of the string
  const match = px.match(/\d+/);
  // If a match is found, convert it to an integer and return it
  if (match) {
    return parseInt(match[0]);
  }
  // If no match is found, return null
  return null;
};

export const moveElement = (elementId, targetX, targetY) => {
  const element = document.getElementById(elementId);
  const currentX = element.offsetLeft;
  const currentY = element.offsetTop;
  const stepX = (targetX - currentX) / 10;
  const stepY = (targetY - currentY) / 10;

  function animate() {
    element.style.left = currentX + stepX + 'px';
    element.style.top = currentY + stepY + 'px';
    if (currentX !== targetX || currentY !== targetY) {
      requestAnimationFrame(animate);
    }
  }
  animate();
}