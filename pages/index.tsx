export default function Home() {
  return <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
    <div className="bg-white p-6 rounded-3xl shadow-xl">
      <span className="font-semibold text-3xl">Select Item</span>
      <ul> 
        {[1, 2, 3, 4].map((i) => (
          <li key={i} className="flex justify-between my-2 odd:bg-blue-50 even:bg-red-300">
            <span className="text-gray-500">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </li>
        ))}
      </ul>
      <ul>
        {["a", "b", "c", ""].map((c, i) => <li className="bg-red-500 py-2 empty:hidden" key={i}>{c}</li>)}
      </ul>
      <div className="mt-2 pt-2 border-t-2 border-dashed border-gray-300 flex justify-between">
        <span>Total</span>
        <span className="font-semibold">$19</span>
      </div>
      <button className="flex mt-5 bg-blue-500 text-white p-3 justify-center rounded-xl w-2/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500">
        Checkout
      </button>
    </div>
    <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
      <div className="bg-blue-500 p-6 pb-14">
        <span className="text-white text-2xl">Profile</span>
      </div>
      <div className="rounded-3xl p-6 bg-white relative -top-5">
        <div className="flex relative -top-16 items-end justify-between">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Oders</span>
            <span className="font-medium">$340</span>
          </div>
          <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-300 transition-colors" />
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Spent</span>
            <span className="font-medium">$340</span>
          </div> 
        </div>
        <div className="relative flex flex-col items-center -mt-10 -mb-5">
          <span className="text-lg font-medium">Tony Molly</span>
          <span className="text-sm text-gray-500">USA</span>
        </div>
      </div>
    </div>
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <div className="flex justify-between items-center mb-5">
        <span>←</span>
        <div className="space-x-3">
          <span>⭐️4.9</span>
          <span className="shadow-xl p-2 rounded-md">❤️</span>
        </div>
      </div>
      <div className="bg-zinc-400 h-72 mb-5"/>
      <div className="flex flex-col">
        <span className="font-medium text-xl">Swoon Lounge</span>
        <span className="text-xs text-gray-500">Chair</span>
        <div className="mt-3 mb-5 flex justify-between items-center">
          <div className="space-x-2">
            <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
            <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"/>
            <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
          </div>
          <div className="flex items-center space-x-5">
            <button className="bg-blue-200 flex justify-center aspect-square w-8 font-medium text-xl rounded-lg text-gray-500">-</button>
            <span>1</span>
            <button className="bg-blue-200 flex justify-center aspect-square w-8 font-medium text-xl rounded-lg text-gray-500">+</button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-2xl">$450</span>
          <button className="py-2 px-5 bg-blue-500 text-center text-xs text-white rounded-lg">Add to cart</button>
        </div>
      </div>
    </div>
      <form className="flex flex-col space-y-2 p-5 bg-blue-200 focus-within:bg-blue-100">
      <input
        type="text"
        required
        placeholder="Username"
        className="border p-1 peer border-gray-400 rounded-md"
      />
      <span className="hidden peer-invalid:block peer-invalid:text-red-400">This input is invalid</span>
      <span className="hidden peer-hover:block peer-valid:text-teal-600">hi</span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  </div>;
}
 