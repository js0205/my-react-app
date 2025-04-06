import  { Suspense }  from 'react';
import {  RouterProvider } from 'react-router-dom';
import routes from './router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
function App() {
  return (
    <ConfigProvider locale={zhCN}>
       <Suspense fallback={<div>加载中...</div>}>
         <RouterProvider router={routes}/>
       </Suspense>
    </ConfigProvider>
  );
}

export default App;