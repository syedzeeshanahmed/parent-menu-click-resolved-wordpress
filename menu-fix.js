// to fix your wordpress parent menu click which has dopdown.

jQuery('.dropdown-toggle').click(function() {
 var location = jQuery(this).attr('href');
 window.location.href = location;
 return false;
});
