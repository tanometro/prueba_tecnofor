export default function validations(task: string) {
  
  let errors = {
      description: ''
  };

  if (task.trim() === '') {
      errors.description = "El campo no puede estar vacío";
  } else if (task.length > 255) {
      errors.description = "La tarea no puede superar los 255 caracteres";
  } else if (task.length < 1) {
      errors.description = "La tarea debe contener al menos 1 caracter";
  }
  
  return errors;
}


