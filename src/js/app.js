'use strict';
const gen = require('./common/_general')
const activTabs = require('./common/_tabs');
const skills = require('./common/_skills');
const validate = require('./common/_validate');
const dateToday = require('./common/_date');

gen ();
activTabs ();
dateToday ();
skills ();
validate ();