import { Modal } from './components/modal.js';
import { Accordion } from './components/accordion.js';
// import other components similarly when created
// import { Tabs } from './components/tabs.js';
// import { Dropdown } from './components/dropdown.js';
// import { Tooltip } from './components/tooltip.js';
// import { Toast } from './components/toast.js';
// import { Spinner } from './components/spinner.js';

document.addEventListener('DOMContentLoaded', () => {
  new Modal('#myModal', '#openModalBtn', '#closeModalBtn');
  new Accordion('.accordion');
  // initialize other components here
});
