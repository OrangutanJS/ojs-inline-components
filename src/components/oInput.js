import o from 'ojs-core';
import isValidInputEventName from '../utils/isValidInputEventName';
import updateComponentDb from "../utils/updateComponentDb";

export default function oInput(typeOrConfig) {
  if (!(this instanceof oInput)) {
    return new oInput(typeOrConfig);
  }

  this.element = o('input');
  this.input = this.element.element;
  this.dbSet = false;
  this.dbObject = null;
  this.dbKey = null;
  this.index = null;

  if(typeof typeOrConfig === 'string') {
    this.type(typeOrConfig);
  }

  //TODO: initConfigService
  if(typeof typeOrConfig === 'object') {
    // this.attr(typeOrConfig);
  }
}

oInput.prototype.attr = function(attrs) {
  this.element.attr(attrs);
  return this;
}

oInput.prototype.checked = function (checked) {
  if(checked !== 'true' && checked !== 'false' && typeof checked !== "boolean") return this;

  this.element.attr({
    checked
  });
  return this;
}

oInput.prototype.classList = function(classList) {
  this.element.classList(classList);
  return this;
}

oInput.prototype.db = function (db, name, updateOn = 'change') {
  if(!isValidInputEventName(updateOn)) {
    updateOn = 'change';
  }

  if(this.dbSet) return this;

  this.dbSet = true;
  this.dbObject = db;
  this.dbKey = name;

  this.element.event({
    name: updateOn,
    fn: e => {
      updateComponentDb(
        this.dbObject,
        this.dbKey,
        this.index,
        e.target.value
      );
    }
  });

  this.input.value = this.index ? db[this.index][name] : db[name];
  return this;
}

oInput.prototype.dbIndex = function(index) {
  this.index = index;
  return this;
}

oInput.prototype.disabled = function(required) {
  if(disabled !== 'true' && disabled !== 'false' && typeof disabled !== 'boolean') return this;

  this.element.attr({
    disabled
  });
  return this;
}

oInput.prototype.event = function(eventObject) {
  if(typeof eventObject !== 'object') return this;

  this.element.event(eventObject);
  return this;
}

oInput.prototype.formatter = function(formatterFunction, formatOnEvent) {
  if(typeof formatterFunction !== 'function') return this;

  const formatOnEventValidated = isValidInputEventName(formatOnEvent) ? formatOnEvent : 'keyup';

  this.element.event({
    name: formatOnEventValidated,
    fn: e => {
      const formattedValue = formatterFunction(e, this);
      this.textarea.value = formattedValue;
      if(this.dbSet) {
        updateComponentDb(
          this.dbObject,
          this.dbKey,
          this.index,
          formattedValue
        );
      }
    }
  });
  return this;
}

oInput.prototype.getValue = function() {
  return this.input.value;
}

oInput.prototype.id = function (id) {
  if(typeof id === 'undefined') return this;//nie wiem czy sprawdzać też pusty string + inne walidacje

  this.element.id(id);
  return this;
}

oInput.prototype.init = function() {
  return this.element.init();
}

oInput.prototype.max = function (max) {
  this.element.attr({
    max
  });
  return this;
}

oInput.prototype.maxLength = function (maxLength) {
  if(isNaN(maxLength)) return this;
  this.element.attr({
    maxLength
  });
  return this;
}

oInput.prototype.min = function (min) {
  this.element.attr({
    min
  });
  return this;
}

oInput.prototype.name = function(name) {
  if(typeof name !== 'string') return this;
  this.element.attr({
    name
  });
  return this;
}

oInput.prototype.onChange = function(event) {
  if(typeof event !== 'function') return this;

  this.element.event({
    name: 'change',
    fn: e => event(e, this)
  });
  return this;
}

oInput.prototype.onFocus = function(event) {
  if(typeof event !== 'function') return this;

  this.element.event({
    name: 'focusin',
    fn: e => event(e, this)
  });
  return this;
}

oInput.prototype.onFocusOut = function(event) {
  if(typeof event !== 'function') return this;

  this.element.event({
    name: 'focusout',
    fn: e => event(e, this)
  });
  return this;
}

oInput.prototype.onKeyUp = function(event) {
  if(typeof event !== 'function') return this;

  this.element.event({
    name: 'keyup',
    fn: e => event(e, this)
  });
  return this;
}

oInput.prototype.onKeyDown = function(event) {
  if(typeof event !== 'function') return this;

  this.element.event({
    name: 'keydown',
    fn: e => event(e, this)
  });
  return this;
}

oInput.prototype.pattern = function (pattern) {
  if(typeof pattern !== 'string') return this;

  this.element.attr({
    pattern
  });
  return this;
}

oInput.prototype.placeholder = function(placeholder) {
  this.element.attr({
    placeholder
  });
  return this;
}

oInput.prototype.readonly = function(readonly) {
  if(readonly !== 'true' && readonly !== 'false' && typeof readonly !== 'boolean') return this;

  this.element.attr({
    readonly
  });
  return this;
}

oInput.prototype.required = function(required) {
  if(required !== 'true' && required !== 'false' && typeof required !== 'boolean') return this;

  this.element.attr({
    required
  });
  return this;
}

oInput.prototype.step = function(step) {
  if(step !== 'any' && isNaN(step)) return this;

  this.element.attr({
    step
  });
  return this;
}

oInput.prototype.type = function(type) {
  this.element.attr({
    type
  });

  return this;
}

oInput.prototype.value = function(value) {
  this.element.setValue(value);
  return this;
}


//methods ideas
oInput.prototype.validator = () => {}

//ideas

