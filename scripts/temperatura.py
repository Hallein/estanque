import serial
import json
import requests
import datetime
import time
from random import randint


print ('Conectando puerto serial...')
ser = serial.Serial('COM5', 9600)
print ('Puerto serial conectado')

while True:
	temperatura = ser.readline().strip()

	payload = {'temperatura': temperatura, 'hora': datetime.datetime.now().time()}
	r = requests.post('http://localhost:3000/temperatura/sensor/A', data = payload)
	r = requests.post('http://localhost:3000/temperatura/sensor/B', data = payload)
	#print(temperatura)
	


# contador = 0

# while contador < 60:	

# 	temperatura = randint(0,50)
# 	payload = {'temperatura': temperatura, 'hora': datetime.datetime.now().time()}
# 	r = requests.post('http://localhost:3000/temperatura/sensor/A', data = payload)
# 	print(temperatura)

# 	temperatura = randint(0,50)
# 	payload = {'temperatura': temperatura, 'hora': datetime.datetime.now().time()}
# 	r = requests.post('http://localhost:3000/temperatura/sensor/B', data = payload)
# 	print(temperatura)

# 	time.sleep(0.4)
# 	contador = contador + 1
