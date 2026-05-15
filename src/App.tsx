import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import People from "./pages/People";
import Submit from "./pages/Submit";
import MendPage from "./pages/Mend";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RedirectToGoogleForm = () => {
  window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSeaNrIqdNe7AfZ2ReeNtbangxboxv3xz_as4G2h_3tdhFP0Xg/viewform?usp=dialog";
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/people/:year" element={<People />} />
              <Route path="/people" element={<People />} />
              <Route path="/submit" element={<Submit />} />
              <Route path="/mend" element={<MendPage />} />
              <Route path="/join" element={<RedirectToGoogleForm />} />
              <Route path="/news" element={<News />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
