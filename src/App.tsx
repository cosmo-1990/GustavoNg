
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from '@/context/LanguageContext';
import { useEffect } from "react";

// Pages
import Index from "./pages/Index";
import Biography from "./pages/Biography";
import Articles from "./pages/Articles";
import Press from "./pages/Press";
import Books from "./pages/Books";
import Photos from "./pages/Photos";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Set the default language based on browser
  useEffect(() => {
    const htmlTag = document.documentElement;
    htmlTag.lang = 'es';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/biografia" element={<Biography />} />
              <Route path="/articulos" element={<Articles />} />
              <Route path="/articulos/:slug" element={<Articles />} />
              <Route path="/prensa" element={<Press />} />
              <Route path="/libros" element={<Books />} />
              <Route path="/fotos" element={<Photos />} />
              <Route path="/fotos/:id" element={<Gallery />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
