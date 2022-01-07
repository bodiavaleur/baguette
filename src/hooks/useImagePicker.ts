import {useState, useCallback} from 'react';
import ImagePicker, {Image, Options} from 'react-native-image-crop-picker';

const config: Options = {
  width: 256,
  height: 256,
  cropping: true,
  cropperCircleOverlay: true,
  mediaType: 'photo',
};

function useImagePicker() {
  const [image, setImage] = useState<Image | null>(null);

  const pickFromGallery = useCallback(async () => {
    const result = await ImagePicker.openPicker(config);

    if (result) {
      setImage(result);
    }
  }, []);

  const clearImage = useCallback(() => {
    setImage(null);
  }, []);

  return {image, pickFromGallery, clearImage};
}

export default useImagePicker;
