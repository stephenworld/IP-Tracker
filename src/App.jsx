import { useState, useEffect } from "react";
import Form from "./Components/Form";
import IPDetail from "./Components/IPDetail";
import Map from "./Components/Map";
import desktopBackground from "./assets/images/pattern-bg-desktop.png";
import mobileBackground from "./assets/images/pattern-bg-mobile.png";

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
  const [err, setErr] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(false);

  const bgImage = isMobile ? mobileBackground : desktopBackground;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();

    const ipRegex =
      /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

    const isIP = ipRegex.test(input);
    if (!isIP && !/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input)) {
      setErr("Please enter a valid IP address or domain.");
      return;
    }

    setLoading(true);
    setErr(null);

    const API_KEY = "at_fp8LbMNVHk5bFCjsPSeVTZ0pX74c9";
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${
      isIP ? "ipAddress" : "domain"
    }=${encodeURIComponent(input)}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
        setErr(null);
      })
      .catch((error) => {
        setErr("Failed to fetch data.");
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));
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
          {err && (
            <p className="text-red-300 text-sm mt-2 text-center">{err}</p>
          )}
        </div>
      </section>

      {loading ? (
        <p className="text-center mt-10 font-medium">Loading...</p>
      ) : (
        <>
          <Map
            position={[
              formData?.location?.lat || 6.5244,
              formData?.location?.lng || 3.3792,
            ]}
          />
          <IPDetail data={formData} />
        </>
      )}
    </main>
  );
}
