import {FormInput} from "../FormInput/FormInput";
import {FormSelect} from "../PlayerSelect/FormSelect";
import {FormActions} from "../FormActions/FormActions";
import "./PlayerForm.css";
import { BallIcon, PhoneIcon, ShieldIcon, ShirtIcon } from "../icons/Icons";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { PlayerRequest } from "../../../player/interfaces/player-interface";
import { createPlayer } from "../../actions/playerServices";
import { useTournament } from "../../../context/useTournament";

const POSITIONS = ["Portero", "Defensa", "Mediocampista", "Delantero"];

interface Prosp{
  onClose : ()=> void;
  torneoId: number;
}

const inititalData : PlayerRequest = {
    nombre : '',
    apellido : '',
    telefono : '',
    equipo : '',
    posicion : '',
    shirtNumber : ''
  };


export const PlayerForm = ({onClose} :Prosp)=> {

  const {teams, setPlayers, reLoadTeams} = useTournament();
  const [formData, setFormData] = useState<PlayerRequest>(inititalData);



  const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const {name, value} = e.target;

      setFormData((prev) => ({...prev, [name] : value}));
  }

  const handleSubmit = async(e : FormEvent<HTMLElement>) =>{
      e.preventDefault();
      const playerCreated = await createPlayer(formData);
      setFormData(inititalData);
      setPlayers((playersPrev) => [...playersPrev, playerCreated]);
      console.log({playerCreated})
  }

  useEffect(()=>{
    reLoadTeams();
  },[])


  return (
    <form className="player-formData" noValidate onSubmit={handleSubmit}>
      <div className="player-formData-row">
        <FormInput label="Nombre" placeholder="Ej. Juan" name="nombre" value={formData.nombre} onChange={handleChange}/>
        <FormInput label="Apellido" placeholder="Ej. Pérez" name="apellido" value={formData.apellido} onChange={handleChange}/>
      </div>

      <FormInput
        label="Teléfono"
        placeholder="Ej. +57 300 123 4567"
        type="tel"
        name="telefono"
        icon={<PhoneIcon />}
        value={formData.telefono} 
        onChange={handleChange}
      />

      <FormSelect
        label="Posición"
        placeholder="Selecciona una posición"
        options={POSITIONS}
        getValue={ (position) => position}
        getLabel={ (position) => position}
        value={formData.posicion} 
        onChange={handleChange}
        name="posicion"
        icon={<BallIcon />}
      />

      <FormSelect
        label="Equipo"
        placeholder="Selecciona un equipo"
        options={teams}
        getValue={(team) => team.id}
        getLabel={(team) => team.nombre}
        onChange={handleChange}
        value={formData.equipo}
        name="equipo"
        icon={<ShieldIcon />}
      />

      <FormInput
        label="N° camiseta"
        placeholder="Ej. 10"
        type="number"
        name="shirtNumber"
        icon={<ShirtIcon />}
        value={formData.shirtNumber} 
        onChange={handleChange}
      />

      <FormActions onClose={onClose} />
    </form>
  );
}

