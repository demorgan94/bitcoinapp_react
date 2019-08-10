import Master from '../components/Master';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
   <Master>
      <div className="row">
         <div className="col-12">
            <h2 className="my-4">Precio del Bitcoin</h2>
            <Precio precio={props.precioBitcoin} />
         </div>

         <div className="col-md-8">
            <h2 className="my-4">Noticias Sobre Bitcoin</h2>
            <Noticias noticias={props.noticias} />
         </div>

         <div className="col-md-4">
            <h2 className="my-4">Eventos Sobre Bitcoin</h2>
            <Eventos eventos={props.eventos} />
         </div>
      </div>
   </Master>
);

Index.getInitialProps = async () => {
   const key = 'd3009ff2-c3f9-43de-834b-f39f9c2692fe';
   var objHeader = {
      headers: {
         'X-CMC_PRO_API_KEY': key,
         "Accept-Encoding": 'deflate'
      },
      json: true,
      gzip: true
   }

   const precio = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC", objHeader);
   const noticias = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=9b70f60654f84854ae9af81db929fe7f&language=es");
   const eventos = await fetch("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=SGFXTUKBXF3IY6NH4EBR");

   const resPrecio = await precio.json();
   const resNoticias = await noticias.json();
   const resEventos = await eventos.json();

   return {
      precioBitcoin: resPrecio.data.BTC.quote.USD,
      noticias: resNoticias.articles,
      eventos: resEventos.events
   }
}

export default Index;