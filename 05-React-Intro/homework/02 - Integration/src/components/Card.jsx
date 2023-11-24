export default function Card(props) {
   return (
      <div>
          <button onClick={() => window.alert('Emulamos que se cierra la card')}>X</button>-
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt={props.key}/>
      </div>
   );
}
