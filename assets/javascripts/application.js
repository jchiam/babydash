import $ from 'jquery';
import { Kitto } from 'kitto';

import '../stylesheets/application.scss';

window.jQuery = window.$ = $; // eslint-disable-line no-undef, no-multi-assign

Kitto.start();
