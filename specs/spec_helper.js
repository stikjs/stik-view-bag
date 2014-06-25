var jsdom = require("jsdom").jsdom;
GLOBAL.document = jsdom("<html><head></head><body></body></html>");
GLOBAL.window = document.parentWindow;

require("stik-core");
require("../src/view-bag.js");
require("stik-labs");

GLOBAL.stik = window.stik;
