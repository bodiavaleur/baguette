import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {DEVICE_WINDOW_HEIGHT, DEVICE_WINDOW_WIDTH} from '~config/device';
import {snapPoint} from '~helpers/animations';
import {useEffect} from 'react';

type GestureContext = {
  x: number;
  y: number;
};

const OPEN_CARD_THRESHOLD = DEVICE_WINDOW_HEIGHT - 360;
const SNAP_POINTS_X = [-DEVICE_WINDOW_WIDTH, 0, DEVICE_WINDOW_WIDTH];
const SNAP_POINTS_Y = [0, OPEN_CARD_THRESHOLD];
const DURATION = 200;

export function useFlashcardAnimation(index: number) {
  const x = useSharedValue(0);
  const y = useSharedValue(-DEVICE_WINDOW_HEIGHT);
  const scale = useSharedValue(1);
  const rotationZ = useSharedValue(0);
  const rotationY = useSharedValue(0);

  const delay = index * DURATION;
  const rotationRangeZ = -5 + Math.random() * 15;

  useEffect(() => {
    y.value = withDelay(delay, withTiming(0));
    rotationZ.value = withDelay(delay, withTiming(rotationRangeZ));
  }, []);

  const cardGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureContext
  >({
    onStart: (evt, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: (evt, ctx) => {
      x.value = ctx.x + evt.translationX;
      y.value = ctx.y + evt.translationY;
      rotationZ.value = withTiming(0);
    },
    onEnd: evt => {
      const distX = snapPoint(x.value, evt.velocityX, SNAP_POINTS_X);
      const distY = snapPoint(y.value, evt.velocityY, SNAP_POINTS_Y);

      x.value = withTiming(distX);
      y.value = withTiming(distY);
      rotationZ.value = withTiming(rotationRangeZ);
      rotationY.value = withTiming(0);
      scale.value = withTiming(1);

      if (distY === OPEN_CARD_THRESHOLD) {
        rotationZ.value = withTiming(0);
        y.value = withSequence(withTiming(OPEN_CARD_THRESHOLD), withTiming(0));
        scale.value = withTiming(1.25);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: x.value},
      {translateY: y.value},
      {rotateZ: `${rotationZ.value}deg`},
      {scale: scale.value},
    ],
  }));

  return {
    cardGestureHandler,
    animatedStyle,
  };
}
