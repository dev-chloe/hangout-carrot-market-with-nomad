export default function Home() {
  return <div className="py-20 px-10">
    <details className="select-non open:text-white open:bg-indigo-400">
      <summary className="cursor-pointer">What is my fav. food.</summary>
      <span className="selection:bg-yellow-200">돼지고기</span>
      <span className="selection:bg-yellow-300">소고기</span>
    </details>
    <ul className="list-decimal marker:text-teal-500">
      <li>hi</li>
      <li>hi</li>
      <li>hi</li>
    </ul>
    <input type="file" className="file:cursor-pointer file:transition-colors file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border-2 file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-300" />
    <p className="first-letter:text-7xl first-letter:hover:text-purple-400">Hello everyone!</p>
  </div>; 
}
 