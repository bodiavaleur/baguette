import {useState, useCallback, useEffect} from 'react';
import Tts from 'react-native-tts';
import {useSelector} from 'react-redux';
import {selectLanguage} from '~redux/app/app.selectors';
import {LANGUAGE_CODE} from '~config/language';

function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voice, setVoice] = useState('');
  const language = useSelector(selectLanguage);

  const startSpeak = useCallback(() => setIsSpeaking(true), []);
  const endSpeak = useCallback(() => setIsSpeaking(false), []);

  const loadVoice = async () => {
    await Tts.setDefaultLanguage(LANGUAGE_CODE[language]);

    const voices = await Tts.voices();
    const [langVoice] = voices.filter(
      voice => voice.language === LANGUAGE_CODE[language],
    );

    if (langVoice) {
      setVoice(langVoice.id);
    }
  };

  useEffect(() => {
    loadVoice();
  }, [language]);

  useEffect(() => {
    const startEvent = Tts.addEventListener('tts-start', startSpeak);
    const finishEvent = Tts.addEventListener('tts-finish', endSpeak);
    const cancelEvent = Tts.addEventListener('tts-cancel', endSpeak);

    return () => {
      startEvent.remove();
      finishEvent.remove();
      cancelEvent.remove();
    };
  }, []);

  const speak = useCallback(
    (textToSpeak = '') => {
      Tts.speak(textToSpeak, {
        iosVoiceId: voice,
        rate: 0.5,
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
    },
    [voice],
  );

  return {isSpeaking, speak};
}

export default useTextToSpeech;
