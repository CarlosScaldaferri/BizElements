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
    <form onSubmit={handleSubmit}>
      {children}
      <div>
        <button type="submit">Salvar</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default BizForm;
