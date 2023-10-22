import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import './reset.scss';
import "./api/config";

const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);