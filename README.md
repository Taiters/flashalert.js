# _FlashAlert.js_

_A super fun happy jQuery plugin for managing bootstrap flash messages._

## Usage 
### $('foo').flashalert(options [, callback])  

### callback
Type: _Funcion_   
Function to call when alert has gone 

### options
Type: _PlainObject_   
Supports the following options:   

> __level__   
> Type: _String_    
> The alert level to display, matches bootstrap levels (error, success etc)  
> _Default: 'error'_   

> __label__   
> Type: _String_   
> The label for the alert. This is shown in _strong_ tags before the message.   
> _Default: ''_   

> __message__   
> Type: _String_   
> The message to display in the alert.     
> _Default: ''_   

> __timeout__   
> Type: _int_   
> The amount of time to display the alert for in ms. Using 0 means the alert will remain until closed.   
> _Default: 0_   

> __animationOut__   
> Type: _String_   
> The animation to use when closing the alert (after timeout). Examples are (fadeOut, slideUp etc).   
> _Default: 'hide'_   

> __animationIn__   
> Type: _String_   
> The animation to use when displaying the alert. Examples are (fadeIn, slideDown etc).   
> _Default: 'show'_   

> __alertId__   
> Type: _int_   
> The id of the alert. This lets you have multiple alerts with different effects.   
> _Default: 'alert'_  

### $('foo').flashalert('clear', alertId)

This clears the alerts with the _alertId_   

### Code Sample

```javascript
$('#signUpModal .modal-body').flashAlert({
	message: 'Hello!',
	timeout: 5000,
	animationIn:  'fadeIn',
	animationOut: 'fadeOut',
});
```

## License
_The MIT License (MIT)_ 
