import IPInfo from "./IPInfo";

export default function IPDetail() {
  return (
    <section className="absolute bg-white w-8/10 p-8 left-1/10 right-1/10 rounded-xl top-[20%] shadow-lg flex gap-4">
      <IPInfo title="IP Address" content="" />
      <IPInfo title="Location" content="" />
      <IPInfo title="Timezone" content="" />
      <IPInfo title="ISP" content="" />
    </section>
  );
}
