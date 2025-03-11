import localFont from 'next/font/local';
export const helvetica = localFont({
  src: [
    { path: '../public/assets/Fonts/Helvetica/Helvetica.ttf', weight: '400', style: 'normal', },
    { path: '../public/assets/Fonts/Helvetica/Helvetica-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/assets/Fonts/Helvetica/helvetica-light.ttf', weight: '300', style: 'normal' },
    { path: '../public/assets/Fonts/Helvetica/Helvetica-Black.otf', weight: '900', style: 'normal' },
  ],
  display: 'swap',
});

export const poppins = localFont({
    src: [
        { path: '../public/assets/Fonts/Poppins/Poppins-Thin.ttf', weight: '100', style: 'normal', },
        { path: '../public/assets/Fonts/Poppins/Poppins-ExtraLight.ttf', weight: '200', style: 'normal' },
        { path: '../public/assets/Fonts/Poppins/Poppins-Light.ttf', weight: '300', style: 'normal' },
        { path: '../public/assets/Fonts/Poppins/Poppins-Regular.ttf', weight: '400', style: 'normal' },
        { path: '../public/assets/Fonts/Poppins/Poppins-Medium.ttf', weight: '500', style: 'normal', },
        { path: '../public/assets/Fonts/Poppins/Poppins-SemiBold.ttf', weight: '600', style: 'normal' },
        { path: '../public/assets/Fonts/Poppins/Poppins-Bold.ttf', weight: '700', style: 'normal' },
        { path: '../public/assets/Fonts/Poppins/Poppins-ExtraBold.ttf', weight: '800', style: 'normal' },
        { path: '../public/assets/Fonts/Poppins/Poppins-Black.ttf', weight: '900', style: 'normal' }
      ],
      display: 'swap',
});