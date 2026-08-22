import { useState } from "react";

export default function SideBar({ children, isOpen }) {

    const [fuelType, setFuelType] = useState('all');
    const [company, setCompany] = useState(0); // 0 = all
    const [paymentMethod, setPaymentMethod] = useState(
        // cash, credit
        Array(6).fill(false)
    );

  return (
    <div className={`drawer ${isOpen ? "drawer-open" : ""} h-full`}>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        { children}
        {/* <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side h-full">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {/* fuel filter */}
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
          {/* gas company */}
          {/* price range */}
          {/* payment method */}
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
