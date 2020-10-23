#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2
#define SERIAL_BAUD_RATE 9600

OneWire oneWire(ONE_WIRE_BUS);

DallasTemperature sensors(&oneWire);

void setup() {
  pinMode(13, OUTPUT);

  Serial.begin(SERIAL_BAUD_RATE);
  sensors.begin();
}

void loop() {
  digitalWrite(13, LOW);

  sensors.requestTemperatures();

  digitalWrite (13, HIGH);

  Serial.print("TEMP: ");
  Serial.print(sensors.getTempCByIndex(0));
  Serial.print("\n");
}
