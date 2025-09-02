import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import EngineRepair from "./pages/EngineRepair";
import Diagnostics from "./pages/Diagnostics";
import Appointment from "./pages/Appointment";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Transmission from "./pages/Transmission";
import BrakeSystem from "./pages/BrakeSystem";
import Suspension from "./pages/Suspension";
import Electrical from "./pages/Electrical";
import AirConditioning from "./pages/AirConditioning";
import BodyRepair from "./pages/BodyRepair";
import Maintenance from "./pages/Maintenance";
import Parts from "./pages/Parts";
import Repair from "./pages/Repair";
import Team from "./pages/Team";
import Certificates from "./pages/Certificates";
import Warranty from "./pages/Warranty";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import TireService from "./pages/TireService";
import Tuning from "./pages/Tuning";
import Insurance from "./pages/Insurance";
import Evacuation from "./pages/Evacuation";
import CarWash from "./pages/CarWash";
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
          <Route path="/engine-repair" element={<EngineRepair />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/transmission" element={<Transmission />} />
          <Route path="/brake-system" element={<BrakeSystem />} />
          <Route path="/suspension" element={<Suspension />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="/air-conditioning" element={<AirConditioning />} />
          <Route path="/body-repair" element={<BodyRepair />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/team" element={<Team />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tire-service" element={<TireService />} />
          <Route path="/tuning" element={<Tuning />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/evacuation" element={<Evacuation />} />
          <Route path="/car-wash" element={<CarWash />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;