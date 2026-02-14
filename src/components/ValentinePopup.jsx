import BasePopup from './BasePopup';

const ValentinePopup = () => (
  <BasePopup
    storageKey="hasSeenValentinePopup"
    imageSrc="/poster_valentine.png"
    imageAlt="Valentine Poster"
    showFireworks={true}
  />
);

export default ValentinePopup;
