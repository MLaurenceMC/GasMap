export default function ModalForm({ isOpen, onClose, mode, OnSubmit }) {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box flex w-auto flex-col flex-wrap items-start gap-2">
          <h3 className="text-lg font-bold">
            {mode === 'edit' ? 'Edit Item' : 'Item Details'}
          </h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <label className="input input-bordered flex w-full items-center gap-2">
              Name
              <input type="text" className="grow" placeholder="Product Name" />
              {/* <span className="badge badge-neutral badge-xs">Optional</span> */}
            </label>
            <div className="flex justify-between">
              <label className="input input-bordered flex items-center gap-2">
                Quantity
                <input type="number" className="grow" placeholder="20" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Price
                <input type="number" className="grow" placeholder="5.99" />
              </label>
            </div>
            <label className="input input-bordered flex w-full items-center gap-2">
              Location
              <input type="text" className="grow" placeholder="Philippines" />
            </label>
            <select
              defaultValue="Status"
              className="select select-bordered w-full"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
            >
              ✕
            </button>
          </form>
          <button className="btn btn-success">
            {mode === 'edit' ? 'Save Changes' : 'Add Item'}
          </button>
        </div>
      </dialog>
    </>
  );
}
