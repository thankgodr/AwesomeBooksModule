import ViewHandler from './modules/viewhandler.js';

window.addEventListener(
  'load',
  () => {
    const viewhandler = new ViewHandler();
    viewhandler.initiew();
    ViewHandler.setUpNav();
  },
  false,
);