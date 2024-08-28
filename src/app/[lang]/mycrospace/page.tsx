'use client';

import React, { useEffect, useState } from 'react';
import '@/css/leaderboard.css'
import os from 'os';
import axios from 'axios';

type StringNumberPair = [string, number];

type ListOfStringNumberPairs = StringNumberPair[];

const FetchingHello: React.FC = () => {
  const [message, setMessage] = useState<ListOfStringNumberPairs>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('api/mycrospacerank');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setMessage(data);
      } catch (error:any) {
        console.log(error)
        setError(error.message);
      } finally {
        setLoading(false);
        //console.log(message);
      }
    };

    fetchMessage();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
      <LeaderBoard participants={message} />
  );
};

export default FetchingHello;

function LeaderBoard ({participants}:{participants:ListOfStringNumberPairs}) {

  return (
    <div className="container">

      <div className="leaderboard_container">
        <h1>Leaderboard</h1>
          <div className="tagging_rank tagging_rank_header">
            <div>Participante</div>
            <div>Nº Objetos</div>
          </div>
          {participants.map((participant: StringNumberPair, index) => {

            let assignedClass = index == 0 ? 'gold_rank' : 'default_rank';
            assignedClass = index == 1 ? 'silver_rank' : assignedClass;
            assignedClass = index == 2 ? 'bronze_rank' : assignedClass;

            return (
              <div key={participant[0]} className={assignedClass + " tagging_rank"}>
                <div>{participant[0]}</div>
                <div className='score'>{participant[1]}</div>
                {/*<div>{"???"}</div>*/}
              </div>
            )
      })}
      <p className='description'>Nota: La puntuación son el número de objetos que habéis señalado y posteriormente han sido validados como Done. ¡Las fotos que están en fase de Revisión aún no se han contado!</p>
      </div>
    </div>
  );

}