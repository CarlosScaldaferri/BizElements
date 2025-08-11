"use client";
import React from "react";

interface BizFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSave?: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel?: () => void;
  children?: React.ReactNode;
}

const BizForm: React.FC<BizFormProps> = ({ onSave, onCancel, children }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert("Formulário salvo!");
    onSave?.(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-4"
    >
      <div className="space-y-4">{children}</div>
      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <button
          type="submit"
          className="flex-1 bg-red-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          Salvar
        </button>
        <button
          type="button"
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default BizForm;
