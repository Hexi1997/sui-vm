import { suiVMClient } from "@/utils/SuiVM";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    console.log(suiVMClient);
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center">
      home page
    </div>
  );
}
