import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const GuitarChords = () => {
  const chordGroups = [
    ['A', 'A#'],
    ['B'],
    ['C', 'C#'],
    ['D', 'D#'],
    ['E'],
    ['F', 'F#'],
    ['G', 'G#']
  ];

  const convertToFlat = (chord) => {
    switch (chord) {
      case 'A#': return 'Bb';
      case 'C#': return 'Db';
      case 'D#': return 'Eb';
      case 'F#': return 'Gb';
      case 'G#': return 'Ab';
      default: return chord;
    }
  };

  return (
    <div className="container">
      {chordGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="chordGroup">
          {group.map((chord, index) => (
            <Link key={index} to={`/chord/${convertToFlat(chord)}`} className="chordBox">
              <div className="chordText">{chord}</div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GuitarChords;
