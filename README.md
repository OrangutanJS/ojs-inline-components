# OrantuganJS - oInlineComponents
## Install using npm:
```bash
npm i -D ojs-inline-components
```
### Set of small components which can be use in ojs-core's library syntax. Compatible also with store and oStore

### Quick start
```js
import { oInput } from 'ojs-inline-components';
...
const oInputInstance = oInput('number').name('exampleName').id('exampleId');
const oInputHtml = oInputInstance.init(); // <input type="text" name="exampleName" id="exampleId" />
```
To use oInlineComponents you need to use function constructor (ex.oInput(...)). <br/>
Just like in ojs-core - init method returns html output from your instance<br/>
First and only argument (*typeOrConfig*) as name says can be *type: string* (oButton and oInput) or *initConfig: object* with configuration.<br/>
Default *type* value: **"text"**
### InitConfig usage
```js
const oInputInstance = oInput({
    name: 'exampleName',
    type: 'text',
    id: 'exampleId',
});

console.log(oInputInstance.init()); // <input type="text" name="exampleName" id="exampleId" />
```

Each component represents one interactive element from html and has own set of methods.
### [#go to oInput](#oInput)
### [#go to oButton](#oButton)
### [#go to oTextarea](#oTextarea)
# oInput <a name="oInput"></a>
## .attr() <a name="attr"></a>
```js
.attr(attrs :Array<attributeType> | Object)
```
You can add within this method any argument you want.<br/>
```ts
type attributeType = {
  name :String,
  val :any
};
```
### *Examples:*<br/>
```js
oInputInstance.attr([
    {
        name: 'type',
        val: 'number'
    }
]);
// or
oInputInstance.attr({
  attributeName: attributeValue
});
```

## .checked()
```js
.checked(checked :Boolean)
```
Checked attribute value.
## .classList() <a name="classList"></a>
```js
.classList(classList :Array<String> | String)
```
Add list of css classes names by HTML style (separated by space character).

```js
.classList('cssClass1 cssClass2');
```

## .db() <a name="db"></a>
```js
.db(db :Object|oStore, name :String, updateOn="change" :String)
```
- db - Object or oStore instance to update value
- name - name of key in *db*
- updateOn - name of the event after which *db* is updated

```js
const exampleDb = {
  exampleKey: 'exampleValue',
};
(...)
oInput().db(exampleDb, 'exampleKey', 'keyUp');
```

## .dbIndex() <a name="dbIndex"></a>
```js
.dbIndex(index :Number)
```
Index of db when db is an Array.

## .disabled() <a name="disabled"></a>
```js
.disabled(disabled :Boolean)
```
Disabled attribute value.

## .event() and .events() <a name="events"></a>
```ts
.event(eventObject :eventType)
.events(events :Array<eventType>)
```
Set all available event listeners.
```ts
type eventType = {
  name :string,
  fn :() => any
}
```
```js
oInput().event({
  name: 'change',
  fn: () => someFn()
});

oInput().events([{
  name: 'change',
  fn: () => someFn()
}]);
```

## .getValue()
Returns value of input.
## .formatter() <a name="formatter"></a>
```ts
.formatter(formatterFunction :Function, formatOnEvent :String)
```
List of valid events: 
 - change
 - input
 - keyup
 - keydown
 - focus
 - focusin
 - focusout
 - click

```js
oInput().formatter(
  clearWhiteSpaces, // function that clear whitespaces from string
  'keyup'
);
```
Result of example above: all whitespaces would be removed from string on each keyup event trigger.

## .id() <a name="id"></a>
```ts
.id(id :String|Number)
```
Id attribute value.

## .init() <a name="init"></a>
```js
oInput().init();
```
Returns HTML result value of whole oInlineComponent instance.

## .max()
```ts
.max(max :any)
```
Max attribute value.

## .min()
```ts
.min(min :any)
```
Min attribute value.
## .maxLength() <a name="maxLength"></a>
```ts
.maxLength(maxLength :Number)
```
MaxLength attribute value.

## .name() <a name="name"></a>
```ts
.name(name :String)
```
Name attribute value.

## .onChange() 
```ts
.onChange(event :Function)
```
Add event listener for *change* event.
## .onFocus() .onFocusOut() .onKeyUp() .onKeyDown()
Just like onChange method

## .pattern()
```ts
.pattern(pattern :String)
```
Pattern attribute value.

## .placeholder() <a name="placeholder"></a>
```ts
.placeholder(placeholder :any)
```
Set placeholder.

## .readonly() <a name="readonly"></a>
```ts
.readonly(readonly :Boolean)
```
Readonly attribute value.

## .required() <a name="required"></a>
```ts
.required(required :Boolean)
```
Required attribute value.

## .step()
```ts
.step(step :Number | 'any')
```
Step attribute value;

## .type()
```ts
.type(type :String)
```
Type attribute value.

## .value() <a name="value"></a>
```ts
.value(value :any)
```
Value of the input.

# oButton <a name="oButton"></a>

## .attr() - [link](#attr)
## .classList() - [link](#classList)
## .disabled() - - [link](#disabled)
## .event() .events() - [link](#events)
## .id() - [link](#id)
## .init() - [link](#init)
## .name() - [link](#name)
## .onClick() .onSubmit()
```js
.onClick(event :Function)
// and
.onSubmit(event :Function)
```
Adds event listener to *click* or *submit* event
```js
oButton().onClick(() => doSomething());
```
## .text()
```ts
.text(text :String|Number)
```
Add text content to Button.

## .type()
```ts
.type(type :'button' | 'submit' | 'reset')
```
Type attribute value.

## .value() 
Equivalent of *.text()* method

# oTextarea <a name="oTextarea"></a>
## .attr() - [link](#attr)
## .classList() - [link](#classList)
## .cols()
```ts
.cols(cols :Number)
```
Cols attribute value.

## .db() - - [link](#db)
## .dbIndex() - - [link](#dbIndex)
## .disabled() - - [link](#disabled)
## .event() .events() - [link](#events)
## .formatter() - [link](#formatter)
## .getValue()
Returns text content of the textarea.
## .id() - [link](#id)
## .init() - [link](#init)
## .maxLength() - [link](#maxLength)
## .name() - [link](#name)
## .onChange() .onFocus() .onFocusOut() .onKeyUp() .onKeyDown()
Adds event listeners to specific events.

## .placeholder() - [link](#placeholder)
## .readonly() - [link](#readonly)
## .required() - [link](#required)
## .rows()
```ts
.rows(rows :Number)
```
Rows attribute value.
## .value() - [link](#value)
## .wrap()
```ts
.wrap(wrap='soft' :'soft'|'hard')
```
Wrap attribute value.
