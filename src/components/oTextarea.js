import o from 'ojs-core';
import isValidInputEventName from '../utils/isValidInputEventName';
import updateComponentDb from "../utils/updateComponentDb";

export default function oTextarea(config) {
  if (!(this instanceof oTextarea)) {
    return new oTextarea(config);
  }

  this.element = o('textarea');
  this.textarea = this.element.element;
  this.dbSet = false;
  this.dbObject = null;
  this.dbKey = null;
  this.index = null;

  //TODO: initConfigService
  if(typeof config === 'object') {
    //
  }
}

oTextarea.prototype.attr = function(attrs) {
  this.element.attr(attrs);
  return this;
}

oTextarea.prototype.classList = function(classList) {
  this.element.classList(classList);
  return this;
}

oTextarea.prototype.cols = function(cols) {
  if(isNaN(cols)) return this;

  this.element.attr({
    cols
  });
  return this;
}

oTextarea.prototype.db = function (db, name, updateOn = 'change') {
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

  this.textarea.value = this.index ? db[this.index][name] : db[name];
  return this;
}

oTextarea.prototype.disabled = function(required) {
  if(disabled !== 'true' && disabled !== 'false' && typeof disabled !== 'boolean') return this;

  this.element.attr({
    disabled
  });
  return this;
}

oTextarea.prototype.formatter = function(formatterFunction, formatOnEvent) {
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

oTextarea.prototype.getValue = function() {
  return this.textarea.value;
}

oTextarea.prototype.id = function (id) {
  if(typeof id === 'undefined') return this;//nie wiem czy sprawdzać też pusty string + inne walidacje

  this.element.id(id);
  return this;
}

oTextarea.prototype.index = function(index) {
  this.index = index;
  return this;
}

oTextarea.prototype.init = function() {
  return this.element.init();
}

oTextarea.prototype.maxLength = function (maxLength) {
  if(isNaN(maxLength)) return this;

  this.element.attr({
    maxLength
  });
  return this;
}

oTextarea.prototype.name = function(name) {
  if(typeof name !== 'string') return this;
  this.element.attr({
    name
  });
  return this;
}

oTextarea.prototype.onChange = function(event) {
  if(typeof event !== 'function') return this;

  this.element.event({
    name: 'change',
    fn: e => event(e, this)
  });
  return this;
}

oTextarea.prototype.onFocus = function(event) {
  if(typeof event !== 'function') return this;

  this.element.event({
    name: 'focusin',
    fn: e => event(e, this)
  });
  return this;
}

oTextarea.prototype.onFocusOut = function(event) {
  if(typeof event !== 'function') return this;

  this.element.event({
    name: 'focusout',
    fn: e => event(e, this)
  });
  return this;
}

oTextarea.prototype.onKeyUp = function(event) {
  if(typeof event !== 'function') return this;

  this.element.event({
    name: 'keyup',
    fn: e => event(e, this)
  });
  return this;
}

oTextarea.prototype.onKeyDown = function(event) {
  if(typeof event !== 'function') return this;

  this.element.event({
    name: 'keydown',
    fn: e => event(e, this)
  });
  return this;
}

oTextarea.prototype.placeholder = function(placeholder) {
  this.element.attr({
    placeholder
  });
  return this;
}

oTextarea.prototype.readOnly = function(readonly) {
  if(readonly !== 'true' && readonly !== 'false' && typeof readonly !== 'boolean') return this;

  this.element.attr({
    readonly
  });
  return this;
}

oTextarea.prototype.required = function(required) {
  if(required !== 'true' && required !== 'false' && typeof required !== 'boolean') return this;

  this.element.attr({
    required
  });
  return this;
}

oTextarea.prototype.rows = function(rows) {
  if(isNaN(rows)) return this;

  this.element.attr({
    rows
  });
  return this;
}

oTextarea.prototype.value = function(value) {
  this.element.setValue(value);
  return this;
}

oTextarea.prototype.wrap = function(wrap = 'soft') {
  if(wrap !== 'soft' && wrap !== 'hard') return this;

  this.element.attr({
    wrap
  });
  return this;
}

//methods ideas
oTextarea.prototype.validator = () => {}

//ideas

