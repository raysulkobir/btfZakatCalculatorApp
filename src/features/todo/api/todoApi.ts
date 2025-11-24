// Optional stub showing how you’d wire backend calls.
// Replace with real endpoints or use RTK Query later.
import { get, post, del } from '@/services/http';

export const fetchTodos = () => get('/todos');                  // GET /todos
export const createTodo = (title: string) => post('/todos', { title }); // POST /todos
export const deleteTodo = (id: string) => del(`/todos/${id}`);  // DELETE /todos/:id
