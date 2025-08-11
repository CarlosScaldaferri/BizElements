import type { Meta, StoryObj } from "@storybook/react";
import BizForm from "./BizForm";

const meta: Meta<typeof BizForm> = {
  title: "BizForm",
  component: BizForm,
};
export default meta;

type Story = StoryObj<typeof BizForm>;

export const SingleInput: Story = {
  render: (args) => (
    <BizForm {...args}>
      <input
        type="text"
        placeholder="Nome"
        className="border p-2 rounded w-full"
      />
    </BizForm>
  ),
};

export const MultipleFields: Story = {
  render: (args) => (
    <BizForm {...args}>
      <input
        type="text"
        placeholder="Nome"
        className="border p-2 rounded w-full"
      />
      <select className="border p-2 rounded w-full">
        <option value="">Selecione</option>
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
      </select>
      <textarea placeholder="Descrição" className="border p-2 rounded w-full" />
    </BizForm>
  ),
};
