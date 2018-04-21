import { JSDOM } from 'jsdom';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

global.window = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = global.window.document;
global.navigator = global.window.navigator;
