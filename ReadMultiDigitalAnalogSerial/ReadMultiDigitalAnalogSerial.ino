/*
  ReadAnalogVoltage

  Reads an analog input on pin 0, converts it to voltage, and prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/ReadAnalogVoltage
*/

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
int DsensorValue1 = digitalRead(1);
// read the input on digital pin 2:
int DsensorValue2 = digitalRead(2);
// read the input on digital pin 3:
int DsensorValue3 = digitalRead(3);

Serial.print(AsensorValue0);
Serial.print(",");
Serial.print(AsensorValue1);
Serial.print(",");
Serial.print(AsensorValue2);
Serial.print(",");
Serial.print(DsensorValue1);
Serial.print(",");
Serial.print(DsensorValue2);
Serial.print(",");
Serial.println(DsensorValue3);
delay(500);
}
