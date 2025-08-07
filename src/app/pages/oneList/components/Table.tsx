const Table = () => {
  return (
    <table className="table-auto w-full bg-white">
      <thead>
        <tr className="border-b-2 border-solid text-center border-pink-500 divide-x-2 divide-pink-500">
          <th className="px-4 py-4">N°</th>
          <th className="px-4 py-4">Thing you do</th>
          <th className="px-4 py-4">Date realice</th>
          <th className="px-4 py-4">Check</th>
        </tr>
      </thead>
      <tbody className="text-center divide-y-2 divide-pink-500">
        <tr className="divide-x-2 divide-pink-500">
          <td className="px-4 py-4">1</td>
          <td className="px-4 py-4">Comer</td>
          <td className="px-4 py-4">-</td>
          <td className="px-4 py-4">
            <input type="checkbox" name="" id="" />
          </td>
        </tr>
        <tr className="divide-x-2 divide-pink-500">
          <td className="px-4 py-4">1</td>
          <td className="px-4 py-4">Comer</td>
          <td className="px-4 py-4">-</td>
          <td className="px-4 py-4">
            <input type="checkbox" name="" id="" />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table