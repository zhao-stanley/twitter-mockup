export default function Icon({ setSelected }) {
  return (
    <i
      className="devicon-twitter-original colored text-2xl p-2 hover:bg-blue-100 w-min h-min rounded-full transition ease-in-out ml-2 cursor-pointer"
      onClick={() => setSelected(0)}
    ></i>
  );
}
