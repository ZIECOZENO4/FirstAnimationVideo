import './tailwind.css';
import { Composition } from "remotion";
import FirstAnimation from './FirstAnimation';

export const RemotionRoot: React.FC = () => {
  return (
    <div>
      <Composition
        id="FirstAnimation"
        component={FirstAnimation}
        durationInFrames={900} // 30 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </div>
  );
};