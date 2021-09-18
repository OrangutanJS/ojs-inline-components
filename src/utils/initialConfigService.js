import oInput from "../components/oInput";
import oButton from "../components/oButton";
import oTextarea from "../components/oTextarea";

export default function initialConfigService(config, componentInstance) {
  if (typeof config !== 'object' && config !== null) return false;
  if (!(componentInstance instanceof oInput) &&
    !(componentInstance instanceof oButton) &&
    !(componentInstance instanceof oTextarea)
  ) return false;

  Object.entries(config).forEach(initialConfigEntry => {
    const [initialConfigEntryKey, initialConfigEntryValue] = initialConfigEntry;
    const foundInMethodsConfig = METHODS_CONFIG
      .find(method => method.name === initialConfigEntryKey);

    if (!foundInMethodsConfig) return;

    const protoMethod = componentInstance.__proto__[initialConfigEntryKey];
    if (!protoMethod || typeof protoMethod !== 'function') return;

    if (foundInMethodsConfig.arguments && Array.isArray(foundInMethodsConfig.arguments)) {
      const sortedArguments = getSortedArguments(initialConfigEntryValue, foundInMethodsConfig.arguments);
      sortedArguments.length && protoMethod.call(componentInstance, ...sortedArguments);
      return;
    }
    protoMethod.call(componentInstance, initialConfigEntryValue);
  });
}

function getSortedArguments(argumentsObject, methodConfigArguments) {
  const sortedArguments = [];

  for (const argumentName of methodConfigArguments) {
    const isArgumentOptional = String(argumentName).startsWith('?');
    let foundInArgumentsObject;
    if (isArgumentOptional) {
      let argumentNameParsed = String(argumentName).substring(1);
      foundInArgumentsObject = argumentsObject[argumentNameParsed];
      if (!foundInArgumentsObject) break;
    } else {
      foundInArgumentsObject = argumentsObject[argumentName];
      if (!foundInArgumentsObject) return [];
    }
    sortedArguments.push(foundInArgumentsObject);
  }
  return sortedArguments;
}

const METHODS_CONFIG = [
  { name: 'attr' },
  { name: 'checked' },
  { name: 'classList' },
  { name: 'cols' },
  {
    name: 'db',
    arguments: [
      'db',
      'name',
      '?updateOn'
    ]
  },
  { name: 'dbIndex' },
  { name: 'disabled' },
  { name: 'event' },
  { name: 'events' },
  {
    name: 'formatter',
    arguments: [
      'formatterFunction',
      '?formatOnEvent'
    ]
  },
  { name: 'id' },
  { name: 'max' },
  { name: 'maxLength' },
  { name: 'min' },
  { name: 'name' },
  { name: 'onChange' },
  { name: 'onClick' },
  { name: 'onFocus' },
  { name: 'onFocusOut' },
  { name: 'onKeyUp' },
  { name: 'onKeyDown' },
  { name: 'onSubmit' },
  { name: 'pattern' },
  { name: 'placeholder' },
  { name: 'readonly' },
  { name: 'required' },
  { name: 'rows' },
  { name: 'step' },
  { name: 'text' },
  { name: 'type' },
  { name: 'value' },
  { name: 'wrap' }
];
