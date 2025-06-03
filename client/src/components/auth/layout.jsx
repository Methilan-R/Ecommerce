import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full font-sans">
      {/* Left Panel */}
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white px-12">
        <div className="max-w-md space-y-6 text-center animate-fade-in">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
            Welcome to <br /> <span className="text-blue-400">Cloud Shopping</span>
          </h1>
          <p className="text-lg text-gray-300">
            Discover the future of shopping with lightning-fast performance and a seamless experience.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-1 items-center justify-center bg-gray-100 px-6 py-12 sm:px-10 lg:px-16">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl border border-gray-200 animate-slide-up">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
