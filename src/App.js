import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPolicy } from "./store/actions";

/*
  Kreirajte 3 komponenti(useDispatch)
  1: Komponent shto ke ima forma so dva inputi, eden za ime, 
  eden za kolicina(ova mora da e broj koristete Number() metod)
  i edno kopce za sbumit na formata(na submit da se povika dispatch
  so addPolicy akcijata)
  2: Isto kako prvio komponent samo za detletePolicy akcijata
  3: Kreirajte komponent so eden imput i kopce, koga kopceto ke se 
  pritisne povikajte dispatch na payment akcijata so payload da bide toa
  shto se vnesilo vo inputot

  Dodadete react-router-dom vo aplikacijata

  Kreirajte komponent shto ke vi sluzi kako navgacija niz vashata
  applikacija

  Kreirajte 4 ruti
  1: Ruta shto ke go renderira komponentot za dodavanje na polisa
  2: Ruta shto ke go renderira komponentot za brishenje na polisa
  3: Ruta shto ke go renderira komponentot za isplata na oshteta
  4: Ruta shto ke go renderira komponentot shto treba da go napravete
  vo dolnata zadaca

  Kreirajte komponent shto ke gi lista site momentalni korisnici na
  polisi. Isto taka da prikazhuva kolkav e budzetot na kompanijata
  (useSelector())

*/

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={() => dispatch(addPolicy("Jas", 100))}>
        Add policy
      </button>
    </>
  );
};

export default App;
