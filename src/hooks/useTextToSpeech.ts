import {useState, useCallback, useEffect} from 'react';
import Tts from 'react-native-tts';
import {USER_LANGUAGE_CODE} from '~config/user';

Tts.setDefaultLanguage(USER_LANGUAGE_CODE);

function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voice, setVoice] = useState('');

  const startSpeak = useCallback(() => setIsSpeaking(true), []);
  const endSpeak = useCallback(() => setIsSpeaking(false), []);

  const loadVoice = async () => {
    const voices = await Tts.voices();
    const [langVoice] = voices.filter(
      ({language}) => language === USER_LANGUAGE_CODE,
    );

    if (langVoice) {
      setVoice(langVoice.id);
    }
  };

  useEffect(() => {
    const startEvent = Tts.addEventListener('tts-start', startSpeak);
    const finishEvent = Tts.addEventListener('tts-finish', endSpeak);
    const cancelEvent = Tts.addEventListener('tts-cancel', endSpeak);

    loadVoice();

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
