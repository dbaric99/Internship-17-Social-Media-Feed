import { Navigation } from '../Navigation';
import {Outlet, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { localStorageUtil } from 'utils';

function HeaderLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    let lastLogin = localStorageUtil.getFromLocalStorage('user').loginCap;
    if(new Date(lastLogin) <= new Date()) {
      navigate('/', {replace: true});
    }
  }, [])

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