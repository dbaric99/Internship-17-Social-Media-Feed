import { Navigation } from '../Navigation';
import {Outlet} from 'react-router-dom';
import styles from './HeaderLayout.module.css';

function HeaderLayout() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export {HeaderLayout}