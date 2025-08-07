import List from "@app/pages/allList/components/List"

const Page = () => {
  return (
    <div className="w-full">
      <header className="w-full text-center mb-6">
        <h1 className="text-6xl">
          I'm gonna Do
        </h1>
      </header>
      <main className="w-full h-full">
        <section className="w-full flex flex-col items-center justify-center gap-6">
          <section className="w-full flex flex-col items-center justify-center gap-4">
            <List />
            <List />
          </section>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <button className="w-full rounded-full p-2 border-2 border-blue-700 hover:bg-blue-400 transition-all duration-200 ease-out">
              add list
            </button>
            <button className="w-full rounded-full p-2 border-2 border-red-700 hover:bg-red-400 transition-all duration-200 ease-out">
              remove list
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page