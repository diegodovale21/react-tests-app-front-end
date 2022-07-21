import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Conta from "./Conta";
describe("Componente de conta", () => {
  it("Exibir o saldo da conta com formatação monetário", () => {
    render(<Conta saldo={1000} />);
    const saldo = screen.getByTestId("saldo-conta");
    expect(saldo.textContent).toBe("R$ 1000");
  });
  it("Chama a função e realizar transação, quando o botão é clicado", () => {
    const funcaoRealixarTransacao = jest.fn();
    render(<Conta saldo={1000} realizarTransacao={funcaoRealixarTransacao} />);

    fireEvent.click(screen.getByText("Realizar operação"));

    expect(funcaoRealixarTransacao).toHaveBeenCalled();
  });
});
