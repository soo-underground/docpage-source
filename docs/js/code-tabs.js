//function openCode(evt, codeName) {
    // Declare all variables
//    var i, tab-pane, nav-item;

    // Get all elements with class="tab-pane" and hide them
//    tab-pane = document.getElementsByClassName("tab-pane");
//    for (i = 0; i < tab-pane.length; i++) {
//        tab-pane[i].style.display = "none";
//    }

    // Get all elements with class="nav-tabs" and remove the class "active"
//    nav-item = document.getElementsByClassName("nav-item");
//    for (i = 0; i < nav-item.length; i++) {
//        nav-item[i].className = nav-item[i].className.replace(" active", "");
//    }

    // Show the current tab, and add an "active" class to the button that opened the tab
//    document.getElementById(codeName).style.display = "block";
//    evt.currentTarget.className += " active";
//}

//alert( 'Hello, world!' );

//document.getElementsByClassName("nav-item ").addEventListener("click", function(){
//   alert("Hello World!");
// });
//document.getElementsByClassName("nav-item").addEventListener("click", displayTab);

//function displayTab {
//  document.getElementById("__code_2").className += " active";
//}
var i
//adding mouseclick listeners
var tabs = document.getElementsByClassName('nav-item');
for ( i = 0; i < tabs.length; i++) {
  let ii=i;
  tabs[i].addEventListener('click', function (){change_visibility(ii)});
}

function change_visibility(k) {

  var code = document.getElementsByClassName('tab-pane')[k];
  othercode = document.getElementsByClassName('tab-pane');
      for (f = 0; f < othercode.length; f++) {
          othercode[f].className = othercode[f].className.replace(" active", "");
      } //making all codeblocks invisible
  code.className += " active"; //making one codeblock visible

  var navtab = document.getElementsByClassName('nav-item')[k];
  othernavtabs = document.getElementsByClassName('nav-item');
      for (d = 0; d < othernavtabs.length; d++) {
          othernavtabs[d].className = othernavtabs[d].className.replace(" active", "");
      } //making all navtabs invisible
  navtab.className += " active"; //making one navtab visible
}




//   var code_id = i * 2;
//   alert(code_id);
//   document.getElementById('__code_[i*2]').className += " active";
//};
