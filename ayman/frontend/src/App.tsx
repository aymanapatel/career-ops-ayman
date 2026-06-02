import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { CompanyList } from './pages/CompanyList';
import { ResumeViewer } from './pages/ResumeViewer';
import { XlsxPage } from './pages/features/xlsx';
import { DbProvider } from './pages/features/xlsx/DbProvider';
import type { CompileStatus } from './types';

export default function App() {
  const [compileStatus, setCompileStatus] = useState<CompileStatus>({ type: 'idle' });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout compileStatus={compileStatus}>
              <CompanyList />
            </MainLayout>
          }
        />
        <Route
          path="/viewer"
          element={
            <MainLayout compileStatus={compileStatus}>
              <ResumeViewer
                compileStatus={compileStatus}
                onCompileStatusChange={setCompileStatus}
              />
            </MainLayout>
          }
        />
        <Route
          path="/xlsx"
          element={
            <DbProvider>
              <MainLayout compileStatus={compileStatus}>
                <XlsxPage />
              </MainLayout>
            </DbProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
