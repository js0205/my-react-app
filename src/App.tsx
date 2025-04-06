import  { Suspense }  from 'react';
import {  RouterProvider } from 'react-router-dom';
import routes from './router';
function App() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <RouterProvider router={routes}/>
    </Suspense>
  );
}

export default App;