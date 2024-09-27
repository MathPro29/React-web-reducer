export default function List({ people }) {
  return (
    <div className="font-bold text-center">
  <h1>รายชื่อผู้สนใจโครงการ</h1>
  <ul
    role="list"
    className="divide-y divide-gray-100 mx-auto p-0 flex flex-col items-center"
  >
    {people.map((person) => (
      <li key={person.email} className="flex gap-x-6 py-5 w-full max-w-md justify-center">
        <div className="flex min-w-0 gap-x-4 items-center">
          <div className="flex-none h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center">
            <img alt="" src={person.imageUrl} className="h-12 w-12 rounded-full" />
          </div>
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">อีเมล: {person.email}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">เบอร์ติดต่อ: {person.phone}</p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">โครงการที่สนใจ: {person.role}</p>
        </div>
      </li>
    ))}
  </ul>
</div>


  );
}
