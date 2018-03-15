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
function reviewRight(state, actions) {
  return {
    reviewIndex: {
      current: state.reviewIndex.current >= state.reviews.length - 1 ? state.reviews.length - 1 : state.reviewIndex.current + 1
    }
  };
}

function reviewLeft(state, actions) {
  console.log('left');
  return {
    reviewIndex: {
      current: state.reviewIndex.current <= 0 ? 0 : state.reviewIndex.current - 1
    }
  };
}

function showMenu() {
  return { menu: 'active' };
}

function closeMenu(state, actions) {
  return { menu: 'inactive' };
}

function close(state, actions) {
  return { times: !state.times };
}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

var actions = exports.actions = {
  reviewRight: reviewRight,
  reviewLeft: reviewLeft,
  intro: intro,
  showMenu: showMenu,
  closeMenu: closeMenu,
  close: close
};

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

var _TopImg = __webpack_require__(22);

var _OurStory = __webpack_require__(16);

var _SpecialMenu = __webpack_require__(21);

var _Quote = __webpack_require__(18);

var _Reviews = __webpack_require__(20);

var _PromotionsAndEvents = __webpack_require__(17);

var _Contact = __webpack_require__(13);

var _Footer = __webpack_require__(14);

var _Reservations = __webpack_require__(19);

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
    (0, _hyperapp.h)(_Footer.Footer, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reservations.Reservations, { state: state, actions: actions })
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
var companyInfo = {
  title: 'the don steakhouse',
  phone: '(555) 555-5555',
  address: {
    state: 'New York',
    city: 'New York City',
    address: '167 E 4th St #2, New York, NY 10003'
  },
  email: 'fildonskoy@gmail.com'
};

var specialMenu = [{
  title: 'Fillet Mignon',
  description: 'Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine',
  price: '$30'
}, {
  title: 'Beef Cutlet',
  description: 'Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine',
  price: '$20'
}, {
  title: 'Party Platter',
  description: 'Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine',
  price: '$50'
}];

var reviews = [{
  quote: "Best restaurant that i used to experience!",
  body: "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.",
  authorTitle: "Chef Extraordinaire",
  author: "Fredrick Helsing Von Heisenhoper"
}, {
  quote: "Unlike any other!",
  body: "Unicorn banjo woke knausgaard af, viral plaid cold-pressed forage. Air plant cornhole man bun, squid tilde disrupt dreamcatcher. Pickled drinking vinegar polaroid selfies intelligentsia brooklyn meh farm-to-table kitsch glossier. Typewriter try-hard bushwick, celiac cloud bread ugh bicycle rights viral literally fam air plant man braid hexagon. Craft beer keytar quinoa iPhone swag irony fixie four dollar toast poutine prism.",
  authorTitle: "Executive Producer",
  author: "Dick Wolfe"
}, {
  quote: "Coming back for fifths!",
  body: "Pickled cliche direct trade lyft. Drinking vinegar pabst stumptown organic gluten-free bespoke. Butcher subway tile quinoa air plant aesthetic brooklyn. Flexitarian snackwave trust fund hexagon leggings. Paleo microdosing tote bag crucifix fixie wayfarers jianbing art party hammock. Pitchfork schlitz yuccie chambray vegan austin sartorial swag roof party.",
  authorTitle: "Mayor",
  author: "Michael Bloomberg"
}, {
  quote: "Stunning food and great recipe!",
  body: "IPhone four loko twee bitters. Beard etsy helvetica, thundercats readymade bushwick selvage taiyaki pop-up forage distillery. Pug tacos fingerstache, +1 lumbersexual intelligentsia lyft craft beer hoodie succulents bitters tumblr 8-bit. Cloud bread marfa wayfarers ugh aesthetic, mumblecore pour-over before they sold out tote bag letterpress godard dreamcatcher.",
  authorTitle: "Former First Lady",
  author: "Michelle Obama"
}, {
  quote: "Superb experience and atmosphere!",
  body: "Cronut letterpress ugh, coloring book neutra fam gluten-free yr humblebrag tumeric knausgaard waistcoat banh mi ramps. Vexillologist taiyaki snackwave keytar, yuccie blog tacos tattooed tilde pug drinking vinegar flannel hoodie. Selfies prism tote bag chillwave mustache stumptown occupy cloud bread. VHS next level pabst swag marfa.",
  authorTitle: "Manager",
  author: "Michael Scott"
}];

