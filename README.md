# OrantuganJS - oInlineComponents
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

Each component reprents one interactive element from html and has own set of methods.

# oInput
## .attr()
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
## .classList()
```js
.classList(classList :Array<String> | String)
```
Add list of css classes names by HTML style (separated by space character).

```js
.classList('cssClass1 cssClass2');
```

## .db()
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

## .dbIndex()
```js
.dbIndex(index :Number)
```
Index of db when db is an Array.

## .disabled()
```js
.disabled(disabled :Boolean)
```
Disabled attribute value.

## .event() and .events()
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

## .formatter()
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

## .id()
```ts
.id(id :String|Number)
```
Id attribute value.

## .init()
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
## .maxLength()
```ts
.maxLength(maxLength :Number)
```
MaxLength attribute value.

## .name()
```ts
.name(name :String)
```
Name attribute value.

