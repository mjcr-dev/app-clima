# Aplicación del clima

Aplicación que muestra el clima de cada localización.
Nos devuelve como resultado la región, país, temperatura con máximos y mínimos, sensación térmica, presión atmosférica, humedad, viento (velocidad y grados) y nubes.

Permite la búsqueda por:\
-Ciudad/Región/País (Ej.: "Madrid")\
-IP (Ej.: "123.456.789.012")\
-Coordenadas (Ej.: "56.12,23.35")

Recuerde reconstruir los paquetes de node para su uso
```
npm install
```

## Ejemplo de uso

Se utilizará el parámetro -d (o --direccion) para realizar la petición.
```
node app -d "Madrid"
```
_Salida:_\
![clima](https://user-images.githubusercontent.com/72708265/105554731-3f6a8880-5d08-11eb-947e-41bd74aff3f8.png)

#### Api's utilizadas:
https://openweathermap.org/ \
https://www.weatherapi.com/