import { useState } from 'react';

export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === 'Active');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="py-4 text-lg font-bold">
            {mode === 'edit' ? 'Edit Item' : 'Item Details'}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}
            <label className="input input-bordered my-4 flex w-full items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
              />
              {/* <span className="badge badge-neutral badge-xs">Optional</span> */}
            </label>
            <div className="my-4 mb-4 flex justify-between">
              <label className="input input-bordered mr-4 flex items-center gap-2">
                Quantity
                <input
                  type="number"
                  className="grow"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="20"
                />
              </label>
              <label className="input input-bordered mr-4 flex items-center gap-2">
                Price
                <input
                  type="number"
                  className="grow"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="5.99"
                />
              </label>
            </div>
            <label className="input input-bordered my-4 flex w-full items-center gap-2">
              Location
              <input
                type="text"
                className="grow"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Philippines"
              />
            </label>
            <select
              defaultValue="Status"
              className="select select-bordered w-full"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
            >
              ✕
            </button>
            <button className="btn btn-success my-4">
              {mode === 'edit' ? 'Save Changes' : 'Add Item'}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
