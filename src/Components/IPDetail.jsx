import IPInfo from "./IPInfo";

export default function IPDetail({ data }) {
  return (
    <>
      <section className="fixed left-1/2 -translate-x-1/2 top-[17.5%] md:top-[20%] z-999 bg-white w-9/10 md:w-8/10 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-4">
        <IPInfo title="IP Address" content={data.ip ?? data.ip} />
        <IPInfo
          title="Location"
          content={`${data.location.city ?? data.location.city}`}
        />
        <IPInfo
          title="Timezone"
          content={data.location.timezone ?? data.location.timezone}
        />
        <IPInfo title="ISP" content={data.isp ?? data.isp} />
      </section>
    </>
  );
}
