import "./styles.css";

interface Props {
  title: string;
  data: object;
}

function Card({ data, title }: Props) {
  const values = Object.entries(data);
  // [
  //  [ 'chave', 'valor' ]
  //  [ 'chave2', 'valor' ]
  // ]

  return (
    <div
      style={{
        width: "400px",
        border: "1px solid #000000",
        borderRadius: "20px",
        padding: "10px 20px"
      }}
    >
      <h1 style={{ textAlign: "left" }}>{title}</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px"
        }}
      >
        {values.map(([key, value]) => (
          <div>
            <span>{key + ": "}</span>

            <span style={{ fontWeight: "bold" }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const response = {
    title: "85879-2/3",
    card: {
      Estabelecimento: 1,
      "Centro de custo": "Gsis",
      "Valor total": "R$ 25,00",
      Detalhes: "Compra de papel"
    }
  };

  return (
    <div className="App">
      <Card data={response.card} title={response.title} />
    </div>
  );
}
