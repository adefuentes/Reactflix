#Reactflix
WebApp, desarrollada en React JS, de una plataforma de contenidos VoD

## Despliegue

Antes de nada, asegurarse que se tiene git, node, npx y yarn instalados en el sistema.

Clonar el repositorio:

### `git clone https://github.com/adefuentes/Reactflix.git`
De esta forma se realizará la descarga local de la rama master, donde se encuentra el proyecto.


Una vez descargado, nos movemos hacie el directorio del proyecto desde la consola de comandos y ejecutamos el comando:

### `yarn`

Así descargamos las dependencias y generamos la carpeta `node_modules`

Para lanzar la app ejecutamos, en la raiz del directorio, el comando:

### `yarn start`

Lanza la aplicación en modo desarrollo.<br />
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para visualizar la web.

Para generar el proyecto en release se ejecuta el comando:

### `yarn build`

Genera la app en producción dentro de la carpeta `build` en la raiz del proyecto.<br />
