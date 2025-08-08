import { Dialog, Portal } from "@ark-ui/react"

const ButtonAddTask = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="w-full rounded-full p-2 border-2 border-blue-700 hover:bg-blue-400 transition-all duration-200 ease-out cursor-pointer">
        add task
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop className="fixed inset-0 bg-black/50"/>
        <Dialog.Positioner className="fixed inset-0 flex items-center justify-center">
          <Dialog.Content className="w-xl bg-white p-4">
            <form action="" className="w-full flex flex-col items-center justify-center text-center divide-y-2 divide-pink-500">
              <div className="w-full pb-2">
                <p className="text-2xl font-semibold">N° 1</p>
              </div>
              <div className="w-full flex flex-col items-start justify-center text-start py-4">
                <p className="text-xl font-semibold">Thing you do</p>
                <textarea className="w-full resize-none text-lg mt-1 focus field-sizing-content min-h-20 max-h-60 focus-visible:outline-pink-500 focus-visible:rounded-xl border-2 border-pink-300 rounded-xl p-2">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
                </textarea>
              </div>
              <div className="w-full flex items-center justify-center gap-2 text-xl py-4">
                <p className="font-semibold">date realice</p>
                <p>01/11/2004</p>
              </div>
              <div className="w-full flex items-center justify-center gap-2 text-xl py-4">
                <p className="font-semibold">check</p>
                <input type="checkbox" name="" id="" />
              </div>
              <button className="text-xl mt-4 w-full rounded-full p-2 border-2 border-green-700 hover:bg-green-400 transition-all duration-200 ease-out cursor-pointer">
                save task
              </button>
            </form>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default ButtonAddTask