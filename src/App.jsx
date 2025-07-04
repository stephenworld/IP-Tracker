import { useState } from "react";
import Form from "./Components/Form";
import IPDetail from "./Components/IPDetail";
import Map from "./Components/Map";
import desktopBackground from "./assets/images/pattern-bg-desktop.png";
import mobileBackground from "./assets/images/pattern-bg-mobile.png";
const isMobile = window.innerWidth <= 768;
const bgImage = isMobile ? mobileBackground : desktopBackground;
const dummyData = {
  ip: "8.8.8.8",
  location: {
    country: "US",
    region: "California",
    timezone: "-07:00",
    lat: 37.386,
    lng: -122.0838,
    city: "Mountain View",
  },
  isp: "Google LLC",
};
export default function App() {
  const [formData, setFormData] = useState(dummyData);
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const API_KEY = "at_Exzd1IFm0dzpSdXFFPwQNr71KR1up";
    const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}&ipAddress=${input}&domain=${input}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFormData(data));

    console.log(formData);
  }
  return (
    <main className="h-screen relative">
      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-cover bg-center bg-no-repeat px-[5%] md:px-16 py-8 pb-16 h-3/10"
      >
        <div className="w-full md:w-1/2 m-auto">
          <header className="text-center mb-4">
            <h1 className="text-3xl font-semibold text-gray-100">
              IP Address Tracker
            </h1>
          </header>
          <Form
            handleSubmit={handleSubmit}
            input={input}
            handleInput={(e) => setInput(e.target.value)}
          />
        </div>
      </section>
      <Map
        position={[
          formData?.location?.lat || 6.5244,
          formData?.location?.lng || 3.3792,
        ]}
      />
      <IPDetail data={formData} />
    </main>
  );
}
