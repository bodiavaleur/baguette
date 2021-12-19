import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import Animated from 'react-native-reanimated';
import {useFlashcardAnimation} from '~hooks/animations/useFlashcardAnimation';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useFlipCard} from '~hooks/animations/useFlipCard';

interface FlashcardProps {
  title: string;
  index: number;
}

const Flashcard: React.FC<FlashcardProps> = ({title, index}) => {
  const {cardGestureHandler, animatedStyle} = useFlashcardAnimation(index);
  const {flipGestureHandler, flipStyle, frontSideStyle, backSideStyle} =
    useFlipCard();

  return (
    <PanGestureHandler onGestureEvent={cardGestureHandler}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <PanGestureHandler onGestureEvent={flipGestureHandler}>
          <Animated.View style={[styles.snap, styles.left]} />
        </PanGestureHandler>

        <Animated.View style={flipStyle}>
          <Animated.View style={[styles.card, frontSideStyle]}>
            <Text style={styles.title}>{title}</Text>
          </Animated.View>
          <Animated.View style={[styles.card, backSideStyle]}>
            <Text style={styles.title}>BACK SIDE</Text>
          </Animated.View>
        </Animated.View>

        <PanGestureHandler onGestureEvent={flipGestureHandler}>
          <Animated.View style={[styles.snap, styles.right]} />
        </PanGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Flashcard;
