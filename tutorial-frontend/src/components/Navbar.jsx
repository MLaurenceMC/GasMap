export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search"
          className="input w-60 md:w-auto"
        />
      </div>
      <div className="navbar-end">
        <button className={`btn btn-primary w-20`} >
                Button</button>
      </div>
    </div>
  );
}
