import React, { ReactElement } from 'react'
import { LongPressGestureHandler, State } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'

export default function LongPressWithScale({
  onLongPress,
  children,
}: {
  onLongPress: () => void
  children: ReactElement
}) {
  const scale = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  })
  return (
    //maybe Gesture handler should wrap animated?
    <Animated.View style={animatedStyle}>
      <LongPressGestureHandler
        onHandlerStateChange={({ nativeEvent }) => {
          switch (nativeEvent.state) {
            case State.BEGAN:
              scale.value = withSpring(0.9)
              break
            case State.CANCELLED:
            case State.FAILED:
            case State.END:
              scale.value = withSpring(1)
              break
            case State.ACTIVE:
              //TODO: add haptic feedback
              onLongPress()
              break
          }
        }}
      >
        {children}
      </LongPressGestureHandler>
    </Animated.View>
  )
}
