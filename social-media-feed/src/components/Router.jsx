import {
    createBrowserRouter, 
    createRoutesFromElements, 
    Route,
    RouterProvider
} from 'react-router-dom';
import { FeedPage, LoginPage, NotFoundPage, PostPage } from '../pages';
import { HeaderLayout } from './Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<LoginPage />}/>
            <Route element={<HeaderLayout />}>
              <Route path='/posts'>
                <Route index element={<FeedPage />}/>
                <Route path=':postId' element={<PostPage />}/>
              </Route>
            </Route>
            <Route path='*' element={NotFoundPage}/>
        </>
    )
)

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router;