import { Footer, Header } from "compositions";
import { AllProviders } from "data";
import AppointmentBooking from "./examples/AppointmentBooking";

function App() {
  return (
    <AllProviders>
      <Header />
      <AppointmentBooking />
      <Footer />
    </AllProviders>
  );
}

export default App;
