import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name ? `Welcome, ${sessionData?.user?.name}` : "Welcome"}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <label
              tabIndex={0} className="btn-ghost btn-circle avatar btn"
              onClick={() => void signOut()}
            >
              {sessionData?.user?.image && <div className="w-10 rounded-full">
                <img src={sessionData?.user?.image} alt="avatar" />
              </div>}
            </label>
          ) : (
            <button
              className="btn-ghost btn-circle btn"
              onClick={() => void signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;