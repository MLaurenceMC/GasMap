export default function ModalForm({ isOpen, onClose, mode, OnSubmit }) {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal"
      open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Item' : 'Item Details'}</h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" onClick={onClose}>
              ✕
            </button>
            <button className="btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Item'}</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
