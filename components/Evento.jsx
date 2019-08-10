const Evento = (props) => {

   const { name, url, description } = props.info;

   let desc = description.text;

   if (desc) {
      desc = desc.substr(0, 128) + '...';
   }

   return (
      <a href={url} target="_blank" className="list-group-item active text-light mb-1">
         <h3 className="mb-3">{name.text}</h3>
         <p className="mb-1">{desc}</p>
      </a>
   );
};

export default Evento;