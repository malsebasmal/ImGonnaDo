function ModalEditList() {
  return (
    <div>
      <form action="" method="post">
        <input type="text" placeholder="Name List" name="name" id="name" value="value Name"/>

        <div>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" value="value Description"/>
        </div>

        <div>
          <label htmlFor="limit">Limit of things to do</label>
          <div>
            <input type="number" name="limit" id="limit" value="2"/>
            <button>unlimited</button>
          </div>
        </div>

        <div>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  )
}


export {
  ModalEditList
}