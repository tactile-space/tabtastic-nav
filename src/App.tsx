
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopNav from "./components/Navigation/DesktopNav";
import MobileNav from "./components/Navigation/MobileNav";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen w-full bg-white">
          <DesktopNav />
          <main className="pt-16 pb-16 lg:pb-0">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/deals" element={<NotFound />} />
              <Route path="/chat" element={<NotFound />} />
              <Route path="/profile" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <MobileNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
