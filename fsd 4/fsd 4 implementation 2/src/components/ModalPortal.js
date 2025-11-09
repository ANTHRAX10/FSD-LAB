import ReactDOM from 'react-dom';

export default function ModalPortal({children}){
  const node = document.getElementById('portal-root');
  return ReactDOM.createPortal(children, node);
}
