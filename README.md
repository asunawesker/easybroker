# EasyBroker

## Prerrequisitos

* Angular CLI version 13.1.2
* Node.js version: v12.20, v14.15, o v16.10

## Levantar proyecto

* Desde la terminal se debe de escrubir el siguiente comando para levantar el proyecto de forma loca:
	`ng serve`

* Abrir la siguiente url en el navegador:
	`http://localhost:4200/`
  
  NOTA: Por problemas con CORS estos se deben deshabilitar en el navegador, ejemplo con Chome para abrir desde terminal: 
  * Windows: `chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security`
  * Linux: `google-chrome --disable-web-security`

## Testing

Para ejecutar los test realizados ingrese el comando `ng test` en la terminal, si requiere ejecutar las pruebas sin abrir el navegador ingrese `g test --watch=false --browsers=ChromeHeadless`

## Capturas

Lista con properties 

![alt text](https://github.com/asunawesker/easybroker/blob/main/screenshots/easybroker1.png)

Filtrado en lista con properties

![alt text](https://github.com/asunawesker/easybroker/blob/main/screenshots/easybroker2.png)

Card con información de una propiedad en específico

![alt text](https://github.com/asunawesker/easybroker/blob/main/screenshots/easybroker3.png)

Carrusel con imágenes de property

![alt text](https://github.com/asunawesker/easybroker/blob/main/screenshots/easybroker4.png)

Formulario de contacto
![alt text](https://github.com/asunawesker/easybroker/blob/main/screenshots/easybroker5.png)

## Comentarios finales

El proyecto está incompleto, en cuanto a funcionalidad cumple con los requerimientos pero la parte de testing es deficiente. Los servicios http se probaron con éxito pero para la parte de los componentes me costó trabajo elaborar pruebas eficientes, siendo esta un área de oportunidad que tengo que seguir trabajando ya que aún me cuesta hacer pruebas dentro de mi código.

A pesar de ser un proyecto incompleto, estoy contenta con mis resultados porque no solo hice código por hacer, desde un inicio pensé en el framework que más me ayudaría a organizar de mejor forma los requerimientos que se pidieron y en este caso obté por utilizar angular ya que consideré que su arquitectura MVVM facilitaría la realización de este. De igual forma, tener separados mis modelos, servicios y componentes me ayudó al momento de haceer pruebas, al tener deficiencias al crear pruebas de UI, pude hacer de forma aislada pruebas en mis servicios http y probar su funcionamiento por lo que fue una ventaja para mi. 

No creo haber hecho un código espagueti, porque justamente me gusta utilizar angular para este tipo de proyectos porque separa muy bien las distintas funcionalidades, pero sin duda es un código que aún puede refactorizarse, sobretodo el componente contact. 

Uno de los desafíos más grandes que me encontré fue un problema con los CORS. Este problema no lo había detectado porque leyendo al respecto, vi que postman no le toma importancia a los CORS headers, es la primera vez que me enfrento a este problema y a pesar de que fue estresante, esta primera experiencia me ayudó bastante a saber más al respecto ya que si conocía los CORS headers de nombre, pero jamás les había prestado la suficiente atencioń.

Sin lugar a dudas fue una gran experiencia esta prueba técnica, me di cuenta de varias deficiencias que tengo pero también de ciertas fortalezas. Esta experiencia me ayudará a seguir aprendiendo ya que aún tengo áreas de oportunidad que puedo mejorar. 
