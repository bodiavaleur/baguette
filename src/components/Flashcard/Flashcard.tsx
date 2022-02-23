import React, {useEffect} from 'react';
import styles from './styles';
import Animated from 'react-native-reanimated';
import {useFlashcardAnimation} from '~hooks/animations/useFlashcardAnimation';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useFlipCard} from '~hooks/animations/useFlipCard';
import {Word} from '~types/word';
import FlashcardBack from '~components/FlashcardBack';
import FlashcardFront from '~components/FlashcardFront';
import AcceptIcon from '~assets/icons/accept-round.svg';
import CancelIcon from '~assets/icons/cancel-round.svg';
import {theme} from '~config/theme';
import {FlashcardSwipeState} from '~types/flashcards';
import {useAppDispatch} from '~hooks/redux/useAppDispatch';
import {
  decreaseFlashcardIntensity,
  increaseFlashcardIntensity,
} from '~redux/training/training.thunks';

const {Left, Right} = FlashcardSwipeState;

interface FlashcardProps {
  word: Word;
  index: number;
}

const Flashcard: React.FC<FlashcardProps> = ({word, index}) => {
  const dispatch = useAppDispatch();
  const flashcard = useFlashcardAnimation(index);
  const {flipGestureHandler, flipStyle, frontSideStyle, backSideStyle} =
    useFlipCard(flashcard.isCardOpen);

  useEffect(() => {
    const isSwipeLeft = flashcard.swipeDirection === Left;
    const isSwipeRight = flashcard.swipeDirection === Right;

    if (isSwipeLeft) {
      dispatch(decreaseFlashcardIntensity({wordId: word._id}));
    }

    if (isSwipeRight) {
      dispatch(increaseFlashcardIntensity({wordId: word._id}));
    }
  }, [flashcard.swipeDirection]);

  return (
    <PanGestureHandler onGestureEvent={flashcard.cardGestureHandler}>
      <Animated.View style={[styles.container, flashcard.animatedStyle]}>
        <PanGestureHandler onGestureEvent={flipGestureHandler}>
          <Animated.View style={[styles.snap, styles.left]} />
        </PanGestureHandler>

        <Animated.View style={flipStyle}>
          <Animated.View style={[styles.label, flashcard.leftLabel]}>
            <AcceptIcon
              width={64}
              height={64}
              color={theme.colors.acceptGreen}
            />
          </Animated.View>
          <Animated.View style={[styles.card, frontSideStyle]}>
            <FlashcardFront word={word} />
          </Animated.View>
          <Animated.View style={[styles.card, backSideStyle]}>
            <FlashcardBack word={word} />
          </Animated.View>
          <Animated.View style={[styles.label, flashcard.rightLabel]}>
            <CancelIcon width={64} height={64} color={theme.colors.dangerRed} />
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