var bannerQuote = [{
  author: 'Fil Don',
  quote: 'I Love Cooking For Myself And For My Family'
}];

function reviewLeft() {
  globalState.reviewIndex.current - 1;
}
function reviewRight() {
  globalState.reviewIndex.current + 1;
}

var actions = {
  reviewRight: reviewRight,
  reviewLeft: reviewLeft
};

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenu: specialMenu,
  reviews: reviews,
  reviewIndex: {
    current: 0
  },
  bannerQuote: bannerQuote,
  actions: actions,
  menu: 'inactive',
  times: false
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

var Contact = exports.Contact = function Contact(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

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
        { "data-aos": "zoom-in" },
        "Contact us"
      ),
      (0, _hyperapp.h)(
        "h3",
        { "data-aos": "zoom-in" },
        "we're here to help"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "contactBox", "data-aos": "flip-left" },
        (0, _hyperapp.h)(
          "div",
          { className: "left" },
          (0, _hyperapp.h)(
            "div",
            { className: "city" },
            (0, _hyperapp.h)(
              "strong",
              null,
              state.companyInfo.address.city,
              ","
            ),
            " ",
            state.companyInfo.address.state
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "address" },
            state.companyInfo.address.address
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "email" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Email: "
            ),
            state.companyInfo.email
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

var Footer = exports.Footer = function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Footer" },
    (0, _hyperapp.h)(
      "div",
      { className: "container", "data-aos": "zoom-in" },
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

var Header = exports.Header = function Header(_ref) {
	var state = _ref.state,
	    actions = _ref.actions;

	return (0, _hyperapp.h)(
		"header",
		null,
		(0, _hyperapp.h)(
			"div",
			{ className: "container" },
			(0, _hyperapp.h)("div", { className: "logo" }),
			(0, _hyperapp.h)(
				"div",
				{ className: "hamburger", onclick: actions.showMenu },
				(0, _hyperapp.h)("div", null),
				(0, _hyperapp.h)("div", null),
				(0, _hyperapp.h)("div", null)
			),
			(0, _hyperapp.h)(
				"nav",
				{ className: state.menu },
				(0, _hyperapp.h)(
					"a",
					{ href: "#SpecialMenu" },
					"Menu"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#" },
					"Reservations"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#Reviews" },
					"Reviews"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#Contact" },
					"Contact"
				),
				(0, _hyperapp.h)(
					"div",
					{ className: "close", onclick: actions.closeMenu },
					(0, _hyperapp.h)("i", { "class": "fas fa-times" })
				)
			)
		)
	);
};
// <a href="#ex1" rel="modal:open">
// 	<span data-toggle="modal" data-target="#myModal">Reservations</span>
// </a>

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OurStory = undefined;

var _hyperapp = __webpack_require__(0);

var OurStory = exports.OurStory = function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory", "data-aos": "fade-up" },
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
          (0, _hyperapp.h)("img", { src: "/images/lambChop.jpg!d" })
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

var PromotionsAndEvents = exports.PromotionsAndEvents = function PromotionsAndEvents(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "PromotionsAndEvents" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h6",
        { "data-aos": "fade" },
        "our news"
      ),
      (0, _hyperapp.h)(
        "h3",
        { "data-aos": "fade" },
        "promotions & events"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "specialContainer" },
        (0, _hyperapp.h)("div", { className: "box image1", "data-aos": "fade-down" }),
        (0, _hyperapp.h)(
          "div",
          { className: "box event", "data-aos": "fade-down" },
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
          { className: "box event", "data-aos": "zoom-out-up" },
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
              "162 Hamilton St, Macbeth Township, Shakespeare"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "eventTime" },
              "3:00 PM - 7:00 PM"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "eventDate" },
              "April 20th, 2018"
            )
          )
        ),
        (0, _hyperapp.h)("div", { className: "box image2", "data-aos": "zoom-out-up" })
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

