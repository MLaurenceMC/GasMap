import { useEffect, useState } from 'react';

export default function ModalForm({
    isOpen,
    onClose,
    mode,
    onSubmit,
    clientData,
}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [rate, setRate] = useState('');
    const [status, setStatus] = useState(false);

    const handleStatusChange = (e) => {
        setStatus(e.target.value === 'Active');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const clientData = {
                name,
                email,
                job,
                rate: Number(rate),
                isactive: status,
            };
            await onSubmit(clientData);
            onClose();
        } catch (err) {
            console.error('Error adding client', err);
        }
        onClose();
    }

    useEffect(() => {
        if (mode === 'edit' && clientData) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setName(clientData.name);
            setEmail(clientData.email);
            setJob(clientData.job);
            setRate(clientData.rate);
            setStatus(clientData.isActive);
        } else {
            setName('');
            setEmail('');
            setJob('');
            setRate('');
            setStatus(false);
        }
    }, [mode, clientData]);

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <h3 className="py-4 text-lg font-bold">
                        {mode === 'edit' ? 'Edit Item' : 'Item Details'}
                    </h3>
                    <form
                        method="dialog"
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        {/* if there is a button in form, it will close the modal */}
                        <label className="input input-bordered flex w-full items-center gap-2">
                            Name
                            <input
                                type="text"
                                className="grow"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {/* <span className="badge badge-neutral badge-xs">Optional</span> */}
                        </label>
                        <label className="input input-bordered flex w-full items-center gap-2">
                            Email
                            <input
                                type="text"
                                className="grow"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex w-full items-center gap-2">
                            Job
                            <input
                                type="text"
                                className="grow"
                                value={job}
                                onChange={(e) => setJob(e.target.value)}
                            />
                        </label>
                        <div className="flex justify-between gap-2">
                            <label className="input input-bordered flex w-1/2 items-center gap-2">
                                Rate
                                <input
                                    type="number"
                                    className="grow"
                                    value={rate}
                                    onChange={(e) => setRate(e.target.value)}
                                />
                            </label>
                            <select
                                className="select select-bordered w-1/2"
                                value={status ? 'Active' : 'Inactive'}
                                onChange={handleStatusChange}
                            >
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                        <button
                            onClick={onClose}
                            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
                        >
                            ✕
                        </button>
                        <button className="btn btn-success">
                            {mode === 'edit' ? 'Save Changes' : 'Add Item'}
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
}
