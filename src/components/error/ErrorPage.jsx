import './ErrorPage.css';
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="box-error">
        <h1 className='font-error'>Oops!</h1>
        <p className='font-error'>Perdão, um erro inesperado ocorreu, tente novamente.</p>
        <p className='font-error'>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="button-link">Ir para a página inicial</Link>
      </div>
      
    </div>
  );
}
