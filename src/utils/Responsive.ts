import {Dimensions, PixelRatio, StatusBar, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

// Responsive Height & Width

/**
 * Menghitung ukuran berdasarkan persentase lebar layar
 * @param widthPercent - Persentase lebar dalam angka atau string
 * @returns Lebar dalam pixel
 */
const widthPercentage = (widthPercent: number | string): number => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

/**
 * Menghitung ukuran berdasarkan persentase tinggi layar
 * @param heightPercent - Persentase tinggi dalam angka atau string
 * @returns Tinggi dalam pixel
 */
const heightPercentage = (heightPercent: number | string) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

/**
 * Mengecek offset yang diperlukan berdasarkan ukuran layar dan platform
 * @param screenWidth - Lebar layar
 * @param screenHeight - Tinggi layar
 * @returns Offset yang diperlukan dalam pixel
 */
const checkOffset = (screenWidth: number, screenHeight: number): number => {
  if (screenWidth > screenHeight) return 0; // Jika landscape, tidak ada offset
  return Platform.OS === 'ios' ? 78 : StatusBar.currentHeight ?? 0;
};

// Dapatkan tinggi standar berdasarkan orientasi
const standardLength = width > height ? width : height;
const offset = checkOffset(width, height);
const deviceHeight =
  Platform.OS === 'android' ? standardLength - offset : standardLength;

/**
 * Menghitung ukuran font berdasarkan lebar layar
 * @param percent - Persentase ukuran font berdasarkan lebar
 * @returns Ukuran font dalam pixel
 */
const FPercentage = (percent: number): number => {
  const heightPercent = (percent * width) / 100;
  return Math.round(heightPercent);
};

/**
 * Menghitung ukuran font berdasarkan tinggi layar standar
 * @param fontSize - Ukuran font dasar
 * @param standardScreenHeight - Tinggi layar standar (default: 680)
 * @returns Ukuran font dalam pixel
 */
const FValue = (fontSize: number, standardScreenHeight = 680): number => {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

export {widthPercentage, heightPercentage, FPercentage, FValue};
