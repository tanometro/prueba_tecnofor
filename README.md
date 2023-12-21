
✅ Utiliza React y Typescript para construir la aplicación.
✅Deberá tener el look and feel de Atlassian. Puedes basarte en componentes de Atlaskit a tu elección para ello.
✅Utiliza CSS, puedes optar por CSS puro, SASS o cualquier biblioteca de tu elección, como Bootstrap o Tailwind
✅Utiliza algún tipo de almacenamiento local para persistir las tareas. Puedes usar Local Storage.
✅Agrega una validación básica para evitar que se puedan agregar tareas vacías.
✅Implementa las siguientes funcionalidades:
✅Agregar una nueva tarea
✅Marcar una tarea como completada
✅Eliminar una tarea
✅Filtrar tareas por completadas o no completadas
✅Borrar todas las tareas completadas a la vez.
 
¡Hola!

Esta mini app, es una todo-app. Sirve para agregar tareas a un listado de tareas, marcarlas como realizadas y/ o eliminarlas.
Está hecha con Next.js, TypeScript y Tailwind.

Consideraciones:
Empecé la app usando los componentes que me brinda Atlassian (Form, Navigation, Field, PrimaryButton, etc) pero realmente me generaban muchos conflictos con cualquier librería que use, como Jest, entre otras. Ni hablar de la versión de React, que requiere de la versión 16 para atrás. Por lo que perdí 3 días avanzando, 2 días resolviendo conflictos y finalmente desistí, al fin y al cabo la prueba no es saber usar esos componentes :-D 

Así que desinstalé el kit de Atlassian e hice manualmente con Tailwind todo.

No existe en el universo Atlassian algo igual con las mismas características, por lo que me inspiré en varios softs de ellos, usando la navbar estándar (al que le agregué componentes que no hacen nada para que se parezca al menos), y el todo-list me inspiré en una app similar proporcionada por la empresa (https://www.atlassian.com/software/confluence/templates/to-do-list), al que le agregué la vista de las tareas hechas y las eliminadas.
Para las acciones, me inspiré en componentes Atlassian, como que no permita que se agregue una nueva tarea vacía simplemente evita el input. 

Finalmente ya con tiempo, agregué validaciones primero y pruebas sucesivamente.

¡Saludos!