export default function Tablelist() {
  //sample, to be replaced with fetch data
    const items = [
    {
      id: 1,
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      company: 'Littel, Schaden and Vandervort',
      location: 'Canada',
      lastLogin: '12/16/2020',
      favoriteColor: 'Blue',
    },
    {
      id: 2,
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      company: 'Zemlak, Daniel and Leannon',
      location: 'United States',
      lastLogin: '12/5/2020',
      favoriteColor: 'Purple',
    },
    {
      id: 3,
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      company: 'Carroll Group',
      location: 'China',
      lastLogin: '8/15/2020',
      favoriteColor: 'Red',
    },
    {
      id: 4,
      name: 'Marjy Ferencz',
      job: 'Office Assistant I',
      company: 'Rowe-Schoen',
      location: 'Russia',
      lastLogin: '3/25/2021',
      favoriteColor: 'Crimson',
    },
    {
      id: 5,
      name: 'Yancy Tear',
      job: 'Community Outreach Specialist',
      company: 'Wyman-Ledner',
      location: 'Brazil',
      lastLogin: '5/22/2020',
      favoriteColor: 'Indigo',
    },
    {
      id: 6,
      name: 'Irma Vasilik',
      job: 'Editor',
      company: 'Wiza, Bins and Emard',
      location: 'Venezuela',
      lastLogin: '12/8/2020',
      favoriteColor: 'Purple',
    },
    {
      id: 7,
      name: 'Meghann Durtnal',
      job: 'Staff Accountant IV',
      company: 'Schuster-Schimmel',
      location: 'Philippines',
      lastLogin: '2/17/2021',
      favoriteColor: 'Yellow',
    },
    {
      id: 8,
      name: 'Sammy Seston',
      job: 'Accountant I',
      company: "O'Hara, Welch and Keebler",
      location: 'Indonesia',
      lastLogin: '5/23/2020',
      favoriteColor: 'Crimson',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table-xs table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.name}</td>
              <td>{item.job}</td>
              <td>{item.company}</td>
              <td>{item.location}</td>
              <td>{item.lastLogin}</td>
              <td>{item.favoriteColor}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>company</th>
            <th>location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
