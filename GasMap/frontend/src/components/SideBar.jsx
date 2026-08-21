export default function SideBar({ isOpen }) {
  return (
    <div className={`drawer ${isOpen ? "drawer-open" : ""}`}>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {/* <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Fuel:</a>
          </li>
          <div className="filter basis-full justify-center">
            <input
              className="btn filter-reset"
              type="radio"
              name="metaframeworks"
              aria-label="All"
            />
            <input
              className="btn
              checked:bg-amber-500"
              type="radio"
              name="metaframeworks"
              aria-label="Diesel"
            />
            <input
              className="btn
              checked:bg-green-500"
              type="radio"
              name="metaframeworks"
              aria-label="Regular"
            />
            <input
              className="btn
              checked:bg-red-500"
              type="radio"
              name="metaframeworks"
              aria-label="Premium"
            />
          </div>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
