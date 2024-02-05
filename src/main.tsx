import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'
import {Provider as StoreProvider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import store from "@/app/store";
import router from '@/routes/Routes';

import './index.scss';
import 'normalize.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <StoreProvider store={store}>
            <RouterProvider router={router}/>
        </StoreProvider>
    </StrictMode>
)
