import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const getProducts = async() => {
      const response = await fetch('/api/v1/products');
      const products = await response.json();
      console.log(products);
      console.log('MORE CHANGES');
    } 

    getProducts();
  }, []);

  return (
    <>
      <h1>Products R Great</h1>
    </>
  )
}

export default App
