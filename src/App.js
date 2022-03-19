import { useState } from 'react';

import { getRandomDerangement } from './utils';

import AddParticipantButtonAndDialog from './AddParticipantButtonAndDialog';
import GenerateRandomDerangementButton from './GenerateRandomDerangementButton';
import ParticipantsList from './ParticipantsList';
import ArrowsList from './ArrowsList';
import DerangementList from './DerangementList';
import MyAppBar from './MyAppBar';

const App = () => {
  const [participants, setParticipants] = useState([]);
  const addParticipant = (participant) => {
    setParticipants([...participants, participant]);
  };

  const [derangement, setDerangement] = useState([]);
  const generateRandomDerangement = () => {
    const randomDerangement = getRandomDerangement(participants)
    setDerangement(randomDerangement)
  }

  return (
    <>
      <MyAppBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AddParticipantButtonAndDialog addParticipant={addParticipant} />
        <GenerateRandomDerangementButton generateRandomDerangement={generateRandomDerangement} />
        <ParticipantsList participants={participants} />
        <ArrowsList derangement={derangement} />
        <DerangementList derangement={derangement} />
      </div >
    </>
  );
};

export default App;