var Quote = exports.Quote = function Quote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var quote = function quote() {
    return state.bannerQuote.map(function (quote) {
      return (0, _hyperapp.h)(
        "div",
        { className: "quoteContainer", "data-aos": "fade" },
        (0, _hyperapp.h)(
          "h1",
          { className: "quoteContent" },
          (0, _hyperapp.h)(
            "span",
            { className: "quote" },
            "\u201C"
          ),
          quote.quote
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "quoteAuthor" },
          "- ",
          quote.author,
          " -"
        )
      );
    });
  };
  return (0, _hyperapp.h)(
    "section",
    { id: "Quote" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      quote()
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
exports.Reservations = undefined;

var _hyperapp = __webpack_require__(0);

var Reservations = exports.Reservations = function Reservations(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "div",
    { id: "Reservations" },
    (0, _hyperapp.h)(
      "div",
      { id: "popup1", className: "overlay " + (state.times ? 'diss' : '') },
      (0, _hyperapp.h)(
        "div",
        { className: "popup" },
        (0, _hyperapp.h)(
          "h2",
          null,
          "Here i am"
        ),
        (0, _hyperapp.h)(
          "a",
          { className: "close", href: "#", onclick: actions.close },
          "\xD7"
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "content" },
          "Thank to pop me out of that button, but now im done so you can close this window."
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
exports.Reviews = undefined;

var _hyperapp = __webpack_require__(0);

var Reviews = exports.Reviews = function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var currentReview = state.reviewIndex.current;
  var reviews = function reviews() {
    return (0, _hyperapp.h)(
      "div",
      { className: "review" },
      (0, _hyperapp.h)(
        "div",
        { className: "reviewQuote" },
        "\"",
        state.reviews[currentReview].quote,
        "\""
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviews[currentReview].body
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "quote" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.reviews[currentReview].authorTitle
        ),
        " ",
        (0, _hyperapp.h)(
          "span",
          null,
          "\u25E6"
        ),
        " ",
        state.reviews[currentReview].author
      )
    );
  };
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
          { className: "col-md-6 second", "data-aos": "fade-right" },
          (0, _hyperapp.h)("img", { src: "/images/chef.png" })
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
            { className: "reviewContainer", "data-aos": "fade-up" },
            reviews()
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "arrow", onclick: state.actions.reviewLeft },
            (0, _hyperapp.h)(
              "a",
              { onclick: actions.reviewLeft,
                href: "",
                className: "left " + (state.reviewIndex.current > 0 ? 'active' : '') },
              (0, _hyperapp.h)("i", { "class": "fas fa-arrow-left" })
            ),
            (0, _hyperapp.h)(
              "a",
              { onclick: actions.reviewRight,
                href: "", className: "right " + (state.reviewIndex.current < state.reviews.length - 1 ? 'active' : '') },
              (0, _hyperapp.h)("i", { "class": "fas fa-arrow-right" })
            )
          )
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
exports.SpecialMenu = undefined;

var _hyperapp = __webpack_require__(0);

var SpecialMenu = exports.SpecialMenu = function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var menuItems = function menuItems() {
    return state.specialMenu.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { className: "one special" },
        (0, _hyperapp.h)(
          "div",
          { className: "specialTop" },
          (0, _hyperapp.h)(
            "div",
            { className: "specialPrice" },
            item.price
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "specialDescription" },
          (0, _hyperapp.h)(
            "div",
            { className: "dish" },
            item.title
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "ingredients" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "hContainer", "data-aos": "fade" },
        (0, _hyperapp.h)(
          "h6",
          null,
          "special menu"
        ),
        (0, _hyperapp.h)(
          "h3",
          null,
          "Delicious flavours of autumn"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "specialContainer", "data-aos": "fade-up" },
        menuItems()
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "menuLink", "data-aos": "fade" },
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopImg = undefined;

var _hyperapp = __webpack_require__(0);

var TopImg = exports.TopImg = function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "title", "data-aos": "fade-right" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "contact-info", id: "contact-info", "data-aos-anchor": "#contact-info", "data-aos-anchor-placement": "top-bottom", "data-aos": "fade-up" },
        (0, _hyperapp.h)(
          "div",
          null,
          "Call for reservations"
        ),
        (0, _hyperapp.h)(
          "h2",
          null,
          state.companyInfo.phone
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "hours" },
          (0, _hyperapp.h)(
            "span",
            null,
            "Opening Hours: "
          ),
          (0, _hyperapp.h)(
            "span",
            null,
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon-Fri:"
            ),
            " 9am - 9pm "
          ),
          (0, _hyperapp.h)(
            "span",
            null,
            (0, _hyperapp.h)(
              "strong",
              null,
              "Weekend:"
            ),
            " 9am - 11:00pm "
          )
        )
      )
    )
  );
};

/***/ }),
/* 23 */
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
  state: _globalState.globalState,
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
],[23]);