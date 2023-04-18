import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='p-8 font-bold text-4xl text-center'>Your Todo List</div>

      <hr className='w-11/12 ml-auto mr-auto border-black' />

      <TodoList />

      <Footer />

    </>
  );
}

export default App;