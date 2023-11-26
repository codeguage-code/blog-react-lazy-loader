import LazyImage from './LazyImage';

function App() {
   return (
      <>
         <h1>Demonstrating lazy loading</h1>
         <p style={{ marginBottom: 1000 }}>Slowly scroll down until you bring the lazy image into view.</p>
         <LazyImage src="/image.jpg" />
      </>
   );
}

export default App;