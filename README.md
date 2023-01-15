# Comedor Oficina Frontend

## Autor

- [Carlos Hidalgo](https://github.com/carlosHidalgo95)

## Principales tecnologías utilizadas

- React
- React-Bootstrap
- React-router-dom
- JavaScript
- HTML
- CSS

## Descripción del proyecto

El proyecto se basa en una prueba técnica en la que se requiere una aplicación web para realizar
reservas en el comedor de una oficina en franjas de 15 minutos para evitar aglomeraciones.
Los requisitos funcionales son:

- Los usuarios pueden registrarse en la aplicación

- Los usuarios pueden autenticarse a través de un login

- Los usuarios pueden ver la lista de platos y filtrarlos

- Los usuarios pueden añadir platos a su reserva

- Los usuarios pueden realizar una reserva

- Los usuarios pueden hacer logout

- Los administradores pueden hacer login

- Los administradores pueden filtrar,modificar,crear y borrar platos

- Los administradores pueden subir imagenes de los platos

- Los administradores pueden consultar las reservas de los usuarios y filtrarlas.

- Los administradores pueden hacer logout

Este proyecto se encargará de gestionar el front, la parte de back se encuentra en el siguiente enlace:

[ProyectoFinalGeeksHubsBackend](https://github.com/carlosHidalgo95/ProyectoFinalGeeksHubsBackend)

## Deployment

El proyecto está publicado en la siguiente URL:

https://main.dk92o12rgtrdi.amplifyapp.com/

Para ejecutar el proyecto de forma local se debe descargar y ejecutar el siguiente comando para descargar las dependencias:

```bash
  npm i
```
Una vez echo esto ejecutamos el proyecto con:

```bash
  npm start
```

## Documentación

La aplicación requiere de estar registrado para poder hacer uso de ella,por lo tanto la página raiz nos lleva directamente al login.

![image](https://user-images.githubusercontent.com/50781684/212573711-e901692b-701f-4f30-ba4b-24a0e4d00df5.png)


En caso de no estar registrados disponemos de un enlace para ir a la página de registro.

![image](https://user-images.githubusercontent.com/50781684/212574186-65fc6ba2-7e79-4c73-813e-aa1fe2bf4fa5.png)

Una vez logeados la página nos redirecciona a la vista de reserva,en esta vista deberemos seleccionar una fecha,una hora,y los 4 platos disponibles. Abajo se puede ver un resumen del pedido y el botón de Reservar.

![image](https://user-images.githubusercontent.com/50781684/212574232-3dc3dc7f-f7ad-4de6-88af-dc63faa60aa1.png)

Al realizar una reserva se nos redirige a la página de historial de reservas,donde podemos ver nuestras reservas realizadas.

{Imagen página historial}

El admin tiene además acceso a una vista donde crear platos nuevos,así como editarlos y borrarlos.

{Imagen vista admin}
