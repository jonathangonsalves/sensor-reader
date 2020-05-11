from serial import Serial
import time, datetime
import json


class Potenciometro():
    def __init__(self, port):    
        self.port = port
        self.final = {'sensor_one':{},'sensor_two':{}}
        self.sensor_one = {}
        self.sensor_two = {}

        try:
            self.ser = Serial(port, 9600)
            print("Conectado com: "+self.ser.portstr)        
        except:
            print("Houve um erro ao se conectar com a porta!")
            quit()

    def read(self):
        return self.ser.readline().decode().rstrip()

    def save(self, sensor, value):
        self.final = {}
        if sensor == 1:
            self.sensor_one[str(datetime.datetime.now())] = value
        else:
            self.sensor_two[str(datetime.datetime.now())] = value
        
        self.final = {'sensor_one':self.sensor_one,'sensor_two':self.sensor_two}

        with open('final.json', 'w') as outfile:
            json.dump(self.final, outfile)

        return self

    def close(self):
        try:
            self.ser.close()
            print("Porta "+self.ser.portstr+" descontectada.")
        except:
            print("Houve um erro ao fechar a porta. Feche manualmente.")

def main():

    pot = Potenciometro('/dev/ttyACM0')
    time.sleep(2)

    print("Setting up...")
    for i in range(120):
        if i < 50:
            val_atual = pot.read()
        else:
            val_atual = pot.read()
            #print(val_atual)
            try:
                pot.save(1, val_atual[4:]) if val_atual.startswith("s1") else pot.save(2, val_atual[4:])
            except:
                continue
            time.sleep(0.1)

    pot.close()

if  __name__ == "__main__":
    main()
