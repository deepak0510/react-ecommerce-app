import React from 'react';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="grid-container">
      <header>
        <a href="/">ECommerce site</a>
      </header>
      <main>
        Product List
        </main>
      <footer>
        Copyright  © {currentYear}  All rights reserved
        </footer>

    </div>
  );
}

export default App;
