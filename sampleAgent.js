//new pin configuration for device
ledR <- hardware.pin9
ledG <- hardware.pin8
btn <- hardware.pin1
btnV <- 0;

ledR.configure(DIGITAL_OUT);
ledG.configure(DIGITAL_OUT);
btn.configure(DIGITAL_IN_PULLUP,buttonValue);


function buttonValue(){
local state = button.read();
  if (state == 1) {
         // The button is released
         server.log("Release");
     } else {
         // The button is pressed
         server.log("Press");
         btnV = 1-btnV;
     }

}

function bootLED(){

  server.log("Hi David's phone");

    ledR.write(1);
    imp.sleep(0.5);
    ledG.write(1);

    imp.sleep(0.5);

    ledG.write(0);
    imp.sleep(0.5);
    ledR.write(0);

    imp.sleep(0.25);
}

function stateChange(){
    server.log(btn.read());

}

function runLED(){

   server.log(btn.read());

    if (btnV==1){

    imp.sleep(20)

        server.log("device says flashing my lights");

        ardD.write(1);

        ledR.write(1);
        imp.sleep(0.1);
        ledG.write(1);

        imp.sleep(0.5);

        ledG.write(0);
        imp.sleep(0.5);
        ledG.write(1);

        imp.sleep(0.5);

        ledG.write(0);
        imp.sleep(0.5);
        ledG.write(1);

        imp.sleep(0.5);
        ledG.write(0);
        imp.sleep(0.5);
        ledG.write(1);

        imp.sleep(0.5);
        ledG.write(0);
        imp.sleep(0.5);
        ledG.write(1);

        imp.sleep(0.5);
        ledG.write(0);
        imp.sleep(0.5);
        ledG.write(1);

        imp.sleep(0.5);
        ledG.write(0);
        imp.sleep(0.5);
        ledG.write(1);

        imp.sleep(0.5);
        ledG.write(0);
        imp.sleep(0.5);
        ledG.write(1);

        imp.sleep(0.5);
        ledG.write(0);
        imp.sleep(0.5);
        ledG.write(1);

        imp.sleep(0.5);
        ledG.write(0);
        imp.sleep(0.5);
        ledG.write(1);

        imp.sleep(0.5);

        ledG.write(0);
        imp.sleep(0.5);

    } else if (btnV==0){

      ardD.write(0);

      ledG.write(0);

      ledR.write(1);
      imp.sleep(0.9);
      ledR.write(0);
    }
  imp.wakeup(0.5, runLED);
}




bootLED();
runLED();
