export default function NavBar({ onOpen, onSearch }) {
    const handleSearchChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">CRUD</a>
            </div>
            <div className="navbar-center">
                <input
                    type="text"
                    placeholder="Search"
                    onChange = {handleSearchChange}
                    className="input w-60 md:w-auto"
                />
            </div>
            <div className="navbar-end">
                <a className={`btn btn-primary w-20`} onClick={onOpen}>
                    Add
                </a>
            </div>
        </div>
    );
}
