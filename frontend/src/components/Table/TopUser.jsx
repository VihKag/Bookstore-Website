import logo1 from "../../assets/user/user-01.png";
const TopUser = () => {
  const data = [
    {
      id: 1,
      Email: "email1@gmail.com",
      Name: "Name 1",
      Amount: 3000,
      Logo: logo1,
    },
    {
      id: 2,
      Email: "email1@gmail.com",
      Name: "Name 2",
      Amount: 2500,
      Logo: logo1,
    },
    {
      id: 3,
      Email: "email1@gmail.com",
      Name: "Name 3",
      Amount: 2400,
      Logo: logo1,
    },
    {
      id: 4,
      Email: "email1@gmail.com",
      Name: "Name 4",
      Amount: 2000,
      Logo: logo1,
    },
    {
      id: 5,
      Email: "email1@gmail.com",
      Name: "Name 5",
      Amount: 1200,
      Logo: logo1,
    },
  ];
  return (
    <>
      <div className="rounded-t p-2 bg-gray-50">
        <div className="text-xl p-2 font-semibold text-gray-800">Top users buy books</div>
        <span className="text-sm p-2 text-gray-600">From 21 July to 25 Aug</span>
      </div>
<<<<<<< HEAD
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Top
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
=======
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Top
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
>>>>>>> 0161b0f2312004efd463b1d963f4a6c685c7cdbb
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.id}
<<<<<<< HEAD
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="px-6 py-4">{user.id}</td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src={user.Logo}
                  alt="Jese"
                />
                <div class="pl-3">{user.Email}</div>
              </th>
              <td class="px-6 py-4">{user.Name}</td>
              <td class="px-6 py-4">${user.Amount}</td>
=======
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{user.id}</td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.Logo}
                  alt="Jese"
                />
                <div className="pl-3">{user.Email}</div>
              </th>
              <td className="px-6 py-4">{user.Name}</td>
              <td className="px-6 py-4">${user.Amount}</td>
>>>>>>> 0161b0f2312004efd463b1d963f4a6c685c7cdbb
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TopUser;
