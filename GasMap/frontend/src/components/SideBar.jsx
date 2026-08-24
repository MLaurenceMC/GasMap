import { useState } from "react";

function getUniqueBrands(stations) {
  return [...new Set(stations.map((station) => station.brand))];
}
function getUniquePaymentMethods(stations) {
  return [...new Set(stations.flatMap((station) => station.paymentMethods))];
}

export default function SideBar({
  children,
  isOpen,
  stationsData,
//   filter,
  setFilter
}) {
  const paymentMethods = getUniquePaymentMethods(stationsData);
  const brands = getUniqueBrands(stationsData);

  const handleFuelTypeChange = (fuelType) => {
    setFilter((prev) => [fuelType, prev[1], prev[2]]);
  };

  const handleBrandChange = (brand) => {
    setFilter((prev) => [prev[0], brand, prev[2]]);
  };

  const handlePaymentMethodChange = (paymentMethod) => {
    setFilter((prev) => {
      const payments = prev[2];

      if (payments.includes(paymentMethod)) {
        return [prev[0], prev[1], payments.filter((p) => p !== paymentMethod)];
      }

      return [prev[0], prev[1], [...payments, paymentMethod]];
    });
  };

  return (
    <div className={`drawer ${isOpen ? "drawer-open" : ""} h-full`}>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
        {/* <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          Open drawer </label> */}
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
              onChange={() => handleFuelTypeChange(null)}
            />
            <input
              className="btn
              checked:bg-amber-500"
              type="radio"
              name="metaframeworks"
              aria-label="Diesel"
              onChange={() => handleFuelTypeChange(3)}
            />
            <input
              className="btn
              checked:bg-green-500"
              type="radio"
              name="metaframeworks"
              aria-label="Regular"
              onChange={() => handleFuelTypeChange(1)}
            />
            <input
              className="btn
              checked:bg-red-500"
              type="radio"
              name="metaframeworks"
              aria-label="Premium"
              onChange={() => handleFuelTypeChange(2)}
            />
          </div>
          {/* gas company */}
          <li>
            <a>Company:</a>
          </li>
          <div className="filter basis-full justify-center">
            <input
              className="btn filter-reset"
              type="radio"
              name="metalframeworks"
              aria-label="All"
              onChange={() => handleBrandChange(null)}
            />
            {brands.map((brand) => (
              <input
                key={brand}
                className="btn
                    checked:bg-red-500"
                type="radio"
                name="metalframeworks"
                aria-label={brand}
                onChange={() => handleBrandChange(brand)}
              />
            ))}
          </div>
          {/* payment method */}
          <li>
            <a>Payment Method:</a>
          </li>
          <form className="filter basis-full justify-center">
            <input
              className="btn"
              type="reset"
              value="All"
              onChange={() => handlePaymentMethodChange(null)}
            />
            {paymentMethods.map((method) => (
              <input
                key={method}
                className="btn
                    checked:bg-red-500"
                type="checkbox"
                name="frameworks"
                aria-label={method}
                onChange={() => handlePaymentMethodChange(method)}
              />
            ))}
          </form>
        </ul>
      </div>
    </div>
  );
}
