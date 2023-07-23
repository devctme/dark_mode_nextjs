export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col  justify-around items-center bg-slate-200  p-6 gap-4 dark:bg-slate-800 dark:text-white">
        <div className="rounded-full w-52 h-52 bg-white dark:bg-slate-800 border-2 border-indigo-500 dark:border-y-teal-400"></div>
        <h2 className="text-4xl">Title</h2>
        <p className="text-2xl">Slogan</p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, aut!
        </p>
        <button className="bg-emerald-600 p-5 rounded text-2xl bold">
          Free acess
        </button>
      </div>
    </main>
  );
}
