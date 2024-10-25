// App.jsx
import { Outlet } from 'react-router-dom';
import { ChangePageProvider } from '../contextAPI/changePageContext';


function App() {
  return (
    <ChangePageProvider>
      <div>
        <main>
          <Outlet /> {/* This is where child routes will render */}
        </main>
      </div>
    </ChangePageProvider>
  );
}

export default App;
