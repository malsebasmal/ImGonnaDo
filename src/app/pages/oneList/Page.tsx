import { Progress } from '@ark-ui/react/progress'
import Table from "@app/pages/oneList/components/Table"
import ButtonAddTask from '@app/pages/oneList/components/ButtonAddTask'

const OneListPage = () => {
  return (
    <div className="w-full">
      <header className="w-full text-center mb-4 flex flex-col items-center justify-center gap-2">
        <h3 className="text-6xl">
          TitleName
        </h3>
        <p className="w-full text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia amet eius architecto eveniet aspernatur aliquam quo officiis, odit placeat tempora. Laborum maxime voluptatibus suscipit, ut mollitia beatae excepturi quaerat. Nisi.
        </p>
      </header>
      <main className="w-full h-full">
        <section className="w-full flex flex-col items-center justify-center gap-4">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Progress.Root defaultValue={42} className="w-full">
              <Progress.Track className="w-full h-6 bg-gray-200 relative overflow-hidden">
                <Progress.Range className="h-full bg-pink-500 rounded-md" />
                <span className="text-black font-semibold absolute inset-0 flex items-center justify-center">
                  42%
                </span>
              </Progress.Track>
            </Progress.Root>
            <label className="w-full flex items-center justify-start gap-2 rounded-xl border-2 border-pink-500 px-4 py-2" htmlFor="">
              🔍 <input type="text" name="buscar" id="" placeholder="Buscar" className="w-full focus:outline-0 focus:bg-white" />
            </label>
          </div>
          <div className="w-full overflow-hidden border-2 border-solid border-pink-500 rounded-xl">
            <Table />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
          <ButtonAddTask />
            <button className="w-full rounded-full p-2 border-2 border-red-700 hover:bg-red-400 transition-all duration-200 ease-out cursor-pointer cursor-pointer">
              remove task
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default OneListPage