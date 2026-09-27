import { NavLink, Outlet } from 'react-router'
import './App.css'

/** Provides the shared sidebar and page layout. */
function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <nav className="sidebar-nav" aria-label="Основная навигация">
          <NavLink to="/" end className={({ isActive }) => `sidebar-link${isActive ? ' sidebar-link-active' : ''}`}>
            Карточки
          </NavLink>
          <NavLink
            to="/decomposition"
            className={({ isActive }) => `sidebar-link${isActive ? ' sidebar-link-active' : ''}`}>
            Декомпозиция
          </NavLink>
        </nav>
      </aside>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default App
