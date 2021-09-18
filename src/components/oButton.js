import o from "ojs-core";
import initialConfigService from "../utils/initialConfigService";

export default function oButton(typeOrConfig) {
  if (!(this instanceof oButton)) {
    return new oButton(typeOrConfig);
  }

  this.element = o('button');
  this.button = this.element.element;

  if (typeof typeOrConfig === 'string') {
    this.type(typeOrConfig);
  } else {
    this.type('button');
  }

  if (typeof typeOrConfig === 'object') {
    initialConfigService(typeOrConfig, this);
  }
}

oButton.prototype.attr = function (attrs) {
  this.element.attr(attrs);
  return this;
}

oButton.prototype.classList = function (classList) {
  this.element.classList(classList);
  return this;
}


oButton.prototype.disabled = function (disabled) {
  if (disabled !== 'true' && disabled !== 'false' && typeof disabled !== 'boolean') return this;

  this.element.attr({
    disabled
  });
  return this;
}

oButton.prototype.event = function (eventObject) {
  if (typeof eventObject !== 'object') return this;

  this.element.event(eventObject);
  return this;
}

oButton.prototype.events = function (events) {
  if (Array.isArray(events)) return this;

  this.element.event(events);
  return this;
}

oButton.prototype.id = function (id) {
  if (typeof id === 'undefined' || typeof id === 'object') return this;

  this.element.id(id);
  return this;
}

oButton.prototype.init = function () {
  return this.element.init();
}

oButton.prototype.name = function (name) {
  if (typeof name !== 'string') return this;
  this.element.attr({
    name
  });
  return this;
}

oButton.prototype.onClick = function (event) {
  if (typeof event !== 'function') return this;

  this.element.event({
    name: 'click',
    fn: e => event(e, this)
  });
  return this;
}

oButton.prototype.onSubmit = function (event) {
  if (typeof event !== 'function') return this;

  this.element.event({
    name: 'submit',
    fn: e => event(e, this)
  });
  return this;
}

oButton.prototype.text = function (text) {
  this.element.text(text);

  return this;
}

oButton.prototype.type = function (type) {
  this.element.attr({
    type
  });

  return this;
}

oButton.prototype.value = function (value) {
  this.element.text(value);

  return this;
}
