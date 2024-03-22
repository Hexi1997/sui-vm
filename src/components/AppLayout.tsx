import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <main className="bg-[#eaf4fa] min-h-[calc(100vh_-_72px)]">
        <Outlet />
      </main>
    </>
  );
}
