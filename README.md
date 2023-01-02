
# Speech Google Para Boti

Pruebas para Boti


## Installation

1 - Ejecute "npm install" para instalar todas las dependencias de la aplicación.

```bash
  npm install
```
2 - Complete con las credenciales de "Google Cloud" el archivo "serviceaccount.json"

3 - Lance la aplicacion con el comando: 
 ```bash
  node index.js
```

    
## Optimizations

La url de los audios, que estan alojados en el Storage de Google, debe modificarse antes de llamar a la Api de Cloud, ej:

- URL Original: "https://storage.googleapis.com/m-infra.appspot.com/xxxxxxxxxxxxxxxxxxxx.ogg"
- URL modificada: "gs://m-infra.appspot.com/xxxxxxxxxxxxxxxxxxxx.ogg"

