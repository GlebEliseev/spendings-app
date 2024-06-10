import { H1, Header } from "vienna-ui";
import { AppContainer } from "./styled";

function App() {
  const headerItems = [{ value: "spendings", label: "Контроль расходов" }];

  return (
    <>
      <Header
        size="m"
        items={
          <Header.Items
            design="primary"
            align="center"
            justifyContent="flex-start"
            value="spendings"
          >
            {headerItems.map(({ value, label }) => (
              <Header.Item key={value} value={value} label={label} />
            ))}
          </Header.Items>
        }
      />
      <AppContainer>
        <H1>Мой денежный поток</H1>
        {/* TODO: Добавить элементы */}
      </AppContainer>
    </>
  );
}

export default App;
