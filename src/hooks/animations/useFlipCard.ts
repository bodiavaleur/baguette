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

export function useFlipCard(enableFlip = false) {
  const x = useSharedValue(0);
  const rotationY = useSharedValue(0);
  const frontSideIndex = useSharedValue(1);

  const flipGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureContext
  >({
    onStart: (evt, ctx) => {
      ctx.x = x.value;
    },
    onActive: (evt, ctx) => {
      if (enableFlip) {
        x.value = ctx.x + evt.translationX;
      }
    },
    onEnd: () => {
      if (enableFlip) {
        frontSideIndex.value = frontSideIndex.value ? 0 : 1;

        rotationY.value = withTiming(rotationY.value === 180 ? 0 : 180);
      }
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
    transform: [{scaleX: -1}],
  }));

  return {
    flipGestureHandler,
    flipStyle,
    frontSideStyle,
    backSideStyle,
  };
}
