/*jshint esversion: 6 */
import '../scss/app.scss';

import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-pro-solid/faUser';
import faCircle from '@fortawesome/fontawesome-pro-regular/faCircle';
import faArchive from '@fortawesome/fontawesome-pro-light/faArchive';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';

fontawesome.library.add(faUser);
fontawesome.library.add(faCircle);
fontawesome.library.add(faArchive);
fontawesome.library.add(faFacebook);

  $(document).ready(function(){
    $('.parallax').parallax({});
    $('.dropdown-button').dropdown({});
  });

  console.log('This is from the app.js file');
