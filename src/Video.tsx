import {Composition} from 'remotion';
import FirstAnimation from './FirstAnimation';

export const RemotionVideo: React.FC = () => {
  return (
    <Composition
      id="FirstAnimation"
      component={FirstAnimation}
      durationInFrames={3600} // 2 minutes at 30fps
      fps={30}
      width={1920}
      height={1080}
    />
  );
};