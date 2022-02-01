var $3rRbg$ojscore = require("ojs-core");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "oInput", () => $00ed2946dcf063d5$export$2e2bcd8739ae039);
$parcel$export(module.exports, "oTextarea", () => $788f005f10a00e88$export$2e2bcd8739ae039);
$parcel$export(module.exports, "oButton", () => $267b5b1791e5f29f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "oSelect", () => $d66b066766632ac6$export$2e2bcd8739ae039);

const $e275b60237f8580f$var$VALID_EVENTS = [
    'change',
    'input',
    'keyup',
    'keydown',
    'focus',
    'focusin',
    'focusout',
    'click'
];
function $e275b60237f8580f$export$2e2bcd8739ae039(eventName) {
    if (!eventName || typeof eventName !== 'string') return false;
    const eventNameSanitized = eventName.toLowerCase().trim();
    return $e275b60237f8580f$var$VALID_EVENTS.includes(eventNameSanitized);
}


function $2e2c65d8ba8194df$export$2e2bcd8739ae039(db, name, index, value) {
    value = value.trim();
    if (Array.isArray(db[name])) {
        if (!index && index !== 0) return;
        db[index][name] = value;
    } else db[name] = value;
}





function $267b5b1791e5f29f$export$2e2bcd8739ae039(typeOrConfig) {
    if (!(this instanceof $267b5b1791e5f29f$export$2e2bcd8739ae039)) return new $267b5b1791e5f29f$export$2e2bcd8739ae039(typeOrConfig);
    this.element = ($parcel$interopDefault($3rRbg$ojscore))('button');
    this.button = this.element.element;
    if (typeof typeOrConfig === 'string') this.type(typeOrConfig);
    else this.type('button');
    if (typeof typeOrConfig === 'object') $e38166f84525fcd0$export$2e2bcd8739ae039(typeOrConfig, this);
} //!NOTE: if you add new method add it also to utils/initialConfigService -> METHODS_CONFIG
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.add = function(...children) {
    this.element.add(...children);
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.attr = function(attrs) {
    this.element.attr(attrs);
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.classList = function(classList) {
    this.element.classList(classList);
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.disabled = function(disabled) {
    if (disabled !== 'true' && disabled !== 'false' && typeof disabled !== 'boolean') return this;
    this.element.attr({
        disabled: disabled
    });
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.event = function(eventObject) {
    if (typeof eventObject !== 'object') return this;
    this.element.event(eventObject);
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.events = function(events) {
    if (!Array.isArray(events)) return this;
    this.element.event(events);
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.id = function(id) {
    if (typeof id === 'undefined' || typeof id === 'object') return this;
    this.element.id(id);
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.init = function() {
    return this.element.init();
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.name = function(name) {
    if (typeof name !== 'string') return this;
    this.element.attr({
        name: name
    });
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.onClick = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'click',
        fn: (e)=>event(e, this)
    });
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.onSubmit = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'submit',
        fn: (e)=>event(e, this)
    });
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.text = function(text) {
    if (typeof text === 'undefined' || typeof text === 'object') return this;
    this.element.text(text);
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.type = function(type) {
    if (![
        'button',
        'submit',
        'reset'
    ].includes(type)) return this;
    this.element.attr({
        type: type
    });
    return this;
};
$267b5b1791e5f29f$export$2e2bcd8739ae039.prototype.value = function(value) {
    if (typeof value === 'undefined' || typeof value === 'object') return this;
    this.element.text(value);
    return this;
};






function $788f005f10a00e88$export$2e2bcd8739ae039(config) {
    if (!(this instanceof $788f005f10a00e88$export$2e2bcd8739ae039)) return new $788f005f10a00e88$export$2e2bcd8739ae039(config);
    this.element = ($parcel$interopDefault($3rRbg$ojscore))('textarea');
    this.textarea = this.element.element;
    this.dbSet = false;
    this.dbObject = null;
    this.dbKey = null;
    this.index = null;
    if (typeof config === 'object') $e38166f84525fcd0$export$2e2bcd8739ae039(config, this);
} //!NOTE: if you add new method add it also to utils/initialConfigService -> METHODS_CONFIG
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.attr = function(attrs) {
    this.element.attr(attrs);
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.classList = function(classList) {
    this.element.classList(classList);
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.cols = function(cols) {
    if (isNaN(cols)) return this;
    this.element.attr({
        cols: cols
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.db = function(db, name, updateOn = 'change') {
    if (!$e275b60237f8580f$export$2e2bcd8739ae039(updateOn)) updateOn = 'change';
    if (this.dbSet) return this;
    this.dbSet = true;
    this.dbObject = db;
    this.dbKey = name;
    this.element.event({
        name: updateOn,
        fn: (e)=>{
            $2e2c65d8ba8194df$export$2e2bcd8739ae039(this.dbObject, this.dbKey, this.index, e.target.value);
        }
    });
    this.textarea.value = this.index ? db[this.index][name] : db[name];
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.dbIndex = function(index) {
    this.index = index;
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.disabled = function(disabled) {
    if (disabled !== 'true' && disabled !== 'false' && typeof disabled !== 'boolean') return this;
    this.element.attr({
        disabled: disabled
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.event = function(eventObject) {
    if (typeof eventObject !== 'object') return this;
    this.element.event(eventObject);
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.events = function(events) {
    if (!Array.isArray(events)) return this;
    this.element.event(events);
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.formatter = function(formatterFunction, formatOnEvent) {
    if (typeof formatterFunction !== 'function') return this;
    const formatOnEventValidated = $e275b60237f8580f$export$2e2bcd8739ae039(formatOnEvent) ? formatOnEvent : 'keyup';
    this.element.event({
        name: formatOnEventValidated,
        fn: (e)=>{
            const formattedValue = formatterFunction(e, this);
            this.textarea.value = formattedValue;
            if (this.dbSet) $2e2c65d8ba8194df$export$2e2bcd8739ae039(this.dbObject, this.dbKey, this.index, formattedValue);
        }
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.getValue = function() {
    return this.textarea.value;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.id = function(id) {
    if (typeof id === 'undefined' || typeof id === 'object') return this;
    this.element.id(id);
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.init = function() {
    return this.element.init();
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.maxLength = function(maxLength) {
    if (isNaN(maxLength)) return this;
    this.element.attr({
        maxLength: maxLength
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.name = function(name) {
    if (typeof name !== 'string') return this;
    this.element.attr({
        name: name
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.onChange = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'change',
        fn: (e)=>event(e, this)
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.onFocus = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'focusin',
        fn: (e)=>event(e, this)
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.onFocusOut = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'focusout',
        fn: (e)=>event(e, this)
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.onKeyUp = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'keyup',
        fn: (e)=>event(e, this)
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.onKeyDown = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'keydown',
        fn: (e)=>event(e, this)
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.placeholder = function(placeholder) {
    this.element.attr({
        placeholder: placeholder
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.readonly = function(readonly) {
    if (readonly !== 'true' && readonly !== 'false' && typeof readonly !== 'boolean') return this;
    this.element.attr({
        readonly: readonly
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.required = function(required) {
    if (required !== 'true' && required !== 'false' && typeof required !== 'boolean') return this;
    this.element.attr({
        required: required
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.rows = function(rows) {
    if (isNaN(rows)) return this;
    this.element.attr({
        rows: rows
    });
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.value = function(value) {
    this.element.setValue(value);
    return this;
};
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.wrap = function(wrap = 'soft') {
    if (typeof wrap !== 'string') return this;
    const wrapFormatted = wrap.toLowerCase();
    if (wrapFormatted !== 'soft' && wrapFormatted !== 'hard') return this;
    this.element.attr({
        wrap: wrapFormatted
    });
    return this;
}; //methods ideas
$788f005f10a00e88$export$2e2bcd8739ae039.prototype.validator = ()=>{
}; //ideas


function $e38166f84525fcd0$export$2e2bcd8739ae039(config, componentInstance) {
    if (typeof config !== 'object' && config !== null) return false;
    if (!(componentInstance instanceof $00ed2946dcf063d5$export$2e2bcd8739ae039) && !(componentInstance instanceof $267b5b1791e5f29f$export$2e2bcd8739ae039) && !(componentInstance instanceof $788f005f10a00e88$export$2e2bcd8739ae039)) return false;
    Object.entries(config).forEach((initialConfigEntry)=>{
        const [initialConfigEntryKey, initialConfigEntryValue] = initialConfigEntry;
        const foundInMethodsConfig = $e38166f84525fcd0$var$METHODS_CONFIG.find((method)=>method.name === initialConfigEntryKey
        );
        if (!foundInMethodsConfig) return;
        const protoMethod = componentInstance.__proto__[initialConfigEntryKey];
        if (!protoMethod || typeof protoMethod !== 'function') return;
        if (foundInMethodsConfig.arguments && Array.isArray(foundInMethodsConfig.arguments)) {
            const sortedArguments = $e38166f84525fcd0$var$getSortedArguments(initialConfigEntryValue, foundInMethodsConfig.arguments);
            sortedArguments.length && protoMethod.call(componentInstance, ...sortedArguments);
            return;
        }
        protoMethod.call(componentInstance, initialConfigEntryValue);
    });
}
function $e38166f84525fcd0$var$getSortedArguments(argumentsObject, methodConfigArguments) {
    const sortedArguments = [];
    for (const argumentName of methodConfigArguments){
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
const $e38166f84525fcd0$var$METHODS_CONFIG = [
    {
        name: 'attr'
    },
    {
        name: 'checked'
    },
    {
        name: 'classList'
    },
    {
        name: 'cols'
    },
    {
        name: 'db',
        arguments: [
            'db',
            'name',
            '?updateOn'
        ]
    },
    {
        name: 'dbIndex'
    },
    {
        name: 'disabled'
    },
    {
        name: 'event'
    },
    {
        name: 'events'
    },
    {
        name: 'formatter',
        arguments: [
            'formatterFunction',
            '?formatOnEvent'
        ]
    },
    {
        name: 'id'
    },
    {
        name: 'max'
    },
    {
        name: 'maxLength'
    },
    {
        name: 'min'
    },
    {
        name: 'name'
    },
    {
        name: 'onChange'
    },
    {
        name: 'onClick'
    },
    {
        name: 'onFocus'
    },
    {
        name: 'onFocusOut'
    },
    {
        name: 'onKeyUp'
    },
    {
        name: 'onKeyDown'
    },
    {
        name: 'onSubmit'
    },
    {
        name: 'pattern'
    },
    {
        name: 'placeholder'
    },
    {
        name: 'readonly'
    },
    {
        name: 'required'
    },
    {
        name: 'rows'
    },
    {
        name: 'step'
    },
    {
        name: 'text'
    },
    {
        name: 'type'
    },
    {
        name: 'value'
    },
    {
        name: 'wrap'
    }
];


function $00ed2946dcf063d5$export$2e2bcd8739ae039(typeOrConfig) {
    if (!(this instanceof $00ed2946dcf063d5$export$2e2bcd8739ae039)) return new $00ed2946dcf063d5$export$2e2bcd8739ae039(typeOrConfig);
    this.element = ($parcel$interopDefault($3rRbg$ojscore))('input');
    this.input = this.element.element;
    this.dbSet = false;
    this.dbObject = null;
    this.dbKey = null;
    this.index = null;
    if (typeof typeOrConfig === 'string') this.type(typeOrConfig);
     //TODO: initConfigService
    if (typeof typeOrConfig === 'object') $e38166f84525fcd0$export$2e2bcd8739ae039(typeOrConfig, this);
} //!NOTE: if you add new method add it also to utils/initialConfigService -> METHODS_CONFIG
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.attr = function(attrs) {
    this.element.attr(attrs);
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.checked = function(checked) {
    if (checked !== 'true' && checked !== 'false' && typeof checked !== "boolean") return this;
    this.element.attr({
        checked: checked
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.classList = function(classList) {
    this.element.classList(classList);
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.db = function(db, name, updateOn = 'change') {
    if (!$e275b60237f8580f$export$2e2bcd8739ae039(updateOn)) updateOn = 'change';
    if (this.dbSet) return this;
    this.dbSet = true;
    this.dbObject = db;
    this.dbKey = name;
    this.element.event({
        name: updateOn,
        fn: (e)=>{
            $2e2c65d8ba8194df$export$2e2bcd8739ae039(this.dbObject, this.dbKey, this.index, e.target.value);
        }
    });
    this.input.value = this.index ? db[this.index][name] : db[name];
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.dbIndex = function(index) {
    this.index = index;
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.disabled = function(disabled) {
    if (disabled !== 'true' && disabled !== 'false' && typeof disabled !== 'boolean') return this;
    this.element.attr({
        disabled: disabled
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.event = function(eventObject) {
    if (typeof eventObject !== 'object') return this;
    this.element.event(eventObject);
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.events = function(events) {
    if (!Array.isArray(events)) return this;
    this.element.event(events);
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.formatter = function(formatterFunction, formatOnEvent) {
    if (typeof formatterFunction !== 'function') return this;
    const formatOnEventValidated = $e275b60237f8580f$export$2e2bcd8739ae039(formatOnEvent) ? formatOnEvent : 'keyup';
    this.element.event({
        name: formatOnEventValidated,
        fn: (e)=>{
            const formattedValue = formatterFunction(e, this);
            this.textarea.value = formattedValue;
            if (this.dbSet) $2e2c65d8ba8194df$export$2e2bcd8739ae039(this.dbObject, this.dbKey, this.index, formattedValue);
        }
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.getValue = function() {
    return this.input.value;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.id = function(id) {
    if (typeof id === 'undefined' || typeof id === 'object') return this;
    this.element.id(id);
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.init = function() {
    return this.element.init();
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.max = function(max) {
    this.element.attr({
        max: max
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.maxLength = function(maxLength) {
    if (isNaN(maxLength)) return this;
    this.element.attr({
        maxLength: maxLength
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.min = function(min) {
    this.element.attr({
        min: min
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.name = function(name) {
    if (typeof name !== 'string') return this;
    this.element.attr({
        name: name
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.onChange = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'change',
        fn: (e)=>event(e, this)
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.onFocus = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'focusin',
        fn: (e)=>event(e, this)
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.onFocusOut = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'focusout',
        fn: (e)=>event(e, this)
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.onKeyUp = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'keyup',
        fn: (e)=>event(e, this)
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.onKeyDown = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'keydown',
        fn: (e)=>event(e, this)
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.pattern = function(pattern) {
    if (typeof pattern !== 'string') return this;
    this.element.attr({
        pattern: pattern
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.placeholder = function(placeholder) {
    this.element.attr({
        placeholder: placeholder
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.readonly = function(readonly) {
    if (readonly !== 'true' && readonly !== 'false' && typeof readonly !== 'boolean') return this;
    this.element.attr({
        readonly: readonly
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.required = function(required) {
    if (required !== 'true' && required !== 'false' && typeof required !== 'boolean') return this;
    this.element.attr({
        required: required
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.step = function(step) {
    if (step !== 'any' && isNaN(step)) return this;
    this.element.attr({
        step: step
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.type = function(type) {
    if (typeof type !== 'string') return this;
    this.element.attr({
        type: type
    });
    return this;
};
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.value = function(value) {
    this.element.setValue(value);
    return this;
}; //methods ideas
$00ed2946dcf063d5$export$2e2bcd8739ae039.prototype.validator = ()=>{
}; //ideas







function $d66b066766632ac6$export$2e2bcd8739ae039(config) {
    if (!(this instanceof $d66b066766632ac6$export$2e2bcd8739ae039)) return new $d66b066766632ac6$export$2e2bcd8739ae039(config);
    this.element = ($parcel$interopDefault($3rRbg$ojscore))('select');
    this.input = this.element.element;
    this.dbSet = false;
    this.dbObject = null;
    this.dbKey = null;
    this.index = null;
    this.optionsList = [];
    if (typeof config === 'object') initialConfigService(config, this);
}
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.attr = function(attrs) {
    this.element.attr(attrs);
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.classList = function(classList) {
    this.element.classList(classList);
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.db = function(db, name, updateOn = 'change') {
    if (!$e275b60237f8580f$export$2e2bcd8739ae039(updateOn)) updateOn = 'change';
    if (this.dbSet) return this;
    this.dbSet = true;
    this.dbObject = db;
    this.dbKey = name;
    this.element.event({
        name: updateOn,
        fn: (e)=>{
            $2e2c65d8ba8194df$export$2e2bcd8739ae039(this.dbObject, this.dbKey, this.index, e.target.value);
        }
    });
    this.input.value = this.index ? db[this.index][name] : db[name];
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.dbIndex = function(index) {
    this.index = index;
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.disabled = function(disabled) {
    if (disabled !== 'true' && disabled !== 'false' && typeof disabled !== 'boolean') return this;
    this.element.attr({
        disabled: disabled
    });
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.event = function(eventObject) {
    if (typeof eventObject !== 'object') return this;
    this.element.event(eventObject);
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.events = function(events) {
    if (!Array.isArray(events)) return this;
    this.element.event(events);
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.options = function(...options) {
    if (!options.length) return this;
    this.optionsList = options.length === 1 && Array.isArray(options[0]) ? options[0] : options;
    if (this.input.options && this.input.options.length) while(this.input.options.length)this.input.options.remove(0);
    $d66b066766632ac6$var$addOptions.call(this);
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.getValue = function() {
    return this.input.value;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.getSelectedOption = function() {
    const selectedOption = this.optionsList;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.id = function(id) {
    if (typeof id === 'undefined' || typeof id === 'object') return this;
    this.element.id(id);
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.init = function() {
    return this.element.init();
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.name = function(name) {
    if (typeof name === 'string') this.element.attr({
        name: name
    });
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.onChange = function(event) {
    if (typeof event !== 'function') return this;
    this.element.event({
        name: 'change',
        fn: (e)=>event(e, this)
    });
    return this;
};
$d66b066766632ac6$export$2e2bcd8739ae039.prototype.required = function(required) {
    if (required !== 'true' && required !== 'false' && typeof required !== 'boolean') return this;
    this.element.attr({
        required: required
    });
    return this;
};
function $d66b066766632ac6$var$addOptions() {
    this.element.add(this.optionsList.map(({ value: value , text: text , ...attributes })=>{
        return ($parcel$interopDefault($3rRbg$ojscore))('option').attr({
            value: value,
            ...attributes
        }).text(text);
    }));
}




//# sourceMappingURL=index.js.map
