// potentiometer_read.ino
#include "MD5.h"


int sensorOne = A0;
int sensorTwo = A1;
int sensorValueOne;
int sensorValueTwo;

void setup()
{
  Serial.begin(9600);
  pinMode(sensorOne, INPUT);
  pinMode(sensorTwo, INPUT);
}

void loop() 
{
  sensorValueOne = analogRead(sensorOne);
  String code_sensorValueOne = codificar(String(sensorValueOne));
  Serial.print("s1: ");
  Serial.println(code_sensorValueOne);

  
  delay(100);

  sensorValueTwo = analogRead(sensorTwo);
  String code_sensorValueTwo = codificar(String(sensorValueTwo));
  Serial.print("s2: ");
  Serial.println(code_sensorValueTwo);


  delay(100);
}


String codificar(String value)
{
  
  char *ldrValueChar = (char*) malloc(sizeof(char)*value.length()+1);
  value.toCharArray(ldrValueChar, value.length()+1);
  
  unsigned char* hash= MD5::make_hash(ldrValueChar);
  free(ldrValueChar);
  char *md5str = MD5::make_digest(hash, 16);
  free(hash);  
  String data = String(value) + "+" + (char *)md5str;
  free(md5str);   
  return data;
  
}
