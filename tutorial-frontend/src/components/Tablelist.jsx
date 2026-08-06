export default function TableList({handleOpen}) {
  //sample, to be replaced with fetch data
    const items = [
    {
      id: 1,
      name: 'Laptop',
      quantity: 5,
      price: 999.99,
      location: 'Canada',
      lastLogin: '12/16/2020',
      status: false   
    },
    {
      id: 2,
      name: 'Mouse',
      quantity: 75,
      price: 29.99,
      location: 'United States',
      lastLogin: '12/5/2020',
      status: true
    },
    {
      id: 3,
      name: 'Monitor',
      quantity: 10,
      price: 199.99,
      location: 'China',
      lastLogin: '8/15/2020',
      status: true
    },
    {
      id: 4,
      name: 'Mechanical Keyboard',
      quantity: 20,
      price: 79.99,
      location: 'Russia',
      lastLogin: '3/25/2021',
      status: false   
    },
    {
      id: 5,
      name: 'Mouse Pad',
      quantity: 50,
      price: 19.99,
      location: 'Brazil',
      lastLogin: '5/22/2020',
      status: true
    },
    {
      id: 6,
      name: 'Power Supply',
      quantity: 25,
      price: 59.99,
      location: 'Venezuela',
      lastLogin: '12/8/2020',
      status: true
    },
    {
      id: 7,
      name: 'Earphones',
      quantity: 30,
      price: 39.99,
      location: 'Philippines',
      lastLogin: '2/17/2021',
      status: false
    },
    {
      id: 8,
      name: 'Desktop Microphone',
      quantity: 15,
      price: 59.99,
      location: 'Indonesia',
      lastLogin: '5/23/2020',
      status: false
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-xs table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Location</th>
            <th>Status</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.location}</td>
              <td>
                <button className={`btn rounded-full w-20 
                  ${item.status ? `btn-primary` : `btn-primary btn-outline`}`} >
                  {item.status ? 'Active' : 'Inactive'}
                </button>
              </td>
              <td>
                <button onClick={() => handleOpen('edit')} className={`btn btn-secondary w-20`}>
                Update</button>
              </td>
              <td>
                <button onClick={handleOpen} className={`btn btn-error w-20`}>
                Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
            <th>Location</th>
            <th>Status</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
}
