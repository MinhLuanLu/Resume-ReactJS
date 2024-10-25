// App.jsx
import { Outlet } from 'react-router-dom';
import { ChangePageProvider } from '../contextAPI/changePageContext';
import Navigation from './Navigation'; // Assuming you have a Navigation component

function App() {
  return (
    <ChangePageProvider>
      <div>
        <Navigation />
        <main>
          <Outlet /> {/* This is where child routes will render */}
        </main>
      </div>
    </ChangePageProvider>
  );
}

export default App;
