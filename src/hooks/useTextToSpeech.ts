import {useState, useCallback, useEffect} from 'react';
import Tts from 'react-native-tts';

function useTextToSpeech() {
  const [text, setText] = useState('');

  useEffect(() => {
    Tts.speak(text, {
      iosVoiceId: 'com.apple.ttsbundle.Thomas-compact',
      rate: 0.5,
      androidParams: {
        KEY_PARAM_PAN: -1,
        KEY_PARAM_VOLUME: 0.5,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
  }, [text]);

  const speak = useCallback((textToSpeak = '') => {
    setText(textToSpeak);
  }, []);

  return {speak};
}

export default useTextToSpeech;
