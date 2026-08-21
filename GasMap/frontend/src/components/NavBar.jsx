export default function NavBar({ onOpen }) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <button className="btn btn-square btn-ghost"
        onClick={onOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </button>
        <div className="flex-none">
          <a className="btn btn-ghost text-xl">GasMap</a>
        </div>
      </div>
      <div className="navbar-end mx-4">
        <input
          type="checkbox"
          value="dracula"
          className="
            toggle 
            theme-controller 
            col-span-2 
            col-start-1 
            row-start-1 
            border-amber-500
            bg-accent
            [--tglbg:var(--color-sky-500)] 
            checked:border-blue-800 
            checked:bg-blue-300 
            checked:[--tglbg:var(--color-blue-900)]
            "
        />
      </div>
    </div>
  );
}
