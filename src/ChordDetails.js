import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

const ChordDetails = () => {
  const { chord } = useParams();
  const [selectedVariation, setSelectedVariation] = useState(null);
  const variations = [
    { name: 'm', description: 'Minor' },
    { name: 'sus2', description: 'Suspended 2th' },
    { name: 'sus4', description: 'Suspended 4th' },
    { name: 'add9', description: 'Added 9th' },
    { name: 'dim', description: 'Diminished' },
    { name: 'aug', description: 'Augmented' },
    { name: '5', description: 'Fifth' },
    { name: '6', description: 'Sixth' },
    { name: '7', description: 'Dominant 7th' },
    { name: 'Maj7', description: 'Major 7th' },
    { name: '9', description: 'Ninth' },
  ];
//   case 'Bb': return 'A#';
//   case 'Db': return 'C#';
//   case 'Eb': return 'D#';
//   case 'Gb': return 'F#';
//   case 'Ab': return 'G#';

  const handleVariationClick = (variation) => {
    setSelectedVariation(variation);
  };

  return (
    <div className="detailsContainer">
        <h1 className="chordTitle">{chord}</h1>
        {/* <div style={{ textAlign: "center" }}>
        <img src={process.env.PUBLIC_URL + "/" + chord + (selectedVariation ? selectedVariation.name : '') + ".png"} alt={chord} />
      </div> */}
      <div style={{ textAlign: "center" }}>
        {/* 고정 이미지 */}
        <img src={process.env.PUBLIC_URL + "/" + chord + ".png"} alt={chord} />
      </div>
      {variations.map((variation, index) => (
        <div key={index} className="variationRow clickable" onClick={() => handleVariationClick(variation)}>
          <span className="variationName">{variation.name}</span>
          <span className="variationDescription">{variation.description}</span>
        </div>
      ))}
      {selectedVariation && selectedVariation.name && (
        <div className="imageContainer">
          <img 
            src={`${process.env.PUBLIC_URL}/${chord}${selectedVariation.name}.png`} 
            alt={`I will upload "${chord} ${selectedVariation.name}" code As soon as Possible! :)`} 
            className="chordImage"
          />
        </div>
      )}
    </div>
  );
};

export default ChordDetails;
