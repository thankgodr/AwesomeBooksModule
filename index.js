import ViewHandler from './modules/viewhandler.js';
import { DateTime } from './modules/luxon.js';

window.addEventListener(
  'load',
  () => {
    const viewhandler = new ViewHandler();
    viewhandler.initiew();

    const dateAndTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    const temppArr = dateAndTime.split(' ');
    delete temppArr[temppArr.length - 1];
    document.getElementById('navdate').innerHTML = temppArr.join(' ').replace(',', '');

    document.getElementById('home').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('bokklist_div').style.display = 'block';
      document.getElementById('addnew_div').style.display = 'none';
      document.getElementById('contact_div').style.display = 'none';
    });

    document.getElementById('addnew').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('bokklist_div').style.display = 'none';
      document.getElementById('addnew_div').style.display = 'block';
      document.getElementById('contact_div').style.display = 'none';
    });

    document.getElementById('contact').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('bokklist_div').style.display = 'none';
      document.getElementById('addnew_div').style.display = 'none';
      document.getElementById('contact_div').style.display = 'block';
    });
  },
  false,
);