import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';

type GestureContext = {
  x: number;
  y: number;
};

export function useFlipCard() {
  const x = useSharedValue(0);
  const rotationY = useSharedValue(0);
  const frontSideIndex = useSharedValue(1);
  const backSideIndex = useSharedValue(0);

  const flipGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureContext
  >({
    onStart: (evt, ctx) => {
      ctx.x = x.value;
    },
    onActive: (evt, ctx) => {
      x.value = ctx.x + evt.translationX;
    },
    onEnd: evt => {
      frontSideIndex.value = frontSideIndex.value ? 0 : 1;
      backSideIndex.value = backSideIndex.value ? 1 : 0;

      rotationY.value = withTiming(rotationY.value === 180 ? 0 : 180);
    },
  });

  const flipStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    transform: [{rotateY: `${rotationY.value}deg`}],
  }));

  const frontSideStyle = useAnimatedStyle(() => ({
    zIndex: frontSideIndex.value,
  }));

  const backSideStyle = useAnimatedStyle(() => ({
    zIndex: backSideIndex.value,
    transform: [{rotateY: '180deg'}],
  }));

  return {
    flipGestureHandler,
    flipStyle,
    frontSideStyle,
    backSideStyle,
  };
}
