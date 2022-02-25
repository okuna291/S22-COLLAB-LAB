/*
  ReadAnalogVoltage

  Reads an analog input on pin 0, converts it to voltage, and prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/ReadAnalogVoltage
*/
int pAsensorValue0=0;
int pAsensorValue1=0;
int pAsensorValue2=0;
int pDsensorValue2=0;
int pDsensorValue3=0;
int pDsensorValue4=0;
// the setup routine runs once when you press reset:
void setup() {
//initialize serial communication at 9600 bits per second:
Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
// read the input on analog pin 0:
int AsensorValue0 = analogRead(A0);
// read the input on analog pin 1:
int AsensorValue1 = analogRead(A1);
// read the input on analog pin 2:
int AsensorValue2 = analogRead(A2);
// read the input on digital pin 1:
int DsensorValue2 = digitalRead(2);
// read the input on digital pin 2:
int DsensorValue3 = digitalRead(3);
// read the input on digital pin 3:
int DsensorValue4 = digitalRead(4);

//if (pAsensorValue0!=AsensorValue0 || pAsensorValue1!=AsensorValue1 || pAsensorValue2!=AsensorValue2 || pDsensorValue2!=DsensorValue2 || pDsensorValue3!=DsensorValue3 || pDsensorValue4!=DsensorValue4){

Serial.print(AsensorValue0);
Serial.print(",");
Serial.print(AsensorValue1);
Serial.print(",");
Serial.print(AsensorValue2);
Serial.print(",");
Serial.print(DsensorValue2);
Serial.print(",");
Serial.print(DsensorValue3);
Serial.print(",");
Serial.println(DsensorValue4);

//  }
//pAsensorValue0=AsensorValue0;
//pAsensorValue1=AsensorValue1;
//pAsensorValue2=AsensorValue2;
//pDsensorValue2=DsensorValue2;
//pDsensorValue3=DsensorValue3;
//pDsensorValue4=DsensorValue4;

delay(2000);
}
