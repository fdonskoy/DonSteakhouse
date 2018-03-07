webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _TopImg = __webpack_require__(21);

var _OurStory = __webpack_require__(16);

var _SpecialMenu = __webpack_require__(20);

var _Quote = __webpack_require__(18);

var _Reviews = __webpack_require__(19);

var _PromotionsAndEvents = __webpack_require__(17);

var _Contact = __webpack_require__(13);

var _Footer = __webpack_require__(14);

// const Header = ({state}, {actions}) => {
//   return <h1>something</h1>;
// }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header.Header, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg.TopImg, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory.OurStory, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu.SpecialMenu, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Quote.Quote, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews.Reviews, { state: state, actions: actions }),
    (0, _hyperapp.h)(_PromotionsAndEvents.PromotionsAndEvents, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Contact.Contact, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer.Footer, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = undefined;

var _hyperapp = __webpack_require__(0);

var Contact = exports.Contact = function Contact(_ref, _ref2) {
  var state = _ref.state;
  var actions = _ref2.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Contact" },
    (0, _hyperapp.h)("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.7399040776495!2d-6.261147484122739!3d53.34791197997939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1462581622087",
      width: "600", height: "450", frameborder: "0", style: "border:0", allowfullscreen: true }),
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h6",
        null,
        "Contact us"
      ),
      (0, _hyperapp.h)(
        "h3",
        null,
        "we're here to help"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "contactBox" },
        (0, _hyperapp.h)(
          "div",
          { className: "left" },
          (0, _hyperapp.h)(
            "div",
            { className: "city" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "New York City,"
            ),
            " New York"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "address" },
            "167 E 4th St #2, New York, NY 10003"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "email" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Email: "
            ),
            "fildonskoy@gmail.com"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "right" },
          "Call directly:",
          (0, _hyperapp.h)(
            "div",
            { className: "phoneNumber" },
            "+1(201)-555-5555"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "serviceInfo" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)("br", null),
            "Weekend Catering: Bookings from 12pm - 3pm"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "serviceInfo" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)("br", null),
            "Daily Catering: Bookings from 6pm - 8pm"
          )
        )
      )
    )
  );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = undefined;

var _hyperapp = __webpack_require__(0);

var Footer = exports.Footer = function Footer(_ref, _ref2) {
  var state = _ref.state;
  var actions = _ref2.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Footer" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)("div", { className: "logo" }),
      (0, _hyperapp.h)(
        "div",
        { className: "links" },
        (0, _hyperapp.h)(
          "li",
          null,
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          "Catering"
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          "Contact"
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          "Reviews"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "social" },
        (0, _hyperapp.h)(
          "div",
          { className: "media" },
          (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "media" },
          (0, _hyperapp.h)("i", { "class": "fab fa-facebook-f" })
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "media" },
          (0, _hyperapp.h)("i", { "class": "fab fa-instagram" })
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "media" },
          (0, _hyperapp.h)("i", { "class": "fas fa-rss" })
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "copyright" },
        "Designed by LoganCee",
        (0, _hyperapp.h)("br", null),
        "Coded by Filip Donskoy"
      )
    )
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _hyperapp = __webpack_require__(0);

//This doesnt work
// export default function Header({state, actions}) {
//   return (
//     <header>anything</header>
//   )
// }

//this does
var Header = exports.Header = function Header(_ref, _ref2) {
  var state = _ref.state;
  var actions = _ref2.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)("div", { className: "logo" }),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Party Platters"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Locations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Rewards"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        )
      )
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OurStory = undefined;

var _hyperapp = __webpack_require__(0);

var OurStory = exports.OurStory = function OurStory(_ref, _ref2) {
  var state = _ref.state;
  var actions = _ref2.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6 first" },
          (0, _hyperapp.h)(
            "h6",
            null,
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "quote" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Chef Extraordinaire"
            ),
            " ",
            (0, _hyperapp.h)(
              "span",
              null,
              "\u25E6"
            ),
            " Fredrick Helsing Von Heisenhoper"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", className: "reserve-btn" },
            "Book A Reservation"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6 second" },
          (0, _hyperapp.h)("img", { src: "https://c.pxhere.com/photos/2b/6f/lamp_chop_meat_cutlet_prepared_restaurant_eating_dinner-714043.jpg!d" })
        )
      )
    )
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PromotionsAndEvents = undefined;

var _hyperapp = __webpack_require__(0);

