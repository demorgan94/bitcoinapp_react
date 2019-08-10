import Evento from './Evento';

const Eventos = (props) => {

   const eventosId = Object.keys(props.eventos);
   console.log(eventosId);

   return (
      <div className="list-group">
         {eventosId.map(key => (
            <Evento key={key} info={props.eventos[key]} />
         ))}
      </div>
   );
};

export default Eventos;