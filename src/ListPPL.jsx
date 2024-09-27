export default function List({ people }) {
  return (
    <div className="font-bold text-center">
      <h1>รายชื่อผู้สนใจโครงการ</h1>
      <ul role="list" className="divide-y divide-gray-100 mx-6 flex justify-center p-">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.phone}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
