/*
  ReadAnalogVoltage

  Reads an analog input on pin 0, converts it to voltage, and prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/ReadAnalogVoltage
*/
bool fistComplete = false;
String secondString ="";
String fistString ="";
String inputString = "";         // a String to hold incoming data
bool stringComplete = false;  // whether the string is complete
//String [200] receivedData;

int pAsensorValue0=0;
int pAsensorValue1=0;
int pAsensorValue2=0;
int pDsensorValue2=0;
int pDsensorValue3=0;
int pDsensorValue4=0;
int analog6Val=0;

// the setup routine runs once when you press reset:
void setup() {
//initialize serial communication at 9600 bits per second:
Serial.begin(9600);
 inputString.reserve(200);

 pinMode(6,OUTPUT);
 digitalWrite(6,LOW);
}

// the loop routine runs over and over again forever:
void loop() {



 if (stringComplete) {
    
    for(int i=1;i<inputString.length(); i++){
     secondString+= inputString[i];
      }

//Serial.println((fistString).toInt());
//Serial.println((secondString).toInt());
    // clear the string:

analog6Val=(fistString).toInt();
    inputString = "";
    fistString="";
    stringComplete = false;
    fistComplete =  false;
  }

analogWrite(6,analog6Val);
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

if (abs(pAsensorValue0-AsensorValue0)>20 || abs(pAsensorValue1-AsensorValue1)>1 || abs(pAsensorValue2-AsensorValue2)>1 || pDsensorValue2!=DsensorValue2 || pDsensorValue3!=DsensorValue3 || pDsensorValue4!=DsensorValue4){

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


  }

pAsensorValue0=AsensorValue0;
pAsensorValue1=AsensorValue1;
pAsensorValue2=AsensorValue2;
pDsensorValue2=DsensorValue2;
pDsensorValue3=DsensorValue3;
pDsensorValue4=DsensorValue4;
delay(100);
}

void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
    // add it to the inputString:
    
    // if the incoming character is a newline, set a flag so the main loop can
    // do something about it:
    if (inChar == ',') {
      fistComplete = true;
    }

    if (!fistComplete) {
      fistString += inChar;
    }

     if (fistComplete) {
      inputString += inChar;
    }
    
    
    if (inChar == '\n') {
      stringComplete = true;
      digitalWrite(6,HIGH);
    }
  }
}
