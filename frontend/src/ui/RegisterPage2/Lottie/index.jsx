import Lottie from 'react-lottie';
import animationConfettis from '../../../assets/confettis.json';

const LottieConfettis = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationConfettis, // Votre fichier JSON Lottie
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  
    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={'100vh'} // Hauteur souhaitée
          width={'100%'} // Largeur souhaitée
        />
      </div>
    );
  };
  
  export default LottieConfettis;