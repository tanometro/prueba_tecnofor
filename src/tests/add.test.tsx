import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Add from '../components/Add';

describe('<Add />', () => {
  describe('Adds a task', () => {
    it('should add the task correctly when the form is submitted', () => {
      const { getByPlaceholderText, getByTestId } = render(<Add placeholder="Agrega las TecnoTareas de hoy" />);

      // Debo buscar el input por su placeholder y escribo "Nueva tarea"
      // Busco el form y lo envío
      //Controlo que la tarea se haya agregado al estado de tareas
      const input = getByPlaceholderText('Agrega las TecnoTareas de hoy');
      fireEvent.change(input, { target: { value: 'Nueva tarea' } });
      const form = getByTestId('add-form');
      fireEvent.submit(form);

      expect(getByTestId('todo-list').textContent).toBe('Nueva tarea');
    });
  });
});