import o from 'ojs-core';
import isValidInputEventName from '../utils/isValidInputEventName';
import updateComponentDb from '../utils/updateComponentDb';

export default function oSelect(config) {
  if (!(this instanceof oSelect)) {
    return new oSelect(config);
  }

  this.element = o('select');
  this.input = this.element.element;
  this.dbSet = false;
  this.dbObject = null;
  this.dbKey = null;
  this.index = null;
  this.optionsList = [];

  if (typeof config === 'object') {
    initialConfigService(config, this);
  }
}

oSelect.prototype.attr = function (attrs) {
  this.element.attr(attrs);
  return this;
}

oSelect.prototype.classList = function (classList) {
  this.element.classList(classList);
  return this;
}

oSelect.prototype.db = function (db, name, updateOn = 'change') {
  if (!isValidInputEventName(updateOn)) {
    updateOn = 'change';
  }

  if (this.dbSet) return this;

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

oSelect.prototype.dbIndex = function (index) {
  this.index = index;
  return this;
}

oSelect.prototype.disabled = function (disabled) {
  if (disabled !== 'true' && disabled !== 'false' && typeof disabled !== 'boolean') return this;

  this.element.attr({
    disabled
  });
  return this;
}

oSelect.prototype.event = function (eventObject) {
  if (typeof eventObject !== 'object') return this;

  this.element.event(eventObject);
  return this;
}

oSelect.prototype.events = function (events) {
  if (!Array.isArray(events)) return this;

  this.element.event(events);
  return this;
}

oSelect.prototype.options = function (...options) {
  if (!options.length)
    return this;

  this.optionsList = options.length === 1 && Array.isArray(options[0])
    ? options[0]
    : options;

  if (this.input.options && this.input.options.length) {
    while (this.input.options.length)
      this.input.options.remove(0);
  }

  addOptions.call(this);

  return this;
}

oSelect.prototype.getValue = function () {
  return this.input.value;
}

oSelect.prototype.getSelectedOption = function () {
  const selectedOption = this.optionsList;
}

oSelect.prototype.id = function (id) {
  if (typeof id === 'undefined' || typeof id === 'object') return this;

  this.element.id(id);
  return this;
}

oSelect.prototype.init = function () {
  return this.element.init();
}

oSelect.prototype.name = function (name) {
  if (typeof name === 'string') this.element.attr({ name });

  return this;
}

oSelect.prototype.onChange = function (event) {
  if (typeof event !== 'function') return this;

  this.element.event({
    name: 'change',
    fn: e => event(e, this)
  });
  return this;
}

oSelect.prototype.required = function (required) {
  if (required !== 'true' && required !== 'false' && typeof required !== 'boolean') return this;

  this.element.attr({
    required
  });
  return this;
}

function addOptions() {
  this.element.add(
    this.optionsList.map(({ value, text, ...attributes }) => {
      return o('option')
        .attr({
          value,
          ...attributes
        })
        .text(text);
    })
  );
}
