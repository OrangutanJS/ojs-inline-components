const VALID_EVENTS = [
  'change',
  'input',
  'keyup',
  'keydown',
  'focus',
  'focusin',
  'focusout',
  'click',
];

export default function isValidInputEventName(eventName) {
  if(!eventName || typeof eventName !== 'string') return false;

  const eventNameSanitized = eventName.toLowerCase().trim();
  return VALID_EVENTS.includes(eventNameSanitized);
}
