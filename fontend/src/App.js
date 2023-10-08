import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/Products/ProductList';
function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <ProductList />
      </div>
    </>
  );
}

export default App;
