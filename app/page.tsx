import Amarelo from "./components/Amarelo";
import Preco from "./components/Preco";

const titulo: React.CSSProperties = {
  fontSize: '25px',
  fontFamily: 'satoshi-light',
  marginTop: '105px',
  textAlign:'center'
}

export default function Home() {
  
  
  return (
    <div>
    <h1 style = {titulo}>Porque não escolher um plano de 12 meses?</h1>
    <Amarelo/>
    <Preco/>
    </div>
  );
  
}
