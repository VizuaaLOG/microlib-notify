# Notify
Notify is part of the MicroLib libaray collection created by Thomas Erbe. Notify allows you to easily create notifications on your page. It makes no assumptions to the CSS you use, and allows you to assign classes as states to each notification.

If you have any issues regarding a MicroLib library then please use the issue reporter on that library to report the issue. The same thing applies if you have a feature request.

## Installation
**Option 1** Install via Bower
```
bower install microlib-notify
```
**Option 2** Install manually
Include ```notify.microlib-latest.js``` or ```notify.microlib-x.x.x.min.js``` before the closing body tag.

## Usage
Using the MicroLib-Notify library is simple. Call the ```Micro.notify()``` function passing in the options object with a minimum of title and message.

To show a simple notification you can use the following code
```javascript
Micro.notify({
	title: "Test notification!",
	message: "This is the best notification evr!"
});
```

The above code will show a timed notification at the top of the screen. After 5 seconds it will disappear.

The library makes no assumption as to what you want it to look like. The rendered HTML has no CSS used. You are free to use the CSS included in the test directory.

## Feature Requests
If you have any features you would like to see in this library then please leave an issue with your idea and I'll look into it and see if I think it should be added.

## Issues
Any issues you have please also post in the issues section, myself or other contributors can then look into the issue and release a fix for it.

## Contributing
If you would like to contribute to this project then please fork the repository, make your changes and then publish a pull request. You could also ask other people in the issues section first. Please make your the added features pass the ```npm run lint``` task without any issues.