import { useEffect } from "react";
import { useDispatch } from "react-redux";
//thunks
import { getPokemons } from "./store/slices/todos";

export default function PokemonApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons()); // esta meoizado, no es necesario colocarlo como dependencia
  }, []);

  return <div>PokemonApp</div>;
}
