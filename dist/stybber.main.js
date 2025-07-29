import { Modal } from './js/modal.js';
import { Accordion } from './js/accordion.js';
import { Tabs } from './js/tabs.js';
import { Dropdown } from './js/dropdown.js';
import { Tooltip } from './js/tooltip.js';
import { Toast } from './js/toast.js';
import { Spinner } from './js/spinner.js';

document.addEventListener('DOMContentLoaded', () => {
  new Modal('#myModal', '#openModalBtn', '#closeModalBtn');
  new Accordion('.accordion');
  // initialize other components here
});
