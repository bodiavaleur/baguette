import React from 'react';
import styles from './styles';
import Animated from 'react-native-reanimated';
import {useFlashcardAnimation} from '~hooks/animations/useFlashcardAnimation';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useFlipCard} from '~hooks/animations/useFlipCard';
import {Word} from '~types/word';
import FlashcardBack from '~components/FlashcardBack';
import FlashcardFront from '~components/FlashcardFront';

interface FlashcardProps {
  word: Word;
  index: number;
}

const Flashcard: React.FC<FlashcardProps> = ({word, index}) => {
  const animatedFlashcard = useFlashcardAnimation(index);
  const {flipGestureHandler, flipStyle, frontSideStyle, backSideStyle} =
    useFlipCard(animatedFlashcard.isCardOpen);

  return (
    <PanGestureHandler onGestureEvent={animatedFlashcard.cardGestureHandler}>
      <Animated.View
        style={[styles.container, animatedFlashcard.animatedStyle]}>
        <PanGestureHandler onGestureEvent={flipGestureHandler}>
          <Animated.View style={[styles.snap, styles.left]} />
        </PanGestureHandler>

        <Animated.View style={flipStyle}>
          <Animated.View style={[styles.card, frontSideStyle]}>
            <FlashcardFront word={word} />
          </Animated.View>
          <Animated.View style={[styles.card, backSideStyle]}>
            <FlashcardBack word={word} />
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
