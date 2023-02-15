import {useEffect} from 'react'

const TypeText = ({ element, text, delay }) => {
  useEffect(() => {
    if (element) {
      let index = 0;
      const type = () => {
        if (index < text.length) {
          element.innerHTML += text[index];
          index++;
          setTimeout(type, delay);
        }
      }
      type();
    }
  }, [element, text, delay]);

  return null;
}

export default TypeText;