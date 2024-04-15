// SigmaQuote.js
import React, { useEffect } from "react";
import styles from "./SigmaQuote.module.css";
import sigma1 from "./images/sigma/sigma1.jpg";
import sigma2 from "./images/sigma/sigma2.jpg";
import sigma3 from "./images/sigma/sigma3.jpg";
import sigma4 from "./images/sigma/sigma4.jpg";
import sigma5 from "./images/sigma/sigma5.jpg";
import sigmaMusic from "./music/sigma_music.mp3"; // Import Sigma male music file

const sigmaImages = [sigma1, sigma2, sigma3, sigma4, sigma5];

const SigmaQuote = () => {
  const sampleQuotes = [
    "I walk my own path, and I'm not influenced by society's expectations.",
    "I value my independence and prefer solitude over socializing.",
    "I'm a lone wolf, thriving in my own company.",
    "I don't conform to societal norms; I create my own rules.",
    "I'm not afraid to go against the crowd and do what feels right to me.",
    "I trust my instincts and intuition above all else.",
    "I don't seek validation from others; I validate myself.",
    "I embrace challenges as opportunities for growth.",
    "I'm comfortable with uncertainty; it fuels my curiosity.",
    "I focus on long-term goals rather than short-term gratification.",
    "I find strength in solitude and silence.",
    "I'm self-reliant and capable of handling any situation.",
    "I'm not swayed by trends or fads; I follow my own style.",
    "I prioritize my mental and emotional well-being.",
    "I'm not defined by my possessions or status; I define myself.",
    "I value substance over superficiality in all aspects of life.",
    "I'm not afraid to stand alone if it means staying true to myself.",
    "I see setbacks as opportunities to learn and improve.",
    "I'm a master of my emotions; they don't control me.",
    "I'm resilient and bounce back stronger from adversity.",
    "I trust my intuition to guide me in the right direction.",
    "I'm comfortable challenging authority and questioning the status quo.",
    "I'm not limited by conventional thinking; I think outside the box.",
    "I embrace change as a natural part of life.",
    "I'm driven by passion and purpose, not by external rewards.",
    "I don't seek approval from others; I approve of myself.",
    "I'm confident in my abilities and decisions.",
    "I value authenticity and sincerity in myself and others.",
    "I'm not afraid to take risks and step out of my comfort zone.",
    "I'm a leader, not a follower, paving my own path.",
    "I embrace my uniqueness and celebrate what makes me different.",
    "I'm not intimidated by opposition; it strengthens my resolve.",
    "I trust in my abilities to overcome any challenge.",
    "I'm not influenced by societal pressures or expectations.",
    "I value deep connections and meaningful relationships.",
    "I'm not defined by my past; I create my future.",
    "I embrace uncertainty as an opportunity for growth.",
    "I'm not deterred by failure; it's a stepping stone to success.",
    "I trust my instincts to lead me in the right direction.",
    "I'm not afraid to express my true thoughts and feelings.",
    "I value honesty and integrity above all else.",
    "I'm not bound by limitations; I push past them.",
    "I embrace solitude as a time for self-reflection and growth.",
    "I'm not influenced by external validation; I validate myself.",
    "I prioritize my mental, emotional, and physical well-being.",
    "I'm not swayed by temporary pleasures; I focus on long-term goals.",
    "I value inner peace and tranquility above all else.",
    "I'm not afraid to walk alone if it means staying true to myself.",
    "I see challenges as opportunities for growth and self-discovery.",
    "I'm not defined by my circumstances; I define my own destiny.",
    "I trust in my abilities to navigate life's challenges with grace.",
    "I'm not confined by societal expectations; I break free from them.",
    "I value authenticity and sincerity in all my interactions.",
    "I'm not deterred by setbacks; they only make me stronger.",
    "I embrace change as a necessary part of personal evolution.",
    "I'm not limited by fear; I embrace uncertainty with open arms.",
    "I trust in my intuition to guide me towards my true purpose.",
    "I'm not afraid to challenge the status quo and question authority.",
    "I value independence and self-sufficiency above all else.",
    "I'm not defined by external circumstances; I define my own worth.",
    "I embrace solitude as a time for self-discovery and growth.",
    "I'm not swayed by external validation; I validate myself from within.",
    "I prioritize my mental and emotional well-being above all else.",
    "I'm not deterred by obstacles; I see them as opportunities for growth.",
    "I trust in my abilities to overcome any challenge that comes my way.",
    "I'm not influenced by societal norms; I follow my own path.",
    "I value authenticity and sincerity in all aspects of my life.",
    "I'm not defined by my past mistakes; I learn and grow from them.",
    "I embrace uncertainty as a catalyst for personal transformation.",
    "I'm not afraid to take risks and step outside of my comfort zone.",
    "I trust in my intuition to guide me towards my true purpose in life.",
    "I'm not swayed by external pressures; I stay true to my values.",
    "I prioritize self-care and self-love in all aspects of my life.",
    "I'm not deterred by failure; I see it as a stepping stone to success.",
    "I trust in my abilities to navigate life's challenges with resilience.",
    "I'm not defined by my circumstances; I create my own destiny.",
    "I embrace change as a natural part of personal growth and evolution.",
    "I'm not limited by fear; I embrace uncertainty with open arms.",
    "I trust in my intuition to guide me towards my highest potential.",
    "I'm not afraid to challenge the status quo and think for myself.",
    "I value independence and self-expression above all else.",
    "I'm not defined by external validation; I find validation within myself.",
    "I prioritize my mental, emotional, and physical well-being.",
    "I'm not deterred by setbacks; I see them as opportunities for growth.",
    "I trust in my abilities to overcome any obstacles that come my way.",
    "I'm not influenced by societal expectations; I forge my own path.",
    "I value authenticity and honesty in all my relationships.",
    "I'm not defined by my past; I create my own future.",
    "I embrace uncertainty as a catalyst for personal and spiritual growth.",
    "I'm not afraid to take risks and pursue my dreams with passion.",
    "I trust in my intuition to lead me towards my true purpose in life.",
    "I'm not swayed by external pressures; I remain true to myself.",
    "I prioritize self-care and self-love as essential components of my life.",
    "I'm not deterred by failure; I see it as a stepping stone to success.",
    "I trust in my abilities to overcome any challenges that come my way.",
    "I'm not defined by my circumstances; I shape my own destiny.",
    "I embrace change as a natural part of personal growth and evolution.",
    "I'm not limited by fear; I embrace uncertainty with courage and grace.",
    "I trust in my intuition to guide me towards my highest potential.",
    "I'm not afraid to challenge the status quo and think for myself.",
    "I value independence and self-expression above all else.",
    "I'm not defined by external validation; I find validation within myself.",
    "I prioritize my mental, emotional, and physical well-being.",
    "I'm not deterred by setbacks; I see them as opportunities for growth.",
    "I trust in my abilities to overcome any obstacles that come my way.",
    "I'm not influenced by societal expectations; I forge my own path.",
    "I value authenticity and honesty in all my relationships.",
    "I'm not defined by my past; I create my own future.",
    "I embrace uncertainty as a catalyst for personal and spiritual growth.",
    "I'm not afraid to take risks and pursue my dreams with passion.",
    "I trust in my intuition to lead me towards my true purpose in life.",
    "I'm not swayed by external pressures; I remain true to myself.",
    "I prioritize self-care and self-love as essential components of my life.",
    "I'm not deterred by failure; I see it as a stepping stone to success.",
    "I trust in my abilities to overcome any challenges that come my way.",
    "I'm not defined by my circumstances; I shape my own destiny.",
    "I embrace change as a natural part of personal growth and evolution.",
    "I'm not limited by fear; I embrace uncertainty with courage and grace.",
    "I trust in my intuition to guide me towards my highest potential.",
    "I'm not afraid to challenge the status quo and think for myself.",
    "I value independence and self-expression above all else.",
    "I'm not defined by external validation; I find validation within myself.",
    "I prioritize my mental, emotional, and physical well-being.",
    "I'm not deterred by setbacks; I see them as opportunities for growth.",
    "I trust in my abilities to overcome any obstacles that come my way.",
    "I'm not influenced by societal expectations; I forge my own path.",
    "I value authenticity and honesty in all my relationships.",
    "I'm not defined by my past; I create my own future.",
    "I embrace uncertainty as a catalyst for personal and spiritual growth.",
    "I'm not afraid to take risks and pursue my dreams with passion.",
    "I trust in my intuition to lead me towards my true purpose in life.",
    "I'm not swayed by external pressures; I remain true to myself.",
    "I prioritize self-care and self-love as essential components of my life.",
    "I'm not deterred by failure; I see it as a stepping stone to success.",
    "I trust in my abilities to overcome any challenges that come my way.",
    "I'm not defined by my circumstances; I shape my own destiny.",
    "I embrace change as a natural part of personal growth and evolution.",
    "I'm not limited by fear; I embrace uncertainty with courage and grace.",
    "I trust in my intuition to guide me towards my highest potential.",
    "I'm not afraid to challenge the status quo and think for myself.",
    "I value independence and self-expression above all else.",
    "I'm not defined by external validation; I find validation within myself.",
    "I prioritize my mental, emotional, and physical well-being.",
    "I'm not deterred by setbacks; I see them as opportunities for growth.",
    "I trust in my abilities to overcome any obstacles that come my way.",
    "I'm not influenced by societal expectations; I forge my own path.",
    "I value authenticity and honesty in all my relationships.",
    "I'm not defined by my past; I create my own future.",
    "I embrace uncertainty as a catalyst for personal and spiritual growth.",
  ];

  useEffect(() => {
    const audio = new Audio(sigmaMusic);
    audio.loop = true;
    audio.volume = 0; // Set initial volume to 0

    // Define the duration of the fade-in effect in milliseconds
    const fadeDuration = 3000; // 3 seconds

    // Calculate the increment to adjust the volume gradually
    const fadeIncrement = 1 / ((audio.duration * 1000) / fadeDuration);

    // Function to increase the volume gradually
    const fadeIn = () => {
      if (audio.volume < 1 && isFinite(fadeIncrement)) {
        audio.volume += fadeIncrement;
        setTimeout(fadeIn, 10);
      } else {
        audio.volume = 1; // Ensure volume is set to 1 when fade-in is complete
      }
    };

    // Start playing the audio and fade it in
    audio.play();
    fadeIn();

    return () => {
      audio.pause();
    };
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * sampleQuotes.length);
    return sampleQuotes[randomIndex];
  };

  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * sigmaImages.length);
    return sigmaImages[randomIndex];
  };

  // Function to generate a random number from 1 to 1 billion
  const generateRandomNumber = () => {
    const min = 1;
    const max = 1000000000; // 1 billion
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomQuote = generateRandomQuote();
  const randomImage = generateRandomImage();
  const randomNumber = generateRandomNumber();

  return (
    <div className={styles.sigmaContainer}>
      <div className={styles.sigmaQuoteContainer}>
        <img
          src={randomImage}
          alt="Sigma Image"
          className={styles.sigmaImage}
          style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
            objectFit: "contain",
          }}
        />
        <div className={styles.quoteOverlay}>
          <p className={styles.sigmaText}>
            {"Sigma Quote #" + randomNumber + ": " + randomQuote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigmaQuote;
