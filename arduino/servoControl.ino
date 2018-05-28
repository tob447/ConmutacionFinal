#include <Servo.h>

Servo servo;

String data;
char letra;
void setup() {  // put your setup code here, to run once:
  Serial1.begin(115200);
  Serial.begin(9600);
  servo.attach(9);

}

void loop() {
  if (Serial1.available()>0)
  {
    Serial.println("Serial available");
    letra=Serial1.read();
     data=data+letra;
  }
  Serial.println(data);
  if (data=="servo"){
    servo.write(0);
    Serial.println("hola");
    delay(1000);
    for (int i=0;i<180;i=i+10){
      Serial.println(i);
      servo.write(i);
      delay(1000);
    }
    data="";
  }
  
  

}
