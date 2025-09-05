
// Site Config
var Title        = "RaspBerry Pi Test Board";

// Here you can enable/disable GPIOs, thats only for showing toggles and
// Buttons for the GPIOs on the Page.
// You can really enable/disable GPIOs for processing in the 'webserver.js',
// its important when you use a HAT like GeekWorm KVM-A3 or something else.
  
var GPIOEnabled = {};
GPIOEnabled[2]  = 1; // Enable (1) or Disable (0) GPIO pin 3 for processing
GPIOEnabled[3]  = 1; // Enable (1) or Disable (0) GPIO pin 3 for processing
GPIOEnabled[4]  = 1; // Enable (1) or Disable (0) GPIO pin 4 for processing
GPIOEnabled[5]  = 1; // Enable (1) or Disable (0) GPIO pin 5 for processing
GPIOEnabled[6]  = 1; // Enable (1) or Disable (0) GPIO pin 6 for processing
GPIOEnabled[7]  = 1; // Enable (1) or Disable (0) GPIO pin 7 for processing
GPIOEnabled[8]  = 1; // Enable (1) or Disable (0) GPIO pin 8 for processing
GPIOEnabled[9]  = 1; // Enable (1) or Disable (0) GPIO pin 9 for processing
GPIOEnabled[10] = 1; // Enable (1) or Disable (0) GPIO pin 10 for processing
GPIOEnabled[11] = 1; // Enable (1) or Disable (0) GPIO pin 11 for processing
GPIOEnabled[12] = 1; // Enable (1) or Disable (0) GPIO pin 12 for processing
GPIOEnabled[13] = 1; // Enable (1) or Disable (0) GPIO pin 13 for processing
GPIOEnabled[14] = 1; // Enable (1) or Disable (0) GPIO pin 14 for processing
GPIOEnabled[15] = 1; // Enable (1) or Disable (0) GPIO pin 15 for processing
GPIOEnabled[16] = 1; // Enable (1) or Disable (0) GPIO pin 16 for processing
GPIOEnabled[17] = 1; // Enable (1) or Disable (0) GPIO pin 17 for processing
GPIOEnabled[18] = 1; // Enable (1) or Disable (0) GPIO pin 18 for processing
GPIOEnabled[19] = 1; // Enable (1) or Disable (0) GPIO pin 19 for processing
GPIOEnabled[20] = 1; // Enable (1) or Disable (0) GPIO pin 20 for processing
GPIOEnabled[21] = 1; // Enable (1) or Disable (0) GPIO pin 21 for processing
GPIOEnabled[22] = 1; // Enable (1) or Disable (0) GPIO pin 22 for processing
GPIOEnabled[23] = 1; // Enable (1) or Disable (0) GPIO pin 23 for processing
GPIOEnabled[24] = 1; // Enable (1) or Disable (0) GPIO pin 24 for processing
GPIOEnabled[25] = 1; // Enable (1) or Disable (0) GPIO pin 25 for processing
GPIOEnabled[26] = 1; // Enable (1) or Disable (0) GPIO pin 26 for processing
GPIOEnabled[27] = 1; // Enable (1) or Disable (0) GPIO pin 27 for processing

// CSS IDs
var CSSIDTitle            = "Title"
var CSSIDGPIO             = "GPIO";
var CSSIDButton           = "MGPIO";
var CSSIDSwitch           = "CSSSwitchGPIO";
var CSSIDText             = "CSSTextGPIO";

// CSS Classes
var CSSClassTitle         = "title";
var CSSClassDisable       = "disabled";
var CSSClassButtonDisable = "disabled";
var CSSClassToggleDisable = "disabled";
var CSSClassTextDisable   = "disabled";

// Misc
var GPIOName     = "GPIO";  // has to be the same in the webserver.js!
var GPIONameT    = "TGPIO"; // has to be the same in the webserver.js!
