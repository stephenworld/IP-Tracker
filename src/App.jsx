import Form from "./Components/Form";
import IPDetail from "./Components/IPDetail";
import Map from "./Components/Map";
import desktopBackground from "./assets/images/pattern-bg-desktop.png";
import mobileBackground from "./assets/images/pattern-bg-mobile.png";
export default function App() {
  const isMobile = window.innerWidth <= 768;
  const bgImage = isMobile ? mobileBackground : desktopBackground;
  return (
    <main className="h-screen relative">
      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative bg-cover bg-no-repeat px-[5%] md:px-16 py-8 pb-16 h-3/10"
      >
        <div className="w-full md:w-1/2 m-auto">
          <header className="text-center mb-4">
            <h1 className="text-3xl font-semibold text-gray-100">
              IP Address Tracker
            </h1>
          </header>
          <Form />
        </div>
      </section>
      <IPDetail />
      <Map />
    </main>
  );
}
