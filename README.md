# Aplicación del clima

Aplicación que muestra la temperatura (grados celsius), región y país de cada localización.

Permite la búsqueda por:__
-Ciudad/Región/País (Ej.: "Madrid")__
-IP (Ej.: "123.456.789.012")__
-Coordenadas (Ej.: "56.12,23.35")

Para utilizar esta aplicación debemos reconstruir los paquetes de node
```
npm install
```

## Ejemplo de uso

Se utilizará el parámetro -d (o --direccion) para realizar la petición.
```
node app -d "Madrid"
```
_Mostrará la temperatura en grados celsius que hace en Madrid en ese momento_