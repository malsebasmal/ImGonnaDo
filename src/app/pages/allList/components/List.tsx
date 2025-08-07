const List = () => {
  return (
    <div className="rounded-xl border-2 border-pink-500 hover:bg-pink-300 transition-all duration-200 ease-out w-full flex items-center justify-between p-4">
      <div className="w-full flex flex-col items-start justify-center">
        <h4 className="text-xl font-semibold">
          TitleName
        </h4>
        <p>
          Description
        </p>
      </div>
      <div>
        trashImg
      </div>
    </div>
  )
}

export default List