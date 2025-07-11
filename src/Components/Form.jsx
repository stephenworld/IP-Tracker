import arrow from "../assets/images/icon-arrow.svg";
export default function Form({ handleSubmit, handleInput, input }) {
  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      className="w-full flex items-center rounded-md overflow-hidden"
    >
      <input
        className="w-full text-sm px-4 py-2 h-12 bg-white border-none outline-none placeholder:text-gray-900"
        type="text"
        placeholder="Search for an IP address or domain"
        value={input}
        onChange={handleInput}
      />
      <button
        type="submit"
        className="cursor-pointer bg-gray-900 p-2 h-12 w-14 flex justify-center items-center"
      >
        <img src={arrow} alt="arrow" />
      </button>
    </form>
  );
}
