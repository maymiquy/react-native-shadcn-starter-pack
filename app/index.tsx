import * as React from "react";
import { View } from "react-native";
import Animated, {
 FadeInUp,
 FadeOutDown,
 LayoutAnimationConfig,
} from "react-native-reanimated";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Text } from "~/components/ui/text";

const GITHUB_AVATAR_URI =
 "https://avatars.githubusercontent.com/u/115140070?v=4";

export default function Screen() {
 const [progress, setProgress] = React.useState(78);

 function updateProgressValue() {
  setProgress(Math.floor(Math.random() * 100));
 }
 return (
  <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
   <Card className="w-full max-w-sm p-6 rounded-2xl">
    <CardHeader className="items-center">
     <Avatar alt="avatar" className="w-24 h-24">
      <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
      <AvatarFallback>
       <Text>RS</Text>
      </AvatarFallback>
     </Avatar>
     <View className="p-3" />
     <CardTitle className="pb-2 text-center">
      React Native + Expo + Tailwind + ShadcnUI{" "}
     </CardTitle>
     <CardTitle className="pb-2 text-center">Starter Pack</CardTitle>
     <View className="flex-row">
      <CardDescription className="text-base font-semibold">
       By Rick Sanchez
      </CardDescription>
     </View>
    </CardHeader>
    <CardContent>
     <View className="flex-row justify-around gap-3">
      <View className="items-center">
       <Text className="text-sm text-muted-foreground">Contribute :</Text>
       <Text className="text-md font-semibold">
        https://github.com/mrzachnugent/react-native-reusables
       </Text>
      </View>
     </View>
    </CardContent>
    <CardFooter className="flex-col gap-3 pb-0">
     <View className="flex-row items-center overflow-hidden">
      <Text className="text-sm text-muted-foreground">Productivity:</Text>
      <LayoutAnimationConfig skipEntering>
       <Animated.View
        key={progress}
        entering={FadeInUp}
        exiting={FadeOutDown}
        className="w-11 items-center"
       >
        <Text className="text-sm font-bold text-sky-600">{progress}%</Text>
       </Animated.View>
      </LayoutAnimationConfig>
     </View>
     <Progress
      value={progress}
      className="h-2"
      indicatorClassName="bg-sky-600"
     />
     <View />
     <Button
      variant="outline"
      className="shadow shadow-foreground/5"
      onPress={updateProgressValue}
     >
      <Text>Update</Text>
     </Button>
    </CardFooter>
   </Card>
  </View>
 );
}
