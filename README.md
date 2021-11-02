# OrantuganJS - oInlineComponents
### Set of small components which can be use in ojs-core's library syntax. Compatible also with store and oStore

### Quick start
```js
import oInput from 'ojs-inline-components';
...
const oInputInstance = oInput('number');
const oInputHtml = oInputInstance.init(); 
```
To use oInlineComponents you need to use function constructor (ex.oInput(...)). <br/>
Just like in ojs-core - init method returns html output from your instance<br/>
First and only argument (*typeOrConfig*) as name says can be *type: string* (oButton and oInput) or *initConfig: object* with configuration.<br/>
Default *type* value: **"text"**
### InitConfig usage
```js
...
const oInputInstance = oInput({
    name: 'exampleName',
    type: 'text',
    id: 'exampleId',
});

console.log(oInputInstance.init()); // <input type="text" name="exampleName" id="exampleId" />
...
```

Each component reprents one interactive element from html and has own set of methods.

## oInput
### *Inline input - methods.*

### .attr(**attrs** :Array<Object> | Object)

You can add within this method any argument you want.<br/>
**Examples:**<br/>
```js
oInputInstance.attr([
    {
        name: 'type',
        val: 'number'
    }
]);
```
```js
oInputInstance.attr({
    type: 'number',
    name: 'exampleName'
});
```

### .checked(**checked** :boolean)
Checked attribute: true or false.

### .classList(**classList** :Array<string> | string)
You can pass here CSS class names.
```js
oInput().classList('cssClass1 cssClass2');
```

### .db()

### .dbIndex()

### .disabled(**disabled** :boolean)
Set disabled attribute value

### .event(**eventObject** :object<eventType>)
### .events(**events** :Array<object\<eventType\>>)
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

oInput().event([{
  name: 'change',
  fn: () => someFn()
}]);
```
Set all available event listeners.

### .formatter(**formatterFunction** :function, **formatOnEvent** :string\<validEvent\>)
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
