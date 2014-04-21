#$viewBag
Enables a controller to `push` and `pull` data in and out of its template. While pushing, `$viewBag` will only care about the values within the object passed.

##Using it
```javascript
stik.controller("MessageCtrl", "Revelation", function($viewBag){
  // the push method receives an object
  // with the values that it will use
  $viewBag.push({
    senderName: "Darth Vader",
    receiverName: "Luke Skywalker",
    message: "I'm your father!",
    customNOOO: "NOOOOOO!!!"
  });

  // use pull to get bound data out of the template
  var dataset = $viewBag.pull();
  // this will return an object with the following structure
  // {
  //   senderName: "Darth Vader",
  //   receiverName: "Luke Skywalker",
  //   message: "I'm your father!",
  //   customNOOO: "NOOOOOO!!!"
  // }
});
```
```html
<div data-controller="MessageCtrl" data-action="Revelation">
  <span data-key="senderName"></span>
  <span data-key="receiverName"></span>
  <span data-key="message"></span>
  <input data-key="customNOOO"/>
</div>
```