var PromotionsAndEvents = exports.PromotionsAndEvents = function PromotionsAndEvents(_ref, _ref2) {
  var state = _ref.state;
  var actions = _ref2.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "PromotionsAndEvents" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h6",
        null,
        "our news"
      ),
      (0, _hyperapp.h)(
        "h3",
        null,
        "promotions & events"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "specialContainer" },
        (0, _hyperapp.h)("div", { className: "box image1" }),
        (0, _hyperapp.h)(
          "div",
          { className: "box event" },
          (0, _hyperapp.h)(
            "div",
            { className: "eventTitle" },
            "Beef Sauteed onions - Let's enjoy!"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "divider" },
            "-----------------"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "eventDetails" },
            (0, _hyperapp.h)(
              "div",
              { className: "eventAddress" },
              "49-49 Tortellini Ave, Pastafari, Italy"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "eventTime" },
              "10:00 AM - 11:00 AM"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "eventDate" },
              "March 3rd, 2018"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "box event" },
          (0, _hyperapp.h)(
            "div",
            { className: "eventTitle" },
            "Art photography in foody"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "divider" },
            "-----------------"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "eventDetails" },
            (0, _hyperapp.h)(
              "div",
              { className: "eventAddress" },
              "420 amsterdam ave, amsterdam, netherlands"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "eventTime" },
              "4:20 AM - 4:20 PM"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "eventDate" },
              "April 20th, 2018"
            )
          )
        ),
        (0, _hyperapp.h)("div", { className: "box image2" })
      )
    )
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Quote = undefined;

var _hyperapp = __webpack_require__(0);

var Quote = exports.Quote = function Quote(_ref, _ref2) {
  var state = _ref.state;
  var actions = _ref2.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Quote" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "quoteContainer" },
        (0, _hyperapp.h)(
          "h1",
          { className: "quoteContent" },
          (0, _hyperapp.h)(
            "span",
            { className: "quote" },
            "\u201C"
          ),
          "i love cooking for myself and for my family"
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "quoteAuthor" },
          "- Fil Don -"
        )
      )
    )
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reviews = undefined;

var _hyperapp = __webpack_require__(0);

var Reviews = exports.Reviews = function Reviews(_ref, _ref2) {
  var state = _ref.state;
  var actions = _ref2.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6 second" },
          (0, _hyperapp.h)("img", { src: "http://pngimg.com/uploads/chef/chef_PNG162.png?i=1" })
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6 first" },
          (0, _hyperapp.h)(
            "h6",
            null,
            "Review"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "See what others say about us ;)"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "reviewQuote" },
            "\"Best restaurant that i used to experience!\""
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "quote" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Chef Extraordinaire"
            ),
            " ",
            (0, _hyperapp.h)(
              "span",
              null,
              "\u25E6"
            ),
            " Fredrick Helsing Von Heisenhoper"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "arrow" },
            (0, _hyperapp.h)("a", { href: "#", className: "left" }),
            (0, _hyperapp.h)("a", { href: "#", className: "right" })
          )
        )
      )
    )
  );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecialMenu = undefined;

var _hyperapp = __webpack_require__(0);

var SpecialMenu = exports.SpecialMenu = function SpecialMenu(_ref, _ref2) {
  var state = _ref.state;
  var actions = _ref2.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h6",
        null,
        "special menu"
      ),
      (0, _hyperapp.h)(
        "h3",
        null,
        "Delicious flavours of autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "specialContainer" },
        (0, _hyperapp.h)(
          "div",
          { className: "one special" },
          (0, _hyperapp.h)(
            "div",
            { className: "specialTop" },
            (0, _hyperapp.h)(
              "div",
              { className: "specialPrice" },
              "$30"
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "specialDescription" },
            (0, _hyperapp.h)(
              "div",
              { className: "dish" },
              "Fillet Mignon"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "ingredients" },
              "Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "two special" },
          (0, _hyperapp.h)(
            "div",
            { className: "specialTop" },
            (0, _hyperapp.h)(
              "div",
              { className: "specialPrice" },
              "$30"
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "specialDescription" },
            (0, _hyperapp.h)(
              "div",
              { className: "dish" },
              "Fillet Mignon"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "ingredients" },
              "Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "three special" },
          (0, _hyperapp.h)(
            "div",
            { className: "specialTop" },
            (0, _hyperapp.h)(
              "div",
              { className: "specialPrice" },
              "$30"
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "specialDescription" },
            (0, _hyperapp.h)(
              "div",
              { className: "dish" },
              "Fillet Mignon"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "ingredients" },
              "Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine"
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "menuLink" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "View full menu"
        )
      )
    )
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopImg = undefined;

var _hyperapp = __webpack_require__(0);

var TopImg = exports.TopImg = function TopImg(_ref, _ref2) {
  var state = _ref.state;
  var actions = _ref2.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          "The Don Steakhouse"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "contact-info" },
        (0, _hyperapp.h)(
          "div",
          null,
          "Call for reservations"
        ),
        (0, _hyperapp.h)(
          "h2",
          null,
          "(555) 555-5555"
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "hours" },
          "Opening Hours: ",
          (0, _hyperapp.h)(
            "strong",
            null,
            "Mon-Fri:"
          ),
          " 9am - 9pm ",
          (0, _hyperapp.h)(
            "strong",
            null,
            "Weekend:"
          ),
          " 9am - 11:00pm"
        )
      )
    )
  );
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[22]);