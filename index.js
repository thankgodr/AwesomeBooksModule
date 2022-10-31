import ViewHandler from './modules/viewhandler';

window.addEventListener(
  'load',
  () => {
    const viewhandler = new ViewHandler();
    viewhandler.initiew();
    viewhandler.setUpNav();
  },
  false,
);