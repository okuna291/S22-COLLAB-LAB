var ks = require('node-key-sender');


setInterval(function() {
 ks.sendKey('a');
  console.log("key pressed");
}, 4250);



// ks.sendKey('a');
// ks.sendKeys(['a', 'y', 'o']);
// ks.sendKeys(['space']);
// ks.sendKeys(['kp_down']);