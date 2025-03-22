import React from "react";

const Preloader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <div className="mt-4 text-xl font-serif text-primary">
          Sukham Resort
        </div>
      </div>
    </div>
  );
};

export default Preloader;
