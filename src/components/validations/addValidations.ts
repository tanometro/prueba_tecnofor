export default function addValidations(task: string) {
  
  let errors = {
      description: '',
      hasErrors: false,
  };

  if (task.trim() === '') {
      errors.description = "El campo no puede estar vacío *";
      errors.hasErrors = true;
  } else if (task.length > 255) {
      errors.description = "La tarea no puede superar los 255 caracteres";
      errors.hasErrors = true;
  } else if (task.length < 1) {
      errors.description = "La tarea debe contener al menos 1 caracter";
      errors.hasErrors = true;
  }
  
  return errors;
}