from serial import Serial
import time, datetime
import json

# TODO
# 1. Verificar o porque do delay ao ler os primeiros valores
# 2. Gravar lista "data" para um aquivo local

class Potenciometro():
    def __init__(self, port):    
        self.port = port
        try:
            self.ser = Serial(port, 9600)
            print("Conectado com: "+self.ser.portstr)        
        except:
            print("Houve um erro ao se conectar com a porta!")
            quit()

    def read(self):
        return self.ser.readline().decode().rstrip()

    def save(self, final_result):
        with open('final.json', 'w') as outfile:
            json.dump(final_result, outfile)
        return self

    def close(self):
        try:
            self.ser.close()
            print("Porta "+self.ser.portstr+" descontectada.")
        except:
            print("Houve um erro ao fechar a porta. Feche manualmente.")

def main():
    data =[]
    pot = Potenciometro('/dev/ttyACM0')
    time.sleep(2)

    sensor_one = {}
    sensor_two = {}
    print("Setting up...")
    for i in range(120):
        if i < 50:
            val_atual = pot.read()
        else:
            val_atual = pot.read()
            #print(val_atual)
            try:
                if val_atual.startswith("s1"):
                    data.append(val_atual[4:])
                    sensor_one[str(datetime.datetime.now())] = val_atual[4:]
                elif val_atual.startswith("s2"):
                    data.append(val_atual[4:])
                    sensor_two[str(datetime.datetime.now())] = val_atual[4:]
                else:
                    continue
            except:
                data.append(" ")
            time.sleep(0.1)

    print(data)
    final = {'sensor_one':sensor_one,'sensor_two':sensor_two}
    pot.save(final)
    pot.close()

if  __name__ == "__main__":
    main()
