/**
 * Project: MicroLibs
 * File Name: notify.microlib.js
 * Author: Thomas Erbe
 * License: MIT
 * Version: 1.0.0
 */

(function(w, d) {
	"use strict";

	var Micro = w.Micro || {};

	/**
	 * The main notify function. Calling this will create a new notification.
	 * @param  {string}  title      The title of the notification, this will be displayed in bold before the message
	 * @param  {string}  message    The message of the notification, this will be displayed after the title
	 * @param  {string}  [type]     The stype of notification either timed or dismissable
	 * @param  {number}  [timeShow] The length of time to show the notification for. Default to 5 seconds.
	 * @param  {string}  [position] The position of the notification, either top or bottom.
	 * @param  {boolean} [autoShow] Whether the notification shows straight away or not
	 * @param  {string}  [class]    The optional class to be appended to the notification.
	 */
	Micro.notify = function(title, message, type, timeShow, position, autoShow, className) {
		/**
		 * Title and message are required to return a console error if they
		 * are not provided.
		 */
		if(!title || !message) {
			console.error("[MicroLib Notify] Both the title and message are required to show a notification!");
			return false;
		}

		/**
		 * Set the default value for notification type
		 * @type {string}
		 */
		var type = type || "timed";

		/**
		 * Set the default value for the time the notification is shown
		 * @type {number}
		 */
		var timeShow = timeShow || 5000;

		/**
		 * Set the default value for the notification position
		 * @type {string}
		 */
		var position = position || "top";

		/**
		 * Set the default value for auto showing the notification
		 * @type {Boolean}
		 */
		var autoShow = autoShow || false;

		/**
		 * Set the default class name extension
		 * @type {string}
		 */
		var className = className || "";

		/**
		 * Keep a record of if this notification is visible
		 * @type {Boolean}
		 */
		var visible = false;

		/**
		 * The element we want to manipulate on the page. Created
		 * via the createElement function.
		 */
		var notificationElement = "";

		/**
		 * Create the element ready to be shown. Store it in memory.
		 */
		function createElement() {
			/**
			 * Create the element and set the content and base class.
			 */
			notificationElement = document.createElement("div");
			notificationElement.innerHTML = "<strong>"+ title +"</strong> " + message;
			Micro.addClass("notification", notificationElement);

			/**
			 * Set the class name of the notification if it is specified.
			 */
			if(className) {
				Micro.addClass("notification-" + className, notificationElement);
			}

			/**
			 * Change the position of the element based on the position
			 * specified
			 */
			Micro.addClass(position, notificationElement);

			if(type === "dismissable") {
				var closeBtn = document.createElement("a");
				closeBtn.addEventListener("click", hide, false);
				closeBtn.innerHTML = "[x]";
				notificationElement.appendChild(closeBtn);
			}

			/**
			 * Append the notification to the body.
			 */
			d.body.appendChild(notificationElement);
		}

		/**
		 * Show the notification on the page in the position we specified
		 */
		function show() {
			Micro.addClass("visible", notificationElement);

			/**
			 * If the type of notification is timed, then show it
			 * for the time specified.
			 */
			if(type === "timed") {
				setTimeout(hide, timeShow);
			}

			visible = true;
		}

		/**
		 * Remove the notification from the page.
		 */
		function hide() {
			Micro.removeClass("visible", notificationElement);
			visible = false;
		}

		/**
		 * Now that the script code has been run, create the element ready
		 */
		createElement();

		/**
		 * If the autoShow is true show the notification. Delay showing the notification
		 * by 10ms this will allow a transition to play otherwise it will miss the class
		 * being applied.
		 */
		if(autoShow === true) {
			setTimeout(show, 10);
		}

		/**
		 * Return a notification object, this will provide the ability to
		 * close and show the notifications.
		 */
		return {
			hide: hide,
			show: show,
			isVisible: function() {
				return visible;
			}
		}
	};

	/**
     * Helper function to remove a class from an element.
     * @param  {string} nameClass The name of the class to remove
     * @param  {HTMLElement} element The element to remove the class from
     */
    Micro.removeClass = function(nameClass, element) {
        if(!element || !nameClass) {
            return;
        }

        element.className = element.className.replace( new RegExp('(?:^|\\s)'+nameClass+'(?!\\S)') ,'');
    };

    /**
     * Helper function to add a class to an element
     * @param {string} nameClass The class to add to the element
     * @param {HTMLElement} element   The HTML element to add the class to
     */
    Micro.addClass = function(nameClass, element) {
        if(!element || !nameClass) {
            return;
        }

        element.className += " " + nameClass;
    };

	w.Micro = Micro;
}(window, document));