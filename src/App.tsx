
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Teams from "./pages/Teams";
import Referees from "./pages/Referees";
import Fields from "./pages/Fields";
import Matches from "./pages/Matches";
import Standings from "./pages/Standings";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider collapsedWidth={56}>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-16 border-b bg-white flex items-center px-4">
                <SidebarTrigger />
                <div className="ml-4">
                  <h1 className="text-xl font-semibold">Sistema de Gestión de Liga</h1>
                </div>
              </header>
              <main className="flex-1 p-6 bg-gray-50">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/equipos" element={<Teams />} />
                  <Route path="/arbitros" element={<Referees />} />
                  <Route path="/campos" element={<Fields />} />
                  <Route path="/partidos" element={<Matches />} />
                  <Route path="/clasificaciones" element={<Standings />} />
                  <Route path="/configuracion" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
