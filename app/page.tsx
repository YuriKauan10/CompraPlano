import Amarelo from "./components/Amarelo";

const titulo: React.CSSProperties = {
  fontSize: '25px',
  fontFamily: 'satoshi-light',
  marginTop: '105px',
  textAlign:'center'
}

export default function Home() {
  
  
  return (
    <div className="flex flex-col">
    <h1 style = {titulo}>Porque não escolher um plano de 12 meses?</h1>
    <Amarelo/>
    </div>
  );
  
}
