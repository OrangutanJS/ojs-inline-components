import oInput from './components/oInput';
import oTextarea from "./components/oTextarea";

export default {
  oInput,
  oTextarea
}


const testDb = {
  key: 'hej'
}
const changeToCamelCase = (e, oTarget) => {
  const text = oTarget.getValue();
  const words = text
    .split(/\W/)
    .filter(word => Boolean(word.length))
    .map(word => word.toLowerCase());

  const wordsMapped = words.map((word, index) => (
    index
      ? word.split('').map((char, charIndex) => charIndex ? char : char.toUpperCase()).join('')
      : word
  ));

  return wordsMapped.join('');
}

const input = oInput('text').db(testDb, 'key', 'keyup').placeholder('tekst').formatter(changeToCamelCase, 'change');
document.body.appendChild(input.init())
