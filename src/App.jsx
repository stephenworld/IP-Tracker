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
    city: "Mountain View",
    lat: 37.40599,
    lng: -122.078514,
    postalCode: "94043",
    timezone: "-07:00",
    geonameId: 5375481,
  },
  domains: [
    "0d2.net",
    "003725.com",
    "0f6.b0094c.cn",
    "007515.com",
    "0guhi.jocose.cn",
  ],
  as: {
    asn: 15169,
    name: "Google LLC",
    route: "8.8.8.0/24",
    domain: "https://about.google/intl/en/",
    type: "Content",
  },
  isp: "Google LLC",
};
export default function App() {
  const [formData, setFormData] = useState(dummyData);
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const API_KEY = "at_fp8LbMNVHk5bFCjsPSeVTZ0pX74c9";
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${input}&domain=${input}`;
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
