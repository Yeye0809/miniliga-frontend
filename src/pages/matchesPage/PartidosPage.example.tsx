import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTournament } from "../../context/useTournament";
import { getTournamentMatches } from "../../matches/actions/getUpcomingMatches";
import type { Grupo, Partido } from "../../matches/interface/types";
import PartidosPage from "./MatchesPage";

export default function PartidosPageExample() {
  const { torneoId } = useParams();
  const { tournament } = useTournament();
  const [partidos, setPartidos] = useState<Partido[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    getTournamentMatches(Number(torneoId))
      .then((data) => {
        if (active) setPartidos(data);
      })
      .catch((loadError: unknown) => {
        if (active) setError(loadError instanceof Error ? loadError.message : "No se pudieron cargar los partidos.");
      })
      .finally(() => {
        if (active) setCargando(false);
      });
    return () => { active = false; };
  }, [torneoId]);

  const groups = new Map<string, Grupo>();
  partidos.forEach((match) => {
    if (match.grupoId != null && match.grupoNombre) {
      groups.set(String(match.grupoId), { id: match.grupoId, nombre: match.grupoNombre });
    }
  });

  return (
    <PartidosPage
      nombreTorneo={tournament?.nombre ?? "Torneo"}
      grupos={[...groups.values()]}
      partidos={partidos}
      cargando={cargando}
      error={error}
    />
  );
}
