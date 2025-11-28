import BasePopup from './BasePopup';

const BirthdayPopup = () => (
  <BasePopup
    storageKey="hasSeenBirthdayPopup"
    imageSrc="/poster_birthday.png"
    imageAlt="Birthday Poster"
    showFireworks={true}
  />
);

export default BirthdayPopup;
