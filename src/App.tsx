import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import AIGrc from "./pages/AIGrc";
import AIMarketing from "./pages/AIMarketing";
import CustomAIAutomation from "./pages/CustomAIAutomation";
import Consultation from "./pages/Consultation";
import SuccessStories from "./pages/SuccessStories";
import Privacy from "./pages/Privacy";
import TermsOfUse from "./pages/TermsOfUse";
import DeepfakeDetection from "./pages/DeepfakeDetection";
import DeepfakeReport from "./pages/DeepfakeReport";
import AdminEmailDashboard from "./pages/AdminEmailDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-grc" element={<AIGrc />} />
          <Route path="/ai-marketing" element={<AIMarketing />} />
          <Route path="/custom-ai-automation" element={<CustomAIAutomation />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/deepfake-detection" element={<DeepfakeDetection />} />
          <Route path="/deepfake-report" element={<DeepfakeReport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
