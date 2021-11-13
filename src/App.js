import { ItemList } from './item-list/item-list';

function App() {
  return (
    <div className="App">
      <ItemList items={[1,3,5,3,9,5]} />
    </div>
  );
}

export default App;
