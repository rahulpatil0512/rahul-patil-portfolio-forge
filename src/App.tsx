
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import CurrentRole from "./pages/CurrentRole";
import ProjectDetail from "./pages/ProjectDetail";
import BackgroundEducation from "./pages/BackgroundEducation";
import InterestsHobbies from "./pages/InterestsHobbies";
import Connect from "./pages/Connect";
import Resume from "./pages/Resume";
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/current-role" element={<CurrentRole />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/background-education" element={<BackgroundEducation />} />
          <Route path="/interests-hobbies" element={<InterestsHobbies />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/resume" element={<Resume />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
