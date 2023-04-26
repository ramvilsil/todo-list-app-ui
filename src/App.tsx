import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
    <>

      <div className='mt-6'></div>

      <div className='p-6 font-bold text-4xl text-center'>Your Todo List</div>

      <TodoList />

      <Footer />

    </>
  );
}

export default App;