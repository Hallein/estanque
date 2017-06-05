import serial
import requests
import datetime
import json




print ('Conectando puerto serial...')
ser = serial.Serial('COM5', 9600)
print ('Puerto serial conectado')

while True:
	data = ser.readline().strip()
	#js = json.loads(data)

	#payload = {'humedad': js['humedad'], 'hora': datetime.datetime.now().time()}
	#r = requests.post('http://localhost:3000/humedad/sensor/' + js['id'], data = payload)
	#print ('Humedad del sensor {}: {}'.format(js['id'], js['humedad']))
	print(data)