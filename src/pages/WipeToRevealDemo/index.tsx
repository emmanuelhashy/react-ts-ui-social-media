import {WipeToReveal} from "../../components/wipe-to-reveal";
import imgUrl from '../../assets/Profile.png'

export const WipeToRevealDemo = () => {
  const handleComplete = () => {};

  return (
    <div>
      <WipeToReveal
        width={250}
        height={250}
        minWipePercentage={70}
        className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
        onComplete={handleComplete}
        gradientColors={["#71B280", "#134E5E", "#FDCC92"]}
      >
        <img src={imgUrl} alt="pic"/>
      </WipeToReveal>
    </div>
  );
};
