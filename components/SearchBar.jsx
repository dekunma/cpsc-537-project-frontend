export default function SearchBar() {
  return (
    <div className="navbar bg-base-100 h-24 mb-8 px-24">
      {/* start: placeholder */}
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">PROJECT NAME</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
