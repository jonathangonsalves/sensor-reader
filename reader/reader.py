from serial import Serial
import time

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

    for i in range(100):
        val_atual = pot.read()
        print(val_atual)
        try:
            data.append(val_atual)
        except:
            data.append(" ")
        time.sleep(0.1)            # wait (sleep) 0.1 seconds

    print(data)
    pot.close()

if  __name__ == "__main__":
    main()
