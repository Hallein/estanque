import requests
import datetime
import time
import json
from random import randint


contador = 0

while contador < 50:	

	humedad = randint(0,100)
	#payload = {'humedad': humedad, 'hora': datetime.datetime.now().time()}
	data = {"sensor":"gps","time":1351824120,"data":[48.756080,2.302038],"humedad": humedad} #va a venir desde el arduino con la libreria ArduinoJSON
	# payload = json.loads(data) #se encodea el string a json, en caso de que se mande como string
	r = requests.post('http://localhost:3000/humedad/sensor/A', data = data)
	print(data)

	time.sleep(1)

	# humedad = randint(0,100)
	# payload = {'humedad': humedad, 'hora': datetime.datetime.now().time()}
	# r = requests.post('http://localhost:3000/humedad/sensor/B', data = payload)
	# print(humedad)

	# time.sleep(0.1)

	# humedad = randint(0,100)
	# payload = {'humedad': humedad, 'hora': datetime.datetime.now().time()}
	# r = requests.post('http://localhost:3000/humedad/sensor/C', data = payload)
	# print(humedad)

	# time.sleep(0.1)

	# humedad = randint(0,100)
	# payload = {'humedad': humedad, 'hora': datetime.datetime.now().time()}
	# r = requests.post('http://localhost:3000/humedad/sensor/D', data = payload)
	# print(humedad)

	# time.sleep(0.1)
	# contador = contador + 1
